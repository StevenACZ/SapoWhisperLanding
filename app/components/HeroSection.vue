<template>
  <section class="hero">
    <div class="hero__backdrop">
      <div class="hero__orb hero__orb--left"></div>
      <div class="hero__orb hero__orb--right"></div>
      <div class="hero__grid"></div>
    </div>

    <div class="hero__container container">
      <div class="hero__content">
        <div class="hero__badge animate-fade-in-up">
          <span>macOS native</span>
          <span>Local or cloud</span>
        </div>

        <h1 class="hero__title animate-fade-in-up delay-100">
          Native dictation
          <span class="text-gradient">for macOS</span>
        </h1>

        <p class="hero__subtitle animate-fade-in-up delay-200">
          Trigger recording from anywhere, transcribe with the engine you
          prefer, paste instantly, and keep every transcript in a searchable
          history.
        </p>

        <div class="hero__actions animate-fade-in-up delay-300">
          <a href="#download" class="btn btn-primary btn-lg"
            >Download for macOS</a
          >
          <a
            href="https://github.com/StevenACZ/SapoWhisper"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-secondary btn-lg"
          >
            View on GitHub
          </a>
        </div>

        <div class="hero__meta animate-fade-in-up delay-400">
          <div class="hero__shortcut">
            <span>Press</span>
            <kbd>⌥</kbd>
            <span>+</span>
            <kbd>Space</kbd>
            <span>to start dictating</span>
          </div>

          <div class="hero__microproof">
            <span v-for="(item, index) in proofItems" :key="item">
              {{ item
              }}<template v-if="index < proofItems.length - 1"> · </template>
            </span>
          </div>
        </div>
      </div>

      <div class="hero__visual animate-scale-in delay-200">
        <div class="hero__mockup card-glass">
          <div class="hero__window-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="hero__mockup-header">
            <div>
              <small class="hero__eyebrow">What SapoWhisper does</small>
              <h3>Record, transcribe, paste.</h3>
            </div>
            <div class="hero__engine-chip">Deepgram · Fast</div>
          </div>

          <div class="hero__steps">
            <div class="hero__step">
              <div class="hero__step-number">1</div>
              <div>
                <strong>Start with a shortcut</strong>
                <p>Trigger recording from anywhere on your Mac.</p>
              </div>
            </div>

            <div class="hero__step">
              <div class="hero__step-number">2</div>
              <div>
                <strong>Speak naturally</strong>
                <p>Use your preferred mic and watch the live audio feedback.</p>
              </div>
            </div>

            <div class="hero__step">
              <div class="hero__step-number">3</div>
              <div>
                <strong>Paste or revisit later</strong>
                <p>Send the result instantly and keep it in History.</p>
              </div>
            </div>
          </div>

          <div class="hero__recording card-glass">
            <div class="hero__recording-head">
              <span class="hero__status-dot"></span>
              Recording active
              <strong>00:18</strong>
            </div>

            <div class="hero__waveform" aria-hidden="true">
              <span v-for="bar in 20" :key="bar"></span>
            </div>

            <p class="hero__transcript-text">
              “Can you send the updated launch copy before lunch?”
            </p>
          </div>

          <div class="hero__summary-grid">
            <div class="hero__summary-card">
              <small>Output</small>
              <strong>Auto-paste enabled</strong>
              <p>
                Drop the result directly into the app you are already using.
              </p>
            </div>

            <div class="hero__summary-card">
              <small>History</small>
              <strong>Search previous transcripts</strong>
              <p>Replay audio, pin entries, and re-transcribe later.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const proofItems = ["Global hotkey", "Auto-paste", "Searchable History"];
</script>

<style scoped>
.hero {
  position: relative;
  padding: 8.5rem 0 7rem;
  overflow: hidden;
}

.hero__backdrop {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(70px);
}

.hero__orb--left {
  top: 4rem;
  left: -4rem;
  width: 20rem;
  height: 20rem;
  background: rgba(16, 185, 129, 0.12);
}

.hero__orb--right {
  top: 8rem;
  right: 3rem;
  width: 24rem;
  height: 24rem;
  background: rgba(59, 130, 246, 0.08);
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 1),
    transparent 78%
  );
}

.hero__container {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.02fr);
  gap: var(--spacing-4xl);
  align-items: center;
}

.hero__content {
  max-width: 580px;
}

