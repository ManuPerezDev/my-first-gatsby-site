// Builds the CV as a PDF from the same data as the site (src/data, src/i18n.js).
// ATS-friendly on purpose: one column, real selectable text in a standard font (Helvetica, not embedded),
// conventional section headings, no images or icons.
// Used by the public endpoints in src/pages (no contact details) and by scripts/cv-private.mjs (with them).
import pdfmake from 'pdfmake'
import { experience } from '../data/experience.js'
import { profile } from '../data/profile.js'
import { stack } from '../data/stack.js'
import { useTranslations } from '../i18n.js'

const helvetica = {
  normal: 'Helvetica',
  bold: 'Helvetica-Bold',
  italics: 'Helvetica-Oblique',
  bolditalics: 'Helvetica-BoldOblique'
}
pdfmake.setFonts({ Helvetica: helvetica })
// The CV loads nothing from the network or the disk; only the built-in standard font names are allowed
pdfmake.setUrlAccessPolicy(() => false)
pdfmake.setLocalAccessPolicy(path => Object.values(helvetica).includes(path))

const text = (value, lang) => (typeof value === 'string' ? value : value[lang])
const withoutProtocol = url => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

const sectionTitle = title => [
  { text: title.toUpperCase(), style: 'section' },
  {
    canvas: [{ type: 'line', x1: 0, y1: 0, x2: 495, y2: 0, lineWidth: 0.6, lineColor: '#9aa6c8' }],
    margin: [0, 2, 0, 8]
  }
]

const entry = (item, lang) => ({
  stack: [
    { text: `${text(item.title, lang)}, ${item.organization}`, style: 'entryTitle' },
    { text: text(item.time, lang), style: 'entryDate' },
    { ul: item.body[lang], style: 'entryBody' }
  ],
  margin: [0, 0, 0, 10],
  unbreakable: true
})

/**
 * @param {{ lang: 'es' | 'en', contact?: { email?: string, phone?: string } }} options
 * @returns {Promise<Buffer>}
 */
export const renderCv = async ({ lang, contact = {} }) => {
  const t = useTranslations(lang)
  const contactLine = [
    text(profile.location, lang),
    contact.email && { text: contact.email, link: `mailto:${contact.email}` },
    contact.phone,
    ...Object.values(profile.links).map(url => ({ text: withoutProtocol(url), link: url }))
  ].filter(Boolean)

  const docDefinition = {
    pageSize: 'A4',
    pageMargins: [50, 48, 50, 48],
    info: {
      title: `${profile.name} - CV`,
      author: profile.name,
      subject: `${profile.role} CV`,
      keywords: stack.flatMap(group => group.items.map(item => text(item.name, lang))).join(', ')
    },
    defaultStyle: { font: 'Helvetica', fontSize: 10, lineHeight: 1.3, color: '#1c2333' },
    styles: {
      name: { fontSize: 22, bold: true },
      role: { fontSize: 12, color: '#2747c9', margin: [0, 2, 0, 6] },
      contact: { fontSize: 9, color: '#3f4a6b', margin: [0, 0, 0, 16] },
      section: { fontSize: 11, bold: true, characterSpacing: 1, margin: [0, 6, 0, 0] },
      entryTitle: { bold: true, fontSize: 10.5 },
      entryDate: { italics: true, fontSize: 9, color: '#3f4a6b', margin: [0, 1, 0, 3] },
      entryBody: { margin: [0, 0, 0, 0] },
      paragraph: { margin: [0, 0, 0, 6] }
    },
    content: [
      { text: profile.name, style: 'name' },
      { text: profile.role, style: 'role' },
      { text: contactLine.flatMap((part, i) => (i === 0 ? [part] : ['  ·  ', part])), style: 'contact' },

      ...sectionTitle(t.cv.summary),
      ...profile.summary[lang].map(paragraph => ({ text: paragraph, style: 'paragraph' })),

      ...sectionTitle(t.cv.experience),
      ...experience.filter(item => item.kind === 'work').map(item => entry(item, lang)),

      ...sectionTitle(t.cv.education),
      ...experience.filter(item => item.kind === 'education').map(item => entry(item, lang)),

      ...sectionTitle(t.cv.skills),
      ...stack.map(group => ({
        text: [
          { text: `${text(group.title, lang)}: `, bold: true },
          group.items.map(item => text(item.name, lang)).join(', ')
        ],
        style: 'paragraph'
      })),

      ...sectionTitle(t.cv.languages),
      { ul: profile.spokenLanguages.map(language => language[lang]) }
    ]
  }

  return pdfmake.createPdf(docDefinition).getBuffer()
}
