# SapoWhisper Landing - Development Guide

## Scope

This repository contains the public Nuxt landing page for SapoWhisper, a macOS menu bar dictation app. Keep the site static-host friendly, SSR-rendered for crawlers, accessible, and safe for public release.

## Security and Privacy

- Never commit credentials, tokens, private keys, internal IPs, environment dumps, local machine paths, or private deployment notes.
- Keep public-facing documentation and metadata safe for open-source distribution.
- Keep local planning documents such as `MVP_PLAN.md` private unless the user explicitly approves publishing them.
- Do not add AI-authorship notes to commits, changelogs, release notes, or docs.

## Project Overview

| Field          | Value                                      |
| -------------- | ------------------------------------------ |
| Name           | SapoWhisper Landing                        |
| Production URL | `https://sapo.stevenacz.com`               |
| App repository | `https://github.com/StevenACZ/SapoWhisper` |
| Framework      | Nuxt 4.2.x                                 |
| Rendering      | SSR enabled, generated as a static site    |
| Purpose        | Landing page for the SapoWhisper macOS app |

## Tech Stack

- Nuxt 4 with Vue 3
- Vite and Nitro
- Vanilla CSS design system in `app/assets/css/main.css`
- `@nuxtjs/sitemap` for sitemap generation

## Project Structure

```text
SapoWhisperLanding/
├── app/
│   ├── app.vue                    # Root shell
│   ├── assets/css/main.css        # Global styles and design tokens
│   ├── components/
│   │   ├── TheNavbar.vue
│   │   ├── HeroSection.vue
│   │   ├── FeaturesSection.vue
│   │   ├── HowItWorksSection.vue
│   │   ├── DownloadSection.vue
│   │   └── TheFooter.vue
│   └── pages/index.vue
├── public/
│   ├── favicon.ico
│   ├── manifest.json
│   ├── og-image.png
│   └── robots.txt
├── nuxt.config.ts
└── package.json
```

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

The build script runs static generation. Do not commit generated `.output/`, `.nuxt/`, or `dist/` output.

## Product Positioning

Keep copy aligned with the public app positioning:

- macOS menu bar dictation
- local or cloud transcription
- global hotkey
- overlay while recording
- auto-copy and auto-paste
- transcription history
- privacy-first workflow flexibility
- open-source distribution through GitHub releases

## Design System

- Global tokens live in `app/assets/css/main.css`.
- Preserve the emerald/green primary identity and the restrained dark macOS app aesthetic.
- Use existing utility classes such as `.container`, `.section`, `.btn`, `.btn-primary`, `.btn-secondary`, `.card`, `.card-glass`, and `.text-gradient`.
- Existing responsive breakpoints are 1024px, 768px, and 480px.
- Keep animations based on `transform` and `opacity` when possible.

## SEO and Structured Data

- `nuxt.config.ts` is the source of truth for site URL, SSR/static settings, sitemap, manifest link, metadata, Open Graph, Twitter Card, CSP meta, and JSON-LD.
- Keep structured data consolidated and non-conflicting: `WebSite`, `SoftwareApplication`, and `Person`.
- Keep `robots.txt` pointing at `https://sapo.stevenacz.com/sitemap.xml`.
- Keep `public/manifest.json` valid JSON with real icons, categories, `lang`, and `dir`.
- Keep `public/og-image.png` as a real PNG and keep OG dimensions aligned with the committed asset.

## Component Guidelines

- Components auto-import from `app/components/`.
- Pages live in `app/pages/`.
- Prefer editing existing components before adding new ones.
- Keep copy changes consistent across hero, features, download CTA, metadata, JSON-LD, and README.

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
- Ask before staging, committing, pushing, creating PRs, or merging unless the user has already granted explicit permission for the current task.
- Do not use destructive git operations unless explicitly requested.
