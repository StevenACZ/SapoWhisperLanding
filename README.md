# 🐸 SapoWhisper Landing Page

Marketing site for [SapoWhisper](https://github.com/StevenACZ/SapoWhisper) — a native dictation app for macOS with global hotkeys, flexible transcription engines, instant paste, and searchable History.

![Nuxt](https://img.shields.io/badge/Nuxt-4.x-00DC82?logo=nuxt.js)
![Bun](https://img.shields.io/badge/Bun-1.x-fbf0df?logo=bun)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🚀 Quick Start

```bash
bun install
bun run dev
```

Open http://localhost:3000

## 📦 Build

```bash
bun run generate
# or
bun run build
```

## 🌐 Deployment

This landing is generated as a static site and can be deployed from GitHub Actions or uploaded to any static host.

Use repository secrets or your hosting provider configuration to keep deployment credentials out of the repo.

## 🔎 SEO & Performance

- Explicit SSR mode is enabled (`ssr: true`) while keeping static generation via `nuxt generate`.
- Sitemap is generated through `@nuxtjs/sitemap` during build, avoiding stale manual `lastmod` values.
- Structured data is embedded with JSON-LD (`WebSite`, `SoftwareApplication`, `Person`).
- Metadata includes canonical URL, Open Graph/Twitter image details, locale, and robots directives.
- A strict CSP meta policy is configured for Nuxt runtime, Google Fonts, and the GitHub API release fetch.
- A valid `public/manifest.json` is included and linked from the document head.

## 🔗 Links

- App repository: https://github.com/StevenACZ/SapoWhisper
- Releases: https://github.com/StevenACZ/SapoWhisper/releases
- Live site: https://sapo.stevenacz.com/

---

Made with ❤️ by [@StevenACZ](https://github.com/StevenACZ)
