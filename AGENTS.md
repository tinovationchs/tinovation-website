# Repository Guidelines

## Project Structure & Module Organization

This is a SvelteKit site for Tinovation. Route pages live in `src/routes/`, reusable UI components in `src/lib/components/`, shared data and types in `src/lib/`, and MDsveX resource articles in `src/guides/`. Static assets are served from `static/`; use `static/showcase/` for project thumbnails, `static/guides/` for guide images, and `static/website/` for site branding and metadata images.

Key content files include `src/lib/showcase.ts` for showcase cards, `src/lib/resources.ts` for resource navigation, and `src/lib/leaderboards/` for leaderboard data.

## Build, Test, and Development Commands

- `npm run dev` starts the Vite dev server.
- `npm run build` creates the production SvelteKit build.
- `npm run preview` serves the built output locally.
- `npm run check` runs `svelte-check` with the project TypeScript config.
- `npm run lint` checks Prettier formatting and ESLint rules.
- `npm run format` applies Prettier formatting.

Use Node `>=20.0.0`, as declared in `package.json`.

## Coding Style & Naming Conventions

Use TypeScript for shared modules and Svelte single-file components for UI. Prettier is configured for 2-space indentation, double quotes, trailing commas where valid in ES5, and a 100-column print width. Tailwind classes are sorted by `prettier-plugin-tailwindcss`.

Name Svelte components in PascalCase, for example `Project.svelte`. Keep data files descriptive and domain-specific, such as `showcase.ts` or `leaderboard.ts`. For showcase entries, add new projects at the top of `src/lib/showcase.ts` and place matching thumbnail files in `static/showcase/`.

## Testing Guidelines

There is no dedicated unit test suite in this repository. Treat `npm run check`, `npm run lint`, and `npm run build` as the required validation path before opening a pull request. For visual changes, also run `npm run dev` and inspect affected pages such as `/`, `/showcase`, `/resources`, or `/leaderboard`.

## Commit & Pull Request Guidelines

Recent history uses short imperative commit messages, sometimes with conventional prefixes such as `fix:`. Keep commits focused, for example `Update showcase projects` or `fix: remove stale officer info`.

Pull requests should describe what changed, list validation commands run, and include screenshots for UI/content changes. Link related issues when available. Do not commit generated output such as `.svelte-kit/`, `.vercel/`, `build/`, or `node_modules/`.

## Content & Configuration Tips

Do not commit `.env` files. When adding external links, verify they load and prefer stable production URLs over temporary previews. Optimize images before adding them to `static/`, and use filenames that match the related content, such as `sics-ground.png`.
