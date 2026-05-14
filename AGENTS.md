# SapoWhisper Landing Guide

## Scope

Public Nuxt landing page for SapoWhisper. Keep it static-host friendly, crawler-visible, accessible, and safe to publish.

## Security and Privacy

- Never commit credentials, tokens, private keys, internal IPs, environment dumps, local machine paths, or private deployment notes.
- Keep local plans in `MVP_PLAN.md` or `docs/`; both are private and ignored.
- Do not add AI-authorship notes to commits, changelogs, release notes, or docs.

## Project Overview

| Field    | Value                                        |
| -------- | -------------------------------------------- |
| URL      | `https://sapo.stevenacz.com`                 |
| App repo | `https://github.com/StevenACZ/SapoWhisper`   |
| Stack    | Nuxt 4, Vue 3, Vite/Nitro, `@nuxtjs/sitemap` |
| Output   | SSR enabled, generated as static HTML        |

## Structure

- `app/pages/index.vue`: landing route.
- `app/components/`: section components.
- `app/assets/css/main.css`: global tokens, layout, utilities.
- `app/composables/useGithubRelease.ts`: public GitHub release data.
- `public/`: icons, manifest, robots, OG images.
- `nuxt.config.ts`: SEO, CSP, sitemap, structured data, prerendering.

## Commands

```bash
bun install
bun run dev
bun run format
bun run format:check
bun run typecheck
bun run build
bun run preview
```

Do not commit `.output/`, `.nuxt/`, `dist/`, `node_modules/`, local docs, or env files.

## Product Copy

Keep copy aligned with the public app positioning:

- macOS menu bar dictation
- local or cloud transcription
- global hotkey
- overlay while recording
- auto-copy and auto-paste
- transcription history
- privacy-first workflow flexibility
- open-source distribution through GitHub releases

## UI Guidelines

- Global tokens live in `app/assets/css/main.css`.
- Preserve the emerald/green identity and restrained dark macOS app aesthetic.
- Use existing utilities such as `.container`, `.section`, `.btn`, `.card`, `.card-glass`, and `.text-gradient`.
- Existing responsive breakpoints are 1024px, 768px, and 480px.
- Keep animations based on `transform` and `opacity` when possible.
- Prefer editing existing components before adding new ones.

## SEO and Structured Data

- `nuxt.config.ts` owns URL, SSR/static settings, sitemap, manifest link, metadata, Open Graph, Twitter Card, CSP, and JSON-LD.
- Keep JSON-LD consolidated and non-conflicting: `WebSite`, `SoftwareApplication`, and `Person`.
- Keep `robots.txt` pointing at `https://sapo.stevenacz.com/sitemap.xml`.
- Keep `public/manifest.json` valid JSON with real icons, categories, `lang`, and `dir`.
- Keep copy consistent across hero, features, download CTA, metadata, JSON-LD, README, and changelog.

## Verification

Before finishing a task, run:

```bash
bun run format:check
bun run typecheck
bun run build
```

For SEO work, inspect generated output for:

- `application/ld+json`
- description and Open Graph metadata
- CSP meta tag
- valid `manifest.json`
- valid `sitemap.xml`
- real social preview image

## Git Safety

- Use conventional commits.
- Do not use destructive git operations unless explicitly requested.
