<template>
  <div class="landing">
    <TheNavbar />
    <main>
      <HeroSection />
      <ProofStripSection />
      <FeaturesSection />
      <HistorySpotlightSection />
      <HowItWorksSection />
      <DownloadSection />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "SapoWhisper — Native Dictation for macOS",
  description:
    "A macOS menu bar app for fast dictation. Trigger recording with a shortcut, transcribe with local or cloud engines, paste instantly, and keep everything in History.",
  ogTitle: "SapoWhisper — Native Dictation for macOS",
  ogDescription:
    "Trigger recording from anywhere, transcribe with the engine you prefer, paste instantly, and revisit every transcript later.",
  twitterTitle: "SapoWhisper — Native Dictation for macOS",
  twitterDescription:
    "Fast dictation for macOS with global hotkeys, local or cloud engines, auto-paste, and searchable History.",
});

definePageMeta({
  layout: false,
});
</script>

<style scoped>
.landing {
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(16, 185, 129, 0.08), transparent 28%),
    var(--bg-dark);
}

main {
  position: relative;
}
</style>
