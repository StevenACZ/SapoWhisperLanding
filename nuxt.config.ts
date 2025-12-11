// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    head: {
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
        {
          property: "og:title",
          content: "SapoWhisper - Voice to Text for macOS",
        },
        {
          property: "og:description",
          content: "Transform your voice into text instantly with SapoWhisper.",
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/og-image.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "theme-color", content: "#10B981" },
      ],
      link: [
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
