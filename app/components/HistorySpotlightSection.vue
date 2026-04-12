<template>
  <section id="history" class="history section">
    <div class="container history__container">
      <div class="history__content">
        <span class="history__label">History</span>
        <h2 class="history__title">
          More than one-shot
          <span class="text-gradient">transcription</span>
        </h2>
        <p class="history__description">
          SapoWhisper keeps working after the paste. Search past transcripts,
          replay the original audio, pin important entries, and run the same
          clip through another engine when you want a better result.
        </p>

        <div class="history__points">
          <div
            v-for="point in points"
            :key="point.title"
            class="history__point"
          >
            <div class="history__point-icon">{{ point.icon }}</div>
            <div>
              <h3>{{ point.title }}</h3>
              <p>{{ point.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="history__visual card-glass">
        <div class="history__window">
          <div class="history__window-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="history__workspace">
            <aside class="history__sidebar">
              <div class="history__search">Search transcripts...</div>
              <div
                v-for="entry in entries"
                :key="entry.title"
                class="history__entry"
                :class="{ 'is-active': entry.active }"
              >
                <div class="history__entry-top">
                  <strong>{{ entry.title }}</strong>
                  <span>{{ entry.engine }}</span>
                </div>
                <p>{{ entry.preview }}</p>
              </div>
            </aside>

            <div class="history__detail">
              <div class="history__badge">Pinned transcript</div>
              <h3>Review, replay, and refine</h3>
              <p>
                Keep the original audio, compare engines, and export the result
                you actually want to keep.
              </p>

              <div class="history__chips">
                <span>Audio playback</span>
                <span>Re-transcribe</span>
                <span>Download audio</span>
                <span>Engine filters</span>
              </div>

              <div class="history__mini-player">
                <div class="history__mini-player-wave">
                  <span v-for="bar in 16" :key="bar"></span>
                </div>
                <div class="history__mini-player-meta">
                  <strong>00:18 / 00:34</strong>
                  <small>Recorded from preferred microphone</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const points = [
  {
    icon: "🔎",
    title: "Search what you already said",
    description:
      "Find older transcripts quickly instead of dictating the same thing twice.",
  },
  {
    icon: "🎧",
    title: "Replay the original audio",
    description:
      "Listen back before sharing, editing, or comparing transcription quality.",
  },
  {
    icon: "🔁",
    title: "Try another engine later",
    description:
      "Re-process the same recording when accuracy matters more than speed.",
  },
];

const entries = [
  {
    title: "Follow-up for design review",
    engine: "Deepgram",
    preview: "Can you send the latest mockups before lunch?",
  },
  {
    title: "Quick support reply",
    engine: "WhisperKit",
    preview: "I tested the issue locally and can reproduce it on macOS 14.",
    active: true,
  },
  {
    title: "Meeting takeaway",
    engine: "Google Cloud",
    preview:
      "Let's keep the shortcut workflow and make History easier to scan.",
  },
];
</script>

<style scoped>
.history {
  position: relative;
  overflow: hidden;
}

.history__container {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  gap: var(--spacing-3xl);
  align-items: center;
}

.history__label {
  display: inline-block;
  margin-bottom: var(--spacing-md);
  color: var(--color-primary-300);
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.history__title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
}

.history__description {
  color: var(--color-neutral-400);
  font-size: 1.0625rem;
  line-height: 1.8;
  margin-bottom: var(--spacing-2xl);
}

.history__points {
  display: grid;
  gap: var(--spacing-lg);
}

.history__point {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--spacing-md);
  align-items: start;
}

.history__point-icon {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.18);
}

.history__point h3 {
  font-size: 1rem;
  margin-bottom: 0.35rem;
}

.history__point p {
  color: var(--color-neutral-400);
}

.history__visual {
  padding: var(--spacing-lg);
  border-radius: 28px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.02)
  );
}

.history__window {
  border-radius: 24px;
  overflow: hidden;
  background: #0e1014;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: var(--shadow-xl);
}

.history__window-bar {
  display: flex;
  gap: 0.5rem;
  padding: 0.9rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
}

.history__window-bar span {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
}

.history__workspace {
  display: grid;
  grid-template-columns: 0.88fr 1.12fr;
  min-height: 440px;
}

.history__sidebar {
  padding: 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.015);
}

.history__search {
  margin-bottom: 1rem;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-neutral-500);
  font-size: 0.9375rem;
}

.history__entry {
  padding: 0.9rem;
  border-radius: var(--radius-lg);
  margin-bottom: 0.75rem;
  border: 1px solid transparent;
  background: transparent;
}

.history__entry.is-active {
  background: rgba(16, 185, 129, 0.08);
  border-color: rgba(16, 185, 129, 0.14);
}

.history__entry-top {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.35rem;
}

.history__entry-top strong {
  font-size: 0.95rem;
}

.history__entry-top span {
  font-size: 0.75rem;
  color: var(--color-primary-300);
}

.history__entry p {
  color: var(--color-neutral-400);
  font-size: 0.875rem;
  line-height: 1.5;
}

.history__detail {
  padding: 1.5rem;
}

.history__badge {
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.8rem;
  margin-bottom: 1rem;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-primary-300);
  font-size: 0.8125rem;
  font-weight: 700;
}

.history__detail h3 {
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
}

.history__detail p {
  color: var(--color-neutral-400);
  line-height: 1.75;
}

.history__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.5rem 0;
}

.history__chips span {
  padding: 0.6rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-neutral-300);
  font-size: 0.875rem;
}

.history__mini-player {
  padding: 1rem;
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.history__mini-player-wave {
  display: flex;
  align-items: end;
  gap: 0.25rem;
  height: 48px;
  margin-bottom: 0.9rem;
}

.history__mini-player-wave span {
  flex: 1;
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    rgba(52, 211, 153, 0.9),
    rgba(59, 130, 246, 0.45)
  );
  animation: history-wave 1.2s ease-in-out infinite;
}

.history__mini-player-wave span:nth-child(odd) {
  animation-delay: 0.2s;
}

.history__mini-player-wave span:nth-child(3n) {
  animation-delay: 0.35s;
}

.history__mini-player-meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.history__mini-player-meta small {
  color: var(--color-neutral-500);
}

@keyframes history-wave {
  0%,
  100% {
    height: 20%;
  }
  50% {
    height: 100%;
  }
}

@media (max-width: 1024px) {
  .history__container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .history__workspace {
    grid-template-columns: 1fr;
  }

  .history__sidebar {
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
}
</style>
