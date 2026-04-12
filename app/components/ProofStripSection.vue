<template>
  <section class="proof-strip">
    <div class="container">
      <div class="proof-strip__panel card-glass">
        <div v-for="item in items" :key="item.title" class="proof-strip__item">
          <span class="proof-strip__kicker">{{ item.kicker }}</span>
          <strong>{{ item.title }}</strong>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    kicker: "From anywhere",
    title: "Global hotkey workflow",
    description:
      "Start recording without switching apps or breaking your flow.",
  },
  {
    kicker: "Flexible by design",
    title: "Local or cloud engines",
    description: "Pick privacy, speed, or accuracy depending on the moment.",
  },
  {
    kicker: "More than one-shot",
    title: "Searchable History",
    description: "Replay audio, pin transcripts, and re-transcribe later.",
  },
  {
    kicker: "Built for daily use",
    title: "Native macOS feel",
    description: "Preferred mic, pause and resume, audio feedback, and more.",
  },
];
</script>

<style scoped>
.proof-strip {
  position: relative;
  margin-top: calc(var(--spacing-4xl) * -0.5);
  z-index: 3;
}

.proof-strip__panel {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
  border-radius: var(--radius-2xl);
  background: rgba(17, 17, 19, 0.72);
  box-shadow: var(--shadow-lg);
}

.proof-strip__item {
  padding: var(--spacing-md);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.04);
  background: rgba(255, 255, 255, 0.02);
}

.proof-strip__kicker {
  display: inline-block;
  margin-bottom: var(--spacing-sm);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary-300);
}

.proof-strip__item strong {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
}

.proof-strip__item p {
  color: var(--color-neutral-400);
  font-size: 0.9375rem;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .proof-strip {
    margin-top: 0;
  }

  .proof-strip__panel {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .proof-strip__panel {
    grid-template-columns: 1fr;
    padding: var(--spacing-lg);
  }
}
</style>
