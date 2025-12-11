<template>
  <div class="step">
    <div class="step__number">
      <span>{{ number }}</span>
    </div>
    <div class="step__content">
      <div class="step__visual">
        <div class="step__icon">{{ emoji }}</div>
        <div class="step__demo" v-html="demo"></div>
      </div>
      <h3 class="step__title">{{ title }}</h3>
      <p class="step__description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  number: { type: Number, required: true },
  emoji: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  demo: { type: String, required: true },
});
</script>

<style scoped>
.step {
  text-align: center;
  position: relative;
  z-index: 1;
}

.step__number {
  width: 64px;
  height: 64px;
  background: var(--bg-dark);
  border: 2px solid var(--color-primary-500);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-xl);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primary-400);
  box-shadow: var(--shadow-glow-sm);
}

.step__visual {
  background: var(--bg-dark-tertiary);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
  min-height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
}

.step__icon {
  font-size: 2.5rem;
}

.step__demo :deep(kbd) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--bg-dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-sm);
  font-family: var(--font-family);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-neutral-300);
}

.step__demo :deep(.mini-wave) {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 30px;
}

.step__demo :deep(.mini-wave span) {
  width: 4px;
  background: var(--color-primary-500);
  border-radius: var(--radius-full);
  animation: waveform 0.8s ease-in-out infinite;
}

.step__demo :deep(.mini-wave span:nth-child(1)) {
  height: 60%;
  animation-delay: 0ms;
}
.step__demo :deep(.mini-wave span:nth-child(2)) {
  height: 100%;
  animation-delay: 100ms;
}
.step__demo :deep(.mini-wave span:nth-child(3)) {
  height: 40%;
  animation-delay: 200ms;
}
.step__demo :deep(.mini-wave span:nth-child(4)) {
  height: 80%;
  animation-delay: 300ms;
}
.step__demo :deep(.mini-wave span:nth-child(5)) {
  height: 50%;
  animation-delay: 400ms;
}

.step__demo :deep(.mini-text) {
  font-size: 0.875rem;
  color: var(--color-primary-300);
  font-family: monospace;
}

.step__title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.step__description {
  font-size: 0.9375rem;
  color: var(--color-neutral-400);
  line-height: 1.6;
}
</style>
