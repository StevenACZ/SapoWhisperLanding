// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "SapoWhisper — Native Dictation for macOS",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "A macOS menu bar app for fast dictation. Trigger recording with a shortcut, transcribe with local or cloud engines, paste instantly, and keep everything in History.",
        },
        {
          name: "keywords",
          content:
            "macOS dictation, voice typing mac, speech to text macOS, menu bar dictation, mac transcription app, whisper macOS, voice workflow",
        },
        {
          property: "og:title",
          content: "SapoWhisper — Native Dictation for macOS",
        },
        {
          property: "og:description",
          content:
            "Trigger recording from anywhere, transcribe with the engine you prefer, paste instantly, and revisit every transcript later.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://sapo.stevenacz.com/" },
        {
          property: "og:image",
          content: "https://sapo.stevenacz.com/og-image.png",
        },
        { property: "og:site_name", content: "SapoWhisper" },
        { property: "og:locale", content: "en_US" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "SapoWhisper — Native Dictation for macOS",
        },
        {
          name: "twitter:description",
          content:
            "Fast dictation for macOS with global hotkeys, local or cloud engines, auto-paste, and searchable History.",
        },
        {
          name: "twitter:image",
          content: "https://sapo.stevenacz.com/og-image.png",
        },
        { name: "theme-color", content: "#10B981" },
        { name: "author", content: "StevenACZ" },
        { name: "robots", content: "index, follow" },
      ],
      link: [
        { rel: "canonical", href: "https://sapo.stevenacz.com/" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],
});
