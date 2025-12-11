<template>
  <div class="landing">
    <TheNavbar />
    <main>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DownloadSection />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: "SapoWhisper - Voice to Text for macOS",
  meta: [
    {
      name: "description",
      content:
        "Transform your voice into text instantly with SapoWhisper. A powerful macOS menu bar app for seamless voice transcription with global hotkeys. Free and open source.",
    },
  ],
});

// Define the page as static for better SEO
definePageMeta({
  layout: false,
});
</script>

<style scoped>
.landing {
  min-height: 100vh;
  background: var(--bg-dark);
}

main {
  position: relative;
}
</style>
