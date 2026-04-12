<template>
  <section id="features" class="features section">
    <div class="container">
      <div class="features__header">
        <span class="features__label">Features</span>
        <h2 class="features__title">
          Built around the
          <span class="text-gradient">real dictation workflow</span>
        </h2>
        <p class="features__description">
          SapoWhisper is no longer just a speech-to-text shortcut. It is a
          native macOS workflow for recording, transcribing, pasting,
          revisiting, and refining what you said.
        </p>
      </div>

      <div class="features__grid">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="feature-card card"
        >
          <div class="feature-card__top">
            <div
              class="feature-card__icon"
              :style="{ background: feature.gradient }"
            >
              <span>{{ feature.emoji }}</span>
            </div>
            <span class="feature-card__tag">{{ feature.tag }}</span>
          </div>
          <h3 class="feature-card__title">{{ feature.title }}</h3>
          <p class="feature-card__description">{{ feature.description }}</p>
        </article>
      </div>

      <div class="features__highlight card-glass">
        <div>
          <span class="features__highlight-label">Engine flexibility</span>
          <h3>Privacy when you want it. Cloud accuracy when you need it.</h3>
          <p>
            Go fully local with WhisperKit, or connect your own Google Cloud or
            Deepgram credentials when you want cloud transcription.
          </p>
        </div>

        <div class="features__engine-list">
          <span>WhisperKit local</span>
          <span>Apple Speech</span>
          <span>Google Cloud</span>
          <span>Deepgram</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    emoji: "⚡",
    tag: "Fast to trigger",
    title: "Record from anywhere",
    description:
      "Launch dictation with a global shortcut and start speaking without switching away from the app you are already using.",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
  },
  {
    emoji: "🧠",
    tag: "Flexible engines",
    title: "Pick the transcription engine",
    description:
      "Choose the engine that fits the task: local privacy, simple online dictation, or stronger cloud recognition when accuracy matters.",
    gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
  },
  {
    emoji: "📋",
    tag: "Immediate output",
    title: "Paste instantly",
    description:
      "Auto-copy and auto-paste keep your cursor moving so dictation feels like part of your writing flow, not a separate tool.",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
  },
  {
    emoji: "🗂️",
    tag: "Keep the context",
    title: "Searchable History",
    description:
      "Search older transcripts, pin important entries, replay audio, and come back later without losing what you dictated.",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
  },
  {
    emoji: "🎙️",
    tag: "Audio control",
    title: "Built for daily microphone use",
    description:
      "Preferred microphone sync, mic test, gain controls, audio cues, and auto-ducking make the recording experience more reliable.",
    gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
  },
  {
    emoji: "🪄",
    tag: "Polished workflow",
    title: "Refine instead of repeating",
    description:
      "Pause and resume, retry with another engine, download the audio, and keep improving the result without re-recording everything.",
    gradient: "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)",
  },
];
</script>

<style scoped>
.features {
  position: relative;
}

.features__header {
  max-width: 760px;
  margin: 0 auto var(--spacing-4xl);
  text-align: center;
}

.features__label,
.features__highlight-label {
  display: inline-block;
  margin-bottom: var(--spacing-md);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary-300);
}

.features__title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.08;
  margin-bottom: var(--spacing-lg);
}

.features__description {
  color: var(--color-neutral-400);
  font-size: 1.06rem;
  line-height: 1.8;
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--spacing-xl);
  text-align: left;
}

.feature-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
}

.feature-card__icon {
  width: 58px;
  height: 58px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  box-shadow: var(--shadow-md);
  font-size: 1.4rem;
}

.feature-card__tag {
  font-size: 0.8rem;
  color: var(--color-neutral-500);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.feature-card__title {
  font-size: 1.2rem;
  line-height: 1.35;
}

.feature-card__description {
  color: var(--color-neutral-400);
  line-height: 1.75;
}

.features__highlight {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: var(--spacing-2xl);
  align-items: center;
  padding: var(--spacing-2xl);
  border-radius: 28px;
  background: linear-gradient(
    135deg,
    rgba(16, 185, 129, 0.08),
    rgba(59, 130, 246, 0.06)
  );
}

.features__highlight h3 {
  font-size: clamp(1.45rem, 3vw, 2rem);
  line-height: 1.2;
  margin-bottom: 0.8rem;
}

.features__highlight p {
  color: var(--color-neutral-400);
  line-height: 1.75;
}

.features__engine-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.features__engine-list span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--color-neutral-200);
  font-weight: 600;
}

@media (max-width: 1024px) {
  .features__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .features__highlight {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .features__grid {
    grid-template-columns: 1fr;
  }
}
</style>
