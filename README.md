# manuelperez.dev

Personal site and blog built with [Astro](https://astro.build) and Tailwind CSS. Design system: [`docs/STYLEGUIDE.md`](docs/STYLEGUIDE.md).

## Development

Requires Node.js >= 22.23.4.

```shell
npm ci
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview
```

## Languages

Spanish lives at `/` and English at `/en/`. Interface strings are in `src/i18n.js`; content in `src/data/` has a Spanish and an English version. Blog posts are written in Spanish only.

## Blog posts

Each post lives in `blog/<folder>/index.md` with its images next to it. The URL is `/blog/<slug>`, taken from the `slug` frontmatter field. Frontmatter is validated in `src/content.config.js`.

## Deploy

Netlify builds with `npm run build` and publishes `dist/` (see `netlify.toml`).
