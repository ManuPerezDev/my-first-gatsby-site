// Who the site and the CV are about. Texts are { es, en } pairs; see src/i18n.js.
// Private contact details (email, phone) never live here: see cv.private.example.json.
export const profile = {
  name: 'Manuel Pérez Regalado',
  role: 'Product Developer',
  // CV title: adds the keywords recruiters and ATS filters search for
  cvHeadline: 'Product Developer · Full Stack Software Engineer',
  location: { es: 'Tenerife, España', en: 'Tenerife, Spain' },
  links: {
    website: 'https://manuelperez.dev',
    linkedin: 'https://www.linkedin.com/in/manuel-perez-regalado/',
    github: 'https://github.com/ManuPerezDev'
  },
  // CV summary, written for the CV (the site's About text lives in src/components/About.astro)
  summary: {
    es: [
      'Desarrollador de software con experiencia profesional desde 2021. Actualmente trabajo como product developer en Audiense, aplicando TDD y XP potenciados por IA.'
    ],
    en: [
      'Software developer with professional experience since 2021. I currently work as a product developer at Audiense, practising TDD and XP boosted by AI.'
    ]
  },
  spokenLanguages: [
    { es: 'Español: nativo', en: 'Spanish: native' },
    { es: 'Inglés: B2', en: 'English: B2' }
  ]
}
