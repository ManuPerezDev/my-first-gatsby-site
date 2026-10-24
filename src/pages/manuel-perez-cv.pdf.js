// Public Spanish CV, generated at build time without contact details
import { renderCv } from '../cv/cv.js'

export const GET = async () =>
  new Response(await renderCv({ lang: 'es' }), { headers: { 'Content-Type': 'application/pdf' } })
