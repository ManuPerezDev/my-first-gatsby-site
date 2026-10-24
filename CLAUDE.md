# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal site and blog (manuelperez.dev). Astro 7, fully static, no UI framework; Tailwind CSS 4; Spanish and English.

## Commands

- `npm ci` to install (the lockfile is committed; Node >= 22.23.4).
- `npm run dev` (http://localhost:4321), `npm run build` (outputs `dist/`), `npm run preview`.
- `npm run lint` runs Biome, then stylelint for CSS. `npm run format` applies both fixers.
- There are no tests. Verify changes with `npm run build` and by looking at the page in light and dark, `/` and `/en/`.

## Workflow

- Commit straight to `main`, no PRs or branches. Pushing `main` deploys production on Netlify
  (`netlify.toml`: `npm run build`, publish `dist`, Node 24), so confirm with the author before pushing.
- Code, comments and commits in English. Site content is Spanish first, English second.
- Copy (site texts, experience, posts): run it through the `humanizer` skill before committing, using the author's
  posts in `blog/` as the voice sample. Never add facts, dates or claims the author did not give.

## Architecture

- **Pages are thin.** `src/pages/index.astro` and `src/pages/en/index.astro` render `src/layouts/HomePage.astro`
  with a `lang`; `src/pages/blog/[slug].astro` and `src/pages/en/blog/[slug].astro` render `src/layouts/PostPage.astro`.
  Both layouts wrap `BaseLayout.astro` (head, SEO, fonts, theme script).
- **Languages.** Spanish at `/`, English at `/en/` (Astro i18n, `prefixDefaultLocale: false`). Interface strings and
  per-language settings (section ids, date locale, og:locale) live in `src/i18n.js`; content lives in `src/data/` as
  `{ es, en }` pairs; the About text is in `src/components/About.astro`. Every text change needs both languages.
- **Blog.** `blog/<folder>/index.md` is the Spanish post (collection `blog`); an optional `index.en.md` with the same
  `slug` is its English translation (collection `blogEn`), served at `/en/blog/<slug>`. URLs come from the `slug`
  frontmatter, not the folder name. `src/data/posts.js` builds the list per language and falls back to the Spanish post
  (with an "In Spanish" badge) when there is no translation. Schema: `src/content.config.js`.
- **Theme.** The inline script in `BaseLayout.astro` runs before paint, sets `data-theme` (light/dark) and
  `data-theme-preference` (system/light/dark) on `<html>`, and exposes `window.siteTheme` for `ThemeToggle.astro`.
  It follows OS changes while the preference is "system", syncs tabs via the `storage` event and animates the switch
  with a View Transition. Tailwind's `dark:` variant is redefined to follow `data-theme`, not the OS.
- **Design system.** Read `docs/STYLEGUIDE.md` before touching UI. Colors and fonts come only from the tokens in
  `src/styles/global.css` (exposed to Tailwind with `@theme inline` as `bg-canvas`, `text-ink`, `text-accent`...).
  Fonts are self-hosted through the Astro fonts API (`fonts` in `astro.config.mjs`, `<Font>` in `BaseLayout`).
- **CV.** `src/cv/cv.js` builds an ATS-friendly PDF (one column, Helvetica text, no images) with pdfmake from
  `src/data/` (`profile.js`, `experience.js`, `stack.js`). Public versions without contact details are static endpoints
  (`src/pages/manuel-perez-cv.pdf.js`, `src/pages/en/...`). `npm run cv:private` writes the full versions with email
  and phone from the git-ignored `cv.private.json` into `cv-private/`; contact details must never be committed or deployed.
- **Icons.** `src/components/Icon.astro` inlines SVGs at build time from Iconify JSON: `si:` for brands (Simple Icons),
  `tabler:` for everything else. Monochrome only; an unknown name fails the build.

## Gotchas

- Tailwind 4 puts utilities in a cascade layer, so unlayered CSS beats them regardless of specificity. Keep custom CSS
  in `global.css` inside `@layer base`, `components` or `utilities`.
- Astro drops a line break right before a tag, so `word\n<a>` renders as `word<a>`. End the line with `{' '}` or keep
  the text and the tag on one line.
- Biome cannot see what an `.astro` template uses, so unused-import rules are off for `.astro` in `biome.json`.
  Never run Biome unsafe fixes with `--only` on `.astro` files: `--only` ignores that override and deletes imports
  the template needs.
- pdfmake mutates the document it receives. `src/cv/cv.js` passes it a `structuredClone`; without it the shared
  `src/data/` arrays turn into objects and the pages built after the CV show `[object Object]`.
- Biome also lints `.svg` files (e.g. `public/favicon.svg` needs a `<title>`).
