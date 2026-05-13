// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = "https://sapo.stevenacz.com";
const ogImageUrl = `${siteUrl}/og-image-20260513.png`;
const buildTimestamp = new Date().toISOString();

const cspContent = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data:",
  "connect-src 'self' https://api.github.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "SapoWhisper",
      description:
        "Native dictation for macOS with menu bar controls, global shortcuts, and flexible transcription engines.",
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "SapoWhisper",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "macOS",
      description:
        "A native macOS menu bar dictation app with local or cloud transcription, recording overlay, auto-paste, and searchable history.",
      softwareVersion: "Latest",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      creator: {
        "@id": `${siteUrl}/#person`,
      },
      sameAs: [
        "https://github.com/StevenACZ/SapoWhisper",
        "https://github.com/StevenACZ/SapoWhisper/releases",
      ],
      url: `${siteUrl}/`,
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Steven Coaila Zaa",
      alternateName: "StevenACZ",
      url: "https://stevenacz.com",
      sameAs: ["https://stevenacz.com", "https://github.com/StevenACZ"],
    },
  ],
};

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,

  modules: ["@nuxtjs/sitemap"],

  site: {
    url: siteUrl,
  },

  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

  sitemap: {
    autoLastmod: false,
    defaults: {
      changefreq: "weekly",
      priority: 1,
      lastmod: buildTimestamp,
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "SapoWhisper - Native Dictation for macOS",
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
        { name: "author", content: "StevenACZ" },
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { name: "theme-color", content: "#10B981" },
        {
          property: "og:title",
          content: "SapoWhisper - Native Dictation for macOS",
        },
        {
          property: "og:description",
          content:
            "Trigger recording from anywhere, transcribe with the engine you prefer, paste instantly, and revisit every transcript later.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${siteUrl}/` },
        { property: "og:site_name", content: "SapoWhisper" },
        { property: "og:locale", content: "en_US" },
        { property: "og:image", content: ogImageUrl },
        { property: "og:image:alt", content: "SapoWhisper landing preview" },
        { property: "og:image:width", content: "1024" },
        { property: "og:image:height", content: "1024" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "SapoWhisper - Native Dictation for macOS",
        },
        {
          name: "twitter:description",
          content:
            "Fast dictation for macOS with global hotkeys, local or cloud engines, auto-paste, and searchable history.",
        },
        { name: "twitter:image", content: ogImageUrl },
        {
          name: "twitter:image:alt",
          content: "SapoWhisper landing preview",
        },
        {
          "http-equiv": "Content-Security-Policy",
          content: cspContent,
        },
      ],
      link: [
        { rel: "canonical", href: `${siteUrl}/` },
        { rel: "manifest", href: "/manifest.json" },
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
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(structuredData),
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],
});
