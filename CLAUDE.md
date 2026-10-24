# manuelperez.dev

Personal site and blog. Astro 7 (static, no UI framework), Tailwind CSS 4, icons from Simple Icons and Tabler via `src/components/Icon.astro`.
- UI rules, tokens and components: **read `docs/STYLEGUIDE.md` before touching any UI.**
  Colors and fonts come only from the tokens in `src/styles/global.css`; check light and dark.
- Blog posts: `blog/<folder>/index.md`, URL `/blog/<slug>` from frontmatter, schema in `src/content.config.js`.
- Content is in Spanish (`lang="es"`); code, comments and commits in English.
- Commands: `npm run dev`, `npm run build`, `npm run lint` (Biome + stylelint), `npm run format`.
- Workflow: commit straight to `main`, no PRs. Pushing `main` deploys production on Netlify.
