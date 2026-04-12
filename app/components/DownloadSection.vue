<template>
  <section id="download" class="download section">
    <div class="container">
      <div class="download__panel card-glass">
        <div class="download__copy">
          <span class="download__label">Download</span>
          <h2 class="download__title">
            Ready to make dictation part of your
            <span class="text-gradient">everyday workflow?</span>
          </h2>
          <p class="download__description">
            Download SapoWhisper, choose the transcription engine that fits the
            moment, and start writing with your voice from anywhere on macOS.
          </p>

          <div class="download__requirements">
            <div
              v-for="item in requirements"
              :key="item"
              class="download__requirement"
            >
              <span class="download__check">✓</span>
              <span>{{ item }}</span>
            </div>
          </div>
        </div>

        <div class="download__actions">
          <a
            href="https://github.com/StevenACZ/SapoWhisper/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            class="download__button"
          >
            <span class="download__button-label">Download latest release</span>
            <strong>macOS app</strong>
          </a>

          <a
            href="https://github.com/StevenACZ/SapoWhisper"
            target="_blank"
            rel="noopener noreferrer"
            class="download__secondary"
          >
            View source on GitHub
          </a>

          <a
            href="https://github.com/StevenACZ/SapoWhisper/issues"
            target="_blank"
            rel="noopener noreferrer"
            class="download__secondary"
          >
            Report an issue
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const requirements = [
  "macOS 14.0+",
  "Apple Silicon & Intel",
  "Free and open source",
];
</script>

<style scoped>
.download {
  position: relative;
}

.download__panel {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
  gap: var(--spacing-2xl);
  padding: var(--spacing-3xl);
  border-radius: 32px;
  background: linear-gradient(
    135deg,
    rgba(16, 185, 129, 0.08),
    rgba(255, 255, 255, 0.02)
  );
}

.download__label {
  display: inline-block;
  margin-bottom: var(--spacing-md);
  color: var(--color-primary-300);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.85rem;
  font-weight: 700;
}

.download__title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
}

.download__description {
  color: var(--color-neutral-400);
  font-size: 1.05rem;
  line-height: 1.8;
  max-width: 640px;
}

.download__requirements {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: var(--spacing-xl);
}

.download__requirement {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--color-neutral-200);
  font-weight: 500;
}

.download__check {
  width: 1.35rem;
  height: 1.35rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.14);
  color: var(--color-primary-300);
  font-weight: 700;
}

.download__actions {
  display: grid;
  gap: 0.9rem;
  align-content: center;
}

.download__button,
.download__secondary {
  display: grid;
  gap: 0.35rem;
  padding: 1.1rem 1.2rem;
  border-radius: var(--radius-xl);
  transition:
    transform var(--transition-base),
    border-color var(--transition-base),
    background var(--transition-base);
}

.download__button {
  background: linear-gradient(
    135deg,
    var(--color-primary-500),
    var(--color-primary-700)
  );
  color: white;
  box-shadow: var(--shadow-lg), var(--shadow-glow-sm);
}

.download__button:hover,
.download__secondary:hover {
  transform: translateY(-2px);
}

.download__button-label {
  font-size: 0.9rem;
  opacity: 0.9;
}

.download__button strong {
  font-size: 1.15rem;
}

.download__secondary {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--color-neutral-200);
}

.download__secondary:hover {
  border-color: rgba(16, 185, 129, 0.18);
  background: rgba(255, 255, 255, 0.05);
}

@media (max-width: 900px) {
  .download__panel {
    grid-template-columns: 1fr;
    padding: var(--spacing-2xl);
  }
}
</style>
