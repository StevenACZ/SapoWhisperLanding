<template>
  <section id="features" class="features section">
    <div class="container">
      <!-- Section Header -->
      <div class="features__header">
        <span class="features__label">Features</span>
        <h2 class="features__title">
          Everything you need for<br />
          <span class="text-gradient">seamless voice input</span>
        </h2>
        <p class="features__description">
          SapoWhisper is designed to be fast, unobtrusive, and incredibly easy
          to use. No complicated setup, just speak and paste.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="features__grid">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-card card"
        >
          <div
            class="feature-card__icon"
            :style="{ background: feature.gradient }"
          >
            <span>{{ feature.emoji }}</span>
          </div>
          <h3 class="feature-card__title">{{ feature.title }}</h3>
          <p class="feature-card__description">{{ feature.description }}</p>
        </div>
      </div>

      <!-- Highlight Banner -->
      <div class="features__highlight card-glass">
        <div class="features__highlight-content">
          <div class="features__highlight-icon">🔒</div>
          <div>
            <h3>100% Private & Local Processing</h3>
            <p>
              All transcription happens on your Mac. Choose from multiple
              Whisper models—from tiny (fastest) to large (most accurate). Your
              voice data never leaves your device.
            </p>
          </div>
        </div>
        <div class="features__highlight-badge">
          <span>🧠 On-Device AI</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    emoji: "⚡",
    title: "Lightning Fast",
    description:
      "Start recording instantly with a global hotkey. No app switching, no delays—just press and speak.",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
  },
  {
    emoji: "🎯",
    title: "Global Hotkey",
    description:
      "Access SapoWhisper from anywhere with ⌥ + Space. Works in any app, any window, any time.",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
  },
  {
    emoji: "📋",
    title: "Auto-Paste",
    description:
      "Transcribed text is automatically copied to your clipboard and pasted where you need it.",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
  },
  {
    emoji: "🎨",
    title: "Beautiful UI",
    description:
      "A sleek, native macOS design with smooth animations and an intuitive interface.",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  },
  {
    emoji: "🔊",
    title: "Audio Feedback",
    description:
      "Subtle sound cues let you know when recording starts and stops without looking at the screen.",
    gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
  },
  {
    emoji: "🛠️",
    title: "Open Source",
    description:
      "Fully open source and free forever. Inspect the code, contribute, or customize it for your needs.",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
  },
];
</script>

<style scoped>
.features {
  position: relative;
}

.features__header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--spacing-4xl);
}

.features__label {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary-400);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--spacing-md);
}

.features__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: var(--spacing-lg);
}

.features__description {
  font-size: 1.125rem;
  color: var(--color-neutral-400);
  line-height: 1.7;
}

/* Features Grid */
.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-4xl);
}

.feature-card {
  text-align: center;
  padding: var(--spacing-2xl) var(--spacing-xl);
}

.feature-card__icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
  font-size: 1.75rem;
  box-shadow: var(--shadow-md);
}

.feature-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.feature-card__description {
  font-size: 0.9375rem;
  color: var(--color-neutral-400);
  line-height: 1.6;
}

/* Highlight Banner */
.features__highlight {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-xl) var(--spacing-2xl);
  border-radius: var(--radius-2xl);
  background: linear-gradient(
    135deg,
    rgba(16, 185, 129, 0.08) 0%,
    rgba(139, 92, 246, 0.08) 100%
  );
}

.features__highlight-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.features__highlight-icon {
  font-size: 2.5rem;
}

.features__highlight-content h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
}

.features__highlight-content p {
  font-size: 0.9375rem;
  color: var(--color-neutral-400);
  max-width: 500px;
}

.features__highlight-badge {
  background: rgba(139, 92, 246, 0.2);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: var(--radius-full);
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: 0.875rem;
  font-weight: 600;
  color: #a78bfa;
}

/* Responsive */
@media (max-width: 1024px) {
  .features__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .features__highlight {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-lg);
  }

  .features__highlight-content {
    flex-direction: column;
    text-align: center;
  }

  .features__highlight-content p {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .features__grid {
    grid-template-columns: 1fr;
  }
}
</style>
