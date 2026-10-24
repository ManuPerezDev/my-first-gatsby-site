// Who the site and the CV are about. Texts are { es, en } pairs; see src/i18n.js.
// Private contact details (email, phone) never live here: see cv.private.example.json.
export const profile = {
  name: 'Manuel Pérez Regalado',
  role: 'Product Developer',
  location: { es: 'Tenerife, España', en: 'Tenerife, Spain' },
  links: {
    website: 'https://manuelperez.dev',
    linkedin: 'https://www.linkedin.com/in/manuel-perez-regalado/',
    github: 'https://github.com/ManuPerezDev'
  },
  // CV summary: the author's own About text without the greeting (keep in sync with src/components/About.astro)
  summary: {
    es: [
      'Soy desarrollador de software desde 2021. Empecé a trabajar en la fantástica empresa Lean Mind, afincada en Tenerife. Allí aprendí mucho de buenas prácticas de desarrollo, tecnologías y, sobre todo, paciencia.',
      'Más tarde tuve la oportunidad de unirme a Audiense como desarrollador de producto. Desde entonces desarrollo producto junto con un equipo de profesionales increíble. Nuestro mayor reto es adaptarnos a un nuevo mundo basado en IA sin perder de vista las necesidades de nuestros clientes.'
    ],
    en: [
      'I have been a software developer since 2021. I started out at Lean Mind, a fantastic company based in Tenerife, where I learned a lot about good development practices, technologies and, above all, patience.',
      'Later I had the chance to join Audiense as a product developer. Since then I have been building product with an incredible team of professionals. Our biggest challenge is adapting to a new world built on AI without losing sight of what our customers need.'
    ]
  },
  spokenLanguages: [
    { es: 'Español: nativo', en: 'Spanish: native' },
    { es: 'Inglés: B2', en: 'English: B2' }
  ]
}
