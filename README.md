# SapoWhisper Landing

Marketing site for **[SapoWhisper](https://github.com/StevenACZ/SapoWhisper)** — native voice dictation for macOS with four transcription engines and AI-polished transcripts.

🌐 **Live:** [sapo.stevenacz.com](https://sapo.stevenacz.com/)
📦 **App:** [github.com/StevenACZ/SapoWhisper](https://github.com/StevenACZ/SapoWhisper)
⬇️ **Download:** [latest release](https://github.com/StevenACZ/SapoWhisper/releases/latest)

## What's on the page

- The four transcription engines side by side: Apple Speech, WhisperKit (local), Google Cloud Chirp 3, Deepgram Nova-3 / Flux Live.
- The AI improvement layer: Gemini 3.1 Flash-Lite on Vertex AI, built-in modes, custom prompts, vocabulary and personal context.
- The everyday workflow: global hotkey, auto-paste, bilingual UI, audio control.
- A five-stage stepper that mirrors how the app actually works.
- Searchable transcript history with audio replay and re-polish.

Requires macOS 14+ on Apple Silicon (M1+).

## Built with

- [Astro 6](https://astro.build/) for static HTML
- Sass for styles, Lucide-style inline SVG icons
- `@astrojs/sitemap` for the sitemap index
- Build-time fetch of the latest GitHub release for the footer version chip

## Local development

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # static output → dist/
bun run preview
```

Deploys run on push to `main` via GitHub Actions (rsync to the VPS).

---

MIT licensed · made by [@StevenACZ](https://github.com/StevenACZ)