.hero__badge {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-bottom: var(--spacing-xl);
}

.hero__badge span {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--color-neutral-200);
  font-size: 0.85rem;
  font-weight: 600;
}

.hero__title {
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
  margin-bottom: var(--spacing-lg);
}

.hero__title span {
  display: block;
}

.hero__subtitle {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--color-neutral-400);
  margin-bottom: var(--spacing-2xl);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
}

.hero__meta {
  display: grid;
  gap: var(--spacing-lg);
}

.hero__shortcut {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.65rem;
  color: var(--color-neutral-300);
}

.hero__shortcut kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 3rem;
  padding: 0.6rem 0.9rem;
  border-radius: 0.9rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--color-neutral-100);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.hero__microproof {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  color: var(--color-neutral-400);
  font-size: 0.9rem;
}

.hero__microproof span {
  color: inherit;
}

.hero__mockup {
  overflow: hidden;
  border-radius: 28px;
  background: rgba(11, 13, 16, 0.82);
  box-shadow: var(--shadow-xl);
}

.hero__window-bar {
  display: flex;
  gap: 0.5rem;
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.hero__window-bar span {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
}

.hero__mockup-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: start;
  padding: 1.3rem 1.3rem 1rem;
}

.hero__eyebrow,
.hero__summary-card small {
  color: var(--color-neutral-500);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.hero__mockup-header h3 {
  margin-top: 0.3rem;
  font-size: 1.6rem;
  line-height: 1.15;
}

.hero__engine-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem 0.85rem;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.18);
  color: #93c5fd;
  font-size: 0.85rem;
  font-weight: 600;
}

.hero__steps {
  display: grid;
  gap: 0.8rem;
  padding: 0 1.3rem 1rem;
}

.hero__step {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.9rem;
  align-items: start;
  padding: 0.95rem 1rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.hero__step-number {
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.12);
  color: var(--color-primary-300);
  font-weight: 700;
}

.hero__step strong {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.98rem;
}

.hero__step p {
  color: var(--color-neutral-400);
  line-height: 1.6;
  font-size: 0.92rem;
}

.hero__recording {
  margin: 0 1.3rem 1rem;
  padding: 1rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.03);
}

.hero__recording-head {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.85rem;
  color: var(--color-neutral-300);
  font-size: 0.9rem;
  font-weight: 600;
}

.hero__recording-head strong {
  margin-left: auto;
  color: var(--color-neutral-100);
}

.hero__status-dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 999px;
  background: var(--color-primary-400);
  box-shadow: 0 0 14px rgba(52, 211, 153, 0.9);
}

.hero__waveform {
  display: flex;
  align-items: end;
  gap: 0.22rem;
  height: 56px;
  margin-bottom: 0.85rem;
}

.hero__waveform span {
  flex: 1;
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    rgba(52, 211, 153, 0.95),
    rgba(59, 130, 246, 0.4)
  );
  animation: hero-wave 1.3s ease-in-out infinite;
}

.hero__waveform span:nth-child(odd) {
  animation-delay: 0.15s;
}

.hero__waveform span:nth-child(3n) {
  animation-delay: 0.3s;
}

.hero__transcript-text {
  color: var(--color-neutral-200);
  font-size: 1rem;
  line-height: 1.65;
}

.hero__summary-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
  padding: 0 1.3rem 1.3rem;
}

.hero__summary-card {
  padding: 0.95rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.hero__summary-card strong {
  display: block;
  margin: 0.4rem 0 0.45rem;
  font-size: 0.98rem;
}

.hero__summary-card p {
  color: var(--color-neutral-400);
  font-size: 0.9rem;
  line-height: 1.6;
}

@keyframes hero-wave {
  0%,
  100% {
    height: 20%;
  }
  50% {
    height: 100%;
  }
}

@media (max-width: 1100px) {
  .hero__container {
    grid-template-columns: 1fr;
  }

  .hero__content {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 7.5rem 0 5rem;
  }

  .hero__actions {
    flex-direction: column;
  }

  .hero__actions :deep(.btn) {
    width: 100%;
  }

  .hero__mockup-header,
  .hero__summary-grid {
    grid-template-columns: 1fr;
  }

  .hero__mockup-header {
    flex-direction: column;
  }

  .hero__summary-grid {
    grid-template-columns: 1fr;
  }
}
</style>
