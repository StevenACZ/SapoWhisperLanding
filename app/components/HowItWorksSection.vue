<template>
  <section id="how-it-works" class="how-it-works section">
    <div class="container">
      <!-- Section Header -->
      <div class="how-it-works__header">
        <span class="how-it-works__label">How It Works</span>
        <h2 class="how-it-works__title">
          Voice to text in<br />
          <span class="text-gradient">three simple steps</span>
        </h2>
      </div>

      <!-- Steps -->
      <div class="steps">
        <div class="steps__line"></div>
        <HowItWorksStepCard
          v-for="(step, index) in steps"
          :key="index"
          :number="index + 1"
          :emoji="step.emoji"
          :title="step.title"
          :description="step.description"
          :demo="step.demo"
        />
      </div>

      <!-- Demo Window -->
      <div class="how-it-works__demo">
        <HowItWorksDemoWindow />
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    emoji: "⌨️",
    title: "Press the Hotkey",
    description:
      "Hit ⌥ + Space from anywhere on your Mac. The SapoWhisper popup appears instantly, ready to listen.",
    demo: "<kbd>⌥</kbd> + <kbd>Space</kbd>",
  },
  {
    emoji: "🎙️",
    title: "Speak Naturally",
    description:
      "Just talk naturally. SapoWhisper captures your voice with high-quality audio and shows real-time feedback.",
    demo: '<div class="mini-wave"><span></span><span></span><span></span><span></span><span></span></div>',
  },
  {
    emoji: "✨",
    title: "Text Appears",
    description:
      "Your speech is transcribed instantly and automatically pasted wherever your cursor is. Magic!",
    demo: '<div class="mini-text">Hello world! ✨</div>',
  },
];
</script>

<style scoped>
.how-it-works {
  position: relative;
  background: var(--bg-dark-secondary);
}

.how-it-works__header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--spacing-4xl);
}

.how-it-works__label {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary-400);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--spacing-md);
}

.how-it-works__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
}

/* Steps */
.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2xl);
  position: relative;
  margin-bottom: var(--spacing-4xl);
}

.steps__line {
  position: absolute;
  top: 32px;
  left: 15%;
  right: 15%;
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--color-primary-500) 0%,
    var(--color-accent-purple) 50%,
    var(--color-accent-blue) 100%
  );
  opacity: 0.3;
}

/* Demo Window Container */
.how-it-works__demo {
  max-width: 700px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 1024px) {
  .steps {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .steps__line {
    display: none;
  }
}
</style>
