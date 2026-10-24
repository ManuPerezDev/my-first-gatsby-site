// Spanish lives at / and English at /en/. Blog posts exist only in Spanish.
// Interface strings live here; page content with a language lives in src/data/ as { es, en } pairs.
export const languages = { es: 'Español', en: 'English' }
export const defaultLang = 'es'

export const homePath = lang => (lang === defaultLang ? '/' : `/${lang}/`)

const ui = {
  es: {
    skipToContent: 'Saltar al contenido',
    sectionsLabel: 'Secciones',
    sections: { about: 'Sobre mí', experience: 'Experiencia', stack: 'Stack', articles: 'Artículos' },
    sectionIds: { about: 'sobre-mi', experience: 'experiencia', stack: 'stack', articles: 'articulos' },
    tagline: 'Un ser humano desarrollando productos en el mundo de la IA.',
    footer: 'Hecho con Astro y Tailwind CSS',
    languageLabel: 'Idioma',
    themeLabel: 'Tema',
    themeSystem: 'Usar el tema del sistema',
    themeLight: 'Tema claro',
    themeDark: 'Tema oscuro',
    inSpanish: null,
    dateLocale: 'es-ES',
    ogLocale: 'es_ES',
    description: 'Blog sobre desarrollo de software y buenas prácticas.'
  },
  en: {
    skipToContent: 'Skip to content',
    sectionsLabel: 'Sections',
    sections: { about: 'About', experience: 'Experience', stack: 'Stack', articles: 'Articles' },
    sectionIds: { about: 'about', experience: 'experience', stack: 'stack', articles: 'articles' },
    tagline: 'A human being building products in the world of AI.',
    footer: 'Built with Astro and Tailwind CSS',
    languageLabel: 'Language',
    themeLabel: 'Theme',
    themeSystem: 'Use the system theme',
    themeLight: 'Light theme',
    themeDark: 'Dark theme',
    inSpanish: 'In Spanish',
    dateLocale: 'en-GB',
    ogLocale: 'en_GB',
    description: 'Blog about software development and good practices.'
  }
}

export const useTranslations = lang => ui[lang] ?? ui[defaultLang]
