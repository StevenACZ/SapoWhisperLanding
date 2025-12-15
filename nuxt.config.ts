// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "SapoWhisper - Voice to Text for macOS",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Transform your voice into text instantly with SapoWhisper. A powerful macOS menu bar app for seamless voice transcription with global hotkeys.",
        },
        {
          name: "keywords",
          content:
            "voice to text, macOS, transcription, speech recognition, whisper, menu bar app, productivity",
        },
        // Open Graph
        {
          property: "og:title",
          content: "SapoWhisper - Voice to Text for macOS",
        },
        {
          property: "og:description",
          content: "Transform your voice into text instantly with SapoWhisper.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://sapowhisper.vercel.app/" },
        {
          property: "og:image",
          content: "https://sapowhisper.vercel.app/og-image.png",
        },
        { property: "og:site_name", content: "SapoWhisper" },
        { property: "og:locale", content: "en_US" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "SapoWhisper - Voice to Text for macOS",
        },
        {
          name: "twitter:description",
          content: "Transform your voice into text instantly with SapoWhisper.",
        },
        {
          name: "twitter:image",
          content: "https://sapowhisper.vercel.app/og-image.png",
        },
        // Other
        { name: "theme-color", content: "#10B981" },
        { name: "author", content: "StevenACZ" },
        { name: "robots", content: "index, follow" },
      ],
      link: [
        { rel: "canonical", href: "https://sapowhisper.vercel.app/" },
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
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],
});
