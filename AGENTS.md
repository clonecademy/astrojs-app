# AGENTS.md

This file provides guidance to agents when working with code in this repository.

This repository is a **template**. `README.md` is written for people who consume the template, and this file is for people (and agents) who contribute to it. Keep the two audiences separate: usage instructions belong in `README.md`, contributor conventions belong here.

## Status

Freshly scaffolded Astro web application template. The only source is `src/pages/index.astro`. `astro.config.mjs` sets `output: "server"` with the `@astrojs/node` adapter (standalone mode) for SSR hosting; see the `Dockerfile` for the production build/run. `TODO.md` is still an empty header. There is no test framework configured.

## Commands

Package manager is **pnpm** (pinned via `packageManager`/`devEngines` in `package.json`); don't use npm or yarn.

- `pnpm dev` — Astro dev server
- `pnpm build` — production build to `dist/`
- `pnpm preview` — serve the built output
- `pnpm lint` — `biome check --write --verbose`. Note that it **writes fixes** (lint autofixes, formatting, import organizing), not just reports. Pass file paths to limit scope, e.g. `pnpm lint src/pages/index.astro`.

## Tooling conventions

- **Biome** (`biome.jsonc`) is the single linter/formatter/import-organizer: tab indentation, double quotes, `recommended` rules, respects `.gitignore`. It ignores `.agents/` and `skills-lock.json`.
- **Lefthook** (`lefthook.jsonc`) installs a `pre-commit` hook via the `prepare` script. It runs `pnpm lint` on staged files matching js/ts/css/html/astro/json(c) and re-stages the fixes (`stage_fixed`), so commits may include auto-formatted changes.
- Config files start with a `// PATH: /<file>` comment header; keep that convention for new config files.
- Commit messages follow Conventional Commits (`build:`, `feat:`, `style:`).
- `tsconfig.json` extends `astro/tsconfigs/base` (not `strict`); there is no type-check script, so `astro check` is not wired up.
- `pnpm-workspace.yaml` only holds `allowBuilds` (esbuild, lefthook) for pnpm's build-script allowlist. It isn't a multi-package workspace.
