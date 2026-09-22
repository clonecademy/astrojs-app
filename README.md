# Astro — Web Application Template

A minimal starting point for building a web application with [Astro](https://astro.build), preconfigured with [pnpm](https://pnpm.io), [Biome](https://biomejs.dev) for linting and formatting, and [Lefthook](https://lefthook.dev) for a pre-commit lint hook.

## Getting started

1. Create your project from this template and clone it.
2. Install [pnpm](https://pnpm.io/installation). The version is pinned in `package.json`, and pnpm will download it if yours differs.
3. Install dependencies. This also installs the Git pre-commit hook:

   ```sh
   pnpm install
   ```

4. Start the dev server:

   ```sh
   pnpm dev
   ```

5. Replace the placeholder page in `src/pages/index.astro` with your own, and update the `name` in `package.json`.

## Commands

| Command        | Action                                        |
| -------------- | --------------------------------------------- |
| `pnpm dev`     | Start the dev server                          |
| `pnpm build`   | Build the production site to `dist/`          |
| `pnpm preview` | Preview the production build locally          |
| `pnpm lint`    | Lint, format and organize imports with Biome  |

`pnpm lint` applies fixes in place. Pass file paths to limit it to specific files.

## Deploying

This template renders on demand via the [Node adapter](https://docs.astro.build/en/guides/integrations-guide/node/) (`output: "server"` in `astro.config.mjs`), so it needs a Node runtime in production, not just static hosting.

The included `Dockerfile` builds a standalone server: `pnpm build` produces `dist/server/entry.mjs`, which is started with `node ./dist/server/entry.mjs`, listening on `$HOST`/`$PORT` (defaults `0.0.0.0:4321`).

On [Dokploy](https://dokploy.com), create an application with the **Dockerfile** provider and point it at this repo — no other settings are required, the `Dockerfile` at the repo root handles the build and start. If a future variant of this template drops SSR, switch to Dokploy's Static provider instead, which serves a prebuilt `dist/` without running a container.

## What's included

- **Astro** — pages live in `src/pages/`, static assets in `public/`. Configure the framework in `astro.config.mjs`.
- **@astrojs/node** — renders pages on demand in standalone mode; the production server entry is `dist/server/entry.mjs`.
- **Biome** — a single tool for linting, formatting (tabs, double quotes) and import sorting. Configure it in `biome.jsonc`.
- **Lefthook** — runs `pnpm lint` on staged files before each commit and re-stages any fixes. Configure it in `lefthook.jsonc`.
