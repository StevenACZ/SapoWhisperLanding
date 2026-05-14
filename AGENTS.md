# SapoWhisper Landing Guide

## Scope

Public Astro landing page for SapoWhisper. Keep it static-host friendly, crawler-visible, accessible, and safe to publish.

## Security and Privacy

- Never commit credentials, tokens, private keys, internal IPs, environment dumps, local machine paths, or private deployment notes.
- Keep local plans in `MVP_PLAN.md` or `docs/`; both are private and ignored.
- Do not add AI-authorship notes to commits, changelogs, release notes, or docs.

## Project Overview

| Field    | Value                                      |
| -------- | ------------------------------------------ |
| URL      | `https://sapo.stevenacz.com`               |
| App repo | `https://github.com/StevenACZ/SapoWhisper` |
| Stack    | Astro 6, Sass, `@astrojs/sitemap`          |
| Output   | Static HTML in `dist/`                     |

## Structure

- `src/pages/index.astro`: landing route.
- `src/layouts/Layout.astro`: head, meta, CSP, JSON-LD, global SCSS entry.
- `src/components/*.astro`: section components (Hero, Engines, AISpotlight, Features, HistorySpotlight, HowItWorks, Download, Navbar, Footer).
- `src/components/icons/*.astro`: Lucide-style SVG icons (no runtime JS). Each accepts size/class/strokeWidth props.
- `src/styles/`: `_variables`, `_mixins`, `_base`, `_animations`, `_utilities`, `main.scss`.
- `src/data/github.ts`: build-time fetch of latest release version.
- `public/`: icons, manifest, robots, OG images.
- `astro.config.mjs`: site URL, sitemap, build config.

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

Do not commit `.astro/`, `dist/`, `node_modules/`, local docs, or env files.

## Product Copy

Keep copy aligned with the public app positioning (v2.1):

- macOS menu bar dictation, native SwiftUI, Apple Silicon only (M1+, macOS 14.0+)
- four engines: Apple Speech, WhisperKit (local, recommended), Google Cloud Chirp 3, Deepgram Nova-3 / Flux Live
- AI improvement via Gemini 3.1 Flash-Lite on Vertex AI with built-in modes (Automatic, AI Assistant Prompt, Work Message, Translate to English) and custom prompts per project
- custom vocabulary and personal context applied to every AI mode
- global hotkey, overlay while recording, mic test, gain, auto-ducking, sound feedback
- auto-copy and auto-paste, configurable per session
- searchable transcript history with audio replay, pin, re-transcribe and re-polish
- bilingual UI (Spanish / English) plus an Auto language mode
- configuration export/import (JSON portable file)
- open-source distribution through GitHub releases

## UI Guidelines

- SCSS tokens live in `src/styles/_variables.scss`. Import with `@use "../styles/variables" as *`.
- Preserve the emerald/green identity and restrained dark macOS app aesthetic.
- Use existing utilities such as `.container`, `.section`, `.btn`, `.card-glass`, `.text-gradient`.
- Existing responsive breakpoints are 1024px, 768px, 480px.
- Keep animations based on `transform` and `opacity` when possible.
- **Never use emojis as UI iconography.** Use the Lucide-style components in `src/components/icons/` (or add a new one in the same pattern). Emojis in marketing copy are also avoided unless explicitly justified.
- Prefer editing existing components before adding new ones.

## SEO and Structured Data

- `src/layouts/Layout.astro` owns title, description, CSP, Open Graph, Twitter Card, manifest link, sitemap link, and JSON-LD.
- Keep JSON-LD consolidated and non-conflicting: `WebSite`, `SoftwareApplication`, `Person`.
- Keep `public/robots.txt` pointing at `https://sapo.stevenacz.com/sitemap-index.xml`.
- Keep `public/manifest.json` valid JSON with real icons, categories, `lang`, and `dir`.
- The deploy workflow validates the live HTML by grepping for `SapoWhisper - Native Dictation for macOS`; keep that string in the layout `<title>`.

## Verification

Before finishing a task, run:

```bash
bun run format:check
bun run typecheck
bun run build
```

For SEO work, inspect generated `dist/index.html` for:

- `application/ld+json`
- description and Open Graph metadata
- CSP meta tag
- valid `manifest.json`
- valid `sitemap-index.xml`
- real social preview image

## Git Safety

- Use conventional commits.
- Do not use destructive git operations unless explicitly requested.
