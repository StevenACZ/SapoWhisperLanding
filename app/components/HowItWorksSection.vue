<template>
  <section id="how-it-works" class="workflow section">
    <div class="container">
      <div class="workflow__header">
        <span class="workflow__label">Workflow</span>
        <h2 class="workflow__title">
          How dictation feels when the
          <span class="text-gradient">workflow is done right</span>
        </h2>
        <p class="workflow__description">
          SapoWhisper is built around the full loop: trigger, speak, paste, and
          come back later if you need to refine the result.
        </p>
      </div>

      <div class="workflow__grid">
        <article
          v-for="step in steps"
          :key="step.number"
          class="workflow-card card"
        >
          <div class="workflow-card__number">{{ step.number }}</div>
          <div class="workflow-card__body">
            <span class="workflow-card__eyebrow">{{ step.eyebrow }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
            <div class="workflow-card__demo">{{ step.demo }}</div>
          </div>
        </article>
      </div>

      <div class="workflow__footer card-glass">
        <div>
          <span class="workflow__footer-label">What makes it feel better</span>
          <h3>It does not stop after the first transcript.</h3>
        </div>
        <p>
          That is the difference between a demo and a tool you keep open every
          day. SapoWhisper gives you the quick paste, but also the replay,
          history, and retry flow that real work needs.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    number: "01",
    eyebrow: "Trigger",
    title: "Start from anywhere",
    description:
      "Press your global shortcut and the recording overlay appears without stealing attention from the app you are using.",
    demo: "⌥ + Space",
  },
  {
    number: "02",
    eyebrow: "Capture",
    title: "Speak with better audio feedback",
    description:
      "Use your preferred mic, see clear recording feedback, and keep control with pause and resume when you need it.",
    demo: "Preferred mic • Pause / Resume",
  },
  {
    number: "03",
    eyebrow: "Output",
    title: "Paste the result instantly",
    description:
      "Send the transcript straight into your current app through auto-copy and auto-paste, with minimal interruption.",
    demo: "Auto-copy • Auto-paste",
  },
  {
    number: "04",
    eyebrow: "Refine",
    title: "Revisit it later in History",
    description:
      "Search older transcripts, replay the recording, and re-transcribe with another engine when quality matters more than speed.",
    demo: "Replay • Re-transcribe • Pin",
  },
];
</script>

<style scoped>
.workflow {
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.015),
    transparent 40%
  );
}

.workflow__header {
  max-width: 760px;
  margin: 0 auto var(--spacing-4xl);
  text-align: center;
}

.workflow__label,
.workflow__footer-label {
  display: inline-block;
  margin-bottom: var(--spacing-md);
  color: var(--color-primary-300);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.85rem;
  font-weight: 700;
}

.workflow__title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
}

.workflow__description {
  color: var(--color-neutral-400);
  font-size: 1.05rem;
  line-height: 1.8;
}

.workflow__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
}

.workflow-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--spacing-lg);
  align-items: start;
}

.workflow-card__number {
  min-width: 58px;
  height: 58px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.14);
  color: var(--color-primary-300);
  font-weight: 800;
}

.workflow-card__body {
  display: grid;
  gap: 0.6rem;
}

.workflow-card__eyebrow {
  color: var(--color-neutral-500);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.workflow-card__body h3 {
  font-size: 1.2rem;
  line-height: 1.35;
}

.workflow-card__body p {
  color: var(--color-neutral-400);
  line-height: 1.75;
}

.workflow-card__demo {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-neutral-200);
  font-size: 0.875rem;
  font-weight: 600;
}

.workflow__footer {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: var(--spacing-xl);
  align-items: center;
  padding: var(--spacing-2xl);
  border-radius: 28px;
}

.workflow__footer h3 {
  font-size: clamp(1.4rem, 3vw, 2rem);
  line-height: 1.2;
}

.workflow__footer p {
  color: var(--color-neutral-400);
  line-height: 1.8;
}

@media (max-width: 1024px) {
  .workflow__grid,
  .workflow__footer {
    grid-template-columns: 1fr;
  }
}
</style>
