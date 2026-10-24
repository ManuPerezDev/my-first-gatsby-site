# Style guide: "Arranque de consola"

Visual identity of manuelperez.dev, inspired by the PlayStation 2 era boot screen: blue-black
background, particles of light and a blue glow. This guide is written for people and for AI
agents: follow it when adding or changing UI.

## Principles

1. **Tokens only.** Every color and font comes from the tokens in `src/styles/global.css`.
   Never write a hex, `rgb()` or a Tailwind palette color (`blue-500`, `white`...) in a component.
2. **Tailwind first.** Style components with Tailwind utility classes built from the tokens.
   Write CSS only for things utilities cannot express (the background, `.glow`, Markdown in `.post-body`),
   and put it in `src/styles/global.css`.
3. **Both themes, always.** Every change must look right in light and dark. Theme switching
   is the `data-theme` attribute on `<html>`; use the `dark:` variant only for structural
   differences (e.g. which icon shows), never for colors: color tokens already switch.
4. **The atmosphere lives in the background and the name.** Particles, halo and glow are
   global. Content stays calm: no extra gradients, shadows or animations on cards.
5. **Static by default.** Pages are `.astro` components with no client JavaScript. A small
   `<script>` is fine for progressive enhancement (theme toggle, nav highlight). React is only
   used to render the stack icons at build time; do not add `client:*` islands without a reason.

## Color tokens

| Token (Tailwind class)                | Use                                | Light      | Dark        |
| ------------------------------------- | ---------------------------------- | ---------- | ----------- |
| `canvas` (`bg-canvas`)                | Page background                    | `#eef1f8`  | `#05070f`   |
| `ink` (`text-ink`)                    | Headings, names, emphasis          | `#0c1433`  | `#e3e9ff`   |
| `ink-muted` (`text-ink-muted`)        | Body text (default on `body`)      | `#3f4a6b`  | `#9aa6c8`   |
| `ink-faint` (`text-ink-faint`)        | Dates, labels, inactive nav, icons | `#626b8a`  | `#707aa0`   |
| `accent` (`text-accent`, `bg-accent`) | Links, hover, active state, role   | `#2747c9`  | `#6f9bff`   |
| `accent-soft` (`bg-accent-soft`)      | Chip/tag background, inline code   | `#dce4fb`  | blue at 14% |
| `accent-ink` (`text-accent-ink`)      | Text on `accent-soft`              | `#2340b4`  | `#a9c3ff`   |
| `hover` (`bg-hover`)                  | Hover surface of list items        | blue at 6% | blue at 7%  |
| `line` (`border-line`)                | Borders and dividers               | `#d3d9ea`  | blue at 16% |
| `plate` (`bg-plate`)                  | White badge behind brand icons     | `#fff`     | `#fff`      |

Effect-only variables (used in `global.css`, not as classes): `--glow`, `--halo`, `--particles`, `--code-bg`.

Every text token passes WCAG AA (4.5:1) on `canvas` in both themes. Check contrast when adding a token.

## Typography

Fonts are self-hosted with the Astro fonts API (`fonts` in `astro.config.mjs`, `<Font>` in `BaseLayout`).

| Role    | Font                    | Class                 | Use                                                                                       |
| ------- | ----------------------- | --------------------- | ----------------------------------------------------------------------------------------- |
| Display | Michroma                | `font-display`        | The name, post titles, `h2` in posts. Sparingly: never body text or long titles in lists. |
| Body    | Exo 2 (400–700, italic) | `font-sans` (default) | Everything readable.                                                                      |
| Data    | Share Tech Mono         | `font-mono`           | Dates, section labels, nav, role, footer. Usually `uppercase tracking-widest text-sm`.    |

Scale in use: name `text-3xl sm:text-4xl`, post title `text-2xl sm:text-3xl`, item titles
`font-semibold` at base size, body base, secondary text `text-sm`.

## Layout

- **Home:** two columns from `lg` (1024px). Left: sticky `Sidebar` (name, role, tagline, nav,
  social links, theme toggle). Right: `main` with one `Section` per block (`sobre-mi`,
  `experiencia`, `stack`, `articulos`). Below `lg` it is one column and each section title
  sticks to the top while scrolling.
- **Posts:** one column, `max-w-3xl`, back link and theme toggle on top, Markdown inside `.post-body`.
- Side padding `px-6` on mobile, `md:px-12`, `lg:px-24`. Space between sections `mb-16 md:mb-24 lg:mb-36`.

## Components

| Component        | File                                  | Notes                                                                                     |
| ---------------- | ------------------------------------- | ----------------------------------------------------------------------------------------- |
| `BaseLayout`     | `src/layouts/BaseLayout.astro`        | `<html lang="es">`, SEO, fonts, theme script. Every page uses it.                         |
| `Sidebar`        | `src/components/Sidebar.astro`        | Takes `sections` (`{ id, title }[]`); highlights the section in view with `aria-current`. |
| `Section`        | `src/components/Section.astro`        | `id` + `title`. Title is visible on mobile, `sr-only` on desktop.                         |
| `ExperienceList` | `src/components/ExperienceList.astro` | Reads `src/data/experience.js`.                                                           |
| `ArticleList`    | `src/components/ArticleList.astro`    | Takes the `blog` collection entries.                                                      |
| `Stack`          | `src/components/Stack/Stack.jsx`      | Chips with brand icon on a `plate` badge.                                                 |
| `ThemeToggle`    | `src/components/ThemeToggle.astro`    | Stores the choice in `localStorage.theme`; default follows the OS.                        |

### Patterns

- **List item (experience, article):** grid `sm:grid-cols-8`, date or thumbnail in 2 columns,
  content in 6. On `lg` hover the item gets `bg-hover` and the rest of the list fades to 50%.
- **Section label / date:** `font-mono text-sm tracking-widest uppercase text-ink-faint`.
- **Chip:** `rounded-full bg-accent-soft text-accent-ink text-sm font-medium px-3 py-1.5`.
- **Link inside text:** `text-ink` + `hover:text-accent`; in Markdown, `accent` underlined.
- **External link:** `target="_blank" rel="noopener noreferrer"` and an `↗` that moves on hover.

## Motion and accessibility

- Only two animations: the name `.glow` pulse and small hover translations. Both stop with
  `prefers-reduced-motion` (`motion-reduce:transition-none`, and the pulse only runs under
  `no-preference`).
- Visible focus: global `:focus-visible` outline in `accent`. Do not remove it.
- Icon-only links and buttons need `aria-label`. Decorative icons get `aria-hidden`.
- Skip link "Saltar al contenido" on the home page.

## Inspiration limits

Colors, typography and atmosphere only. No console logos, no controller button symbols:
they are Sony trademarks.
