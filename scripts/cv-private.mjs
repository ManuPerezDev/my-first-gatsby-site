// Generates the full CV, with email and phone, for job applications. Never deployed:
// contact details come from cv.private.json and the PDFs go to cv-private/, both ignored by git.
// Usage: npm run cv:private
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { renderCv } from '../src/cv/cv.js'

const contactFile = new URL('../cv.private.json', import.meta.url)
if (!existsSync(contactFile)) {
  console.error('Missing cv.private.json. Copy cv.private.example.json and fill in your email and phone.')
  process.exit(1)
}
const contact = JSON.parse(readFileSync(contactFile, 'utf8'))

const outDir = new URL('../cv-private/', import.meta.url)
mkdirSync(outDir, { recursive: true })
for (const lang of ['es', 'en']) {
  const file = new URL(`manuel-perez-cv-${lang}.pdf`, outDir)
  writeFileSync(file, await renderCv({ lang, contact }))
  console.log(`Written ${file.pathname}`)
}
