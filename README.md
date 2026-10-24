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

## Blog posts

Each post lives in `blog/<folder>/index.md` with its images next to it. The URL is `/blog/<slug>`, taken from the `slug` frontmatter field. Frontmatter is validated in `src/content.config.js`.

## Deploy

Netlify builds with `npm run build` and publishes `dist/` (see `netlify.toml`).
