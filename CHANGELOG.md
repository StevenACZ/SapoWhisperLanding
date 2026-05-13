# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

## [2026-05-13]

### Added

- Added a web app manifest at `public/manifest.json` and wired it in the head metadata.
- Added schema.org JSON-LD `@graph` for `WebSite`, `SoftwareApplication`, and `Person`.
- Added strict Content Security Policy metadata tailored to Nuxt runtime, Google Fonts, and GitHub API fetch needs.
- Added sitemap generation via `@nuxtjs/sitemap`.

### Changed

- Enabled explicit `ssr: true` in Nuxt configuration while preserving static generation.
- Expanded Open Graph and Twitter metadata (image dimensions, alt text, locale, and site name).

### Removed

- Removed stale manual `public/sitemap.xml` in favor of generated sitemap output.
