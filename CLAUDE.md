# manuelperez.dev

Personal site and blog. Astro 7 (static, no UI framework), Tailwind CSS 4, icons from Simple Icons and Tabler via `src/components/Icon.astro`.
- UI rules, tokens and components: **read `docs/STYLEGUIDE.md` before touching any UI.**
  Colors and fonts come only from the tokens in `src/styles/global.css`; check light and dark.
- Blog posts: URL `/blog/<slug>` from frontmatter, schema in `src/content.config.js` (collections `blog` and `blogEn`).
- Languages: Spanish at `/`, English at `/en/` (Astro i18n, `src/i18n.js`). Interface strings go in `src/i18n.js`;
  content goes in `src/data/` as `{ es, en }` pairs, and the About text in `src/components/About.astro`.
  Every text change needs both languages. Posts: `blog/<folder>/index.md` (Spanish) and optional `index.en.md`
  (English, same slug, served at `/en/blog/<slug>`); without a translation `/en/` lists the Spanish post with an
  "In Spanish" badge.
  Code, comments and commits in English.
- Commands: `npm run dev`, `npm run build`, `npm run lint` (Biome + stylelint), `npm run format`.
- Workflow: commit straight to `main`, no PRs. Pushing `main` deploys production on Netlify.
- Copy (site texts, experience, posts): run it through the `humanizer` skill before committing, using the author's
  posts in `blog/` as the voice sample. Never add facts, dates or claims the author did not give.
