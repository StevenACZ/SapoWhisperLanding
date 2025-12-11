<template>
  <section class="hero">
    <!-- Background Effects -->
    <div class="hero__bg">
      <div class="hero__gradient"></div>
      <div class="hero__grid"></div>
      <div class="hero__glow"></div>
    </div>

    <div class="hero__container container">
      <div class="hero__content">
        <!-- Badge -->
        <div class="hero__badge animate-fade-in-up">
          <span class="hero__badge-icon">✨</span>
          <span>Open Source • Free Forever</span>
        </div>

        <!-- Title -->
        <h1 class="hero__title animate-fade-in-up delay-100">
          Transform Your Voice<br />
          Into <span class="text-gradient">Text Instantly</span>
        </h1>

        <!-- Subtitle -->
        <p class="hero__subtitle animate-fade-in-up delay-200">
          A powerful macOS menu bar app that captures your voice and converts it
          to text with a single hotkey. Fast, private, and always ready.
        </p>

        <!-- Hotkey Demo -->
        <div class="hero__hotkey animate-fade-in-up delay-300">
          <span class="hero__hotkey-label">Press</span>
          <div class="hero__hotkey-keys">
            <kbd class="hero__key">⌥</kbd>
            <span class="hero__key-plus">+</span>
            <kbd class="hero__key">Space</kbd>
          </div>
          <span class="hero__hotkey-label">to start recording</span>
        </div>

        <!-- CTA Buttons -->
        <div class="hero__cta animate-fade-in-up delay-400">
          <a href="#download" class="btn btn-primary btn-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download for macOS
          </a>
          <a href="#how-it-works" class="btn btn-secondary btn-lg">
            See How It Works
          </a>
        </div>

        <!-- Platform Info -->
        <p class="hero__platform animate-fade-in-up delay-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
            />
          </svg>
          Requires macOS 12.0+ (Monterey or later)
        </p>
      </div>

      <!-- Hero Visual -->
      <div class="hero__visual animate-scale-in delay-200">
        <div class="hero__mockup">
          <!-- Menu Bar App Preview -->
          <div class="mockup__menubar">
            <div class="mockup__menubar-icons">
              <span>📶</span>
              <span>🔋</span>
              <span class="mockup__frog">🐸</span>
              <span>10:42</span>
            </div>
          </div>

          <!-- App Popup -->
          <div class="mockup__popup animate-float">
            <div class="mockup__popup-header">
              <div class="mockup__popup-logo">🐸</div>
              <span>SapoWhisper</span>
            </div>

            <div class="mockup__waveform">
              <div
                v-for="n in 20"
                :key="n"
                class="mockup__wave-bar"
                :style="{ animationDelay: `${n * 50}ms` }"
              ></div>
            </div>

            <div class="mockup__status">
              <div class="mockup__status-dot"></div>
              <span>Recording...</span>
            </div>

            <div class="mockup__text-preview">
              <p>
                "Hello, this is a voice transcription demo showing how
                SapoWhisper works..."
              </p>
            </div>
          </div>

          <!-- Decorative Elements -->
          <div class="mockup__decoration mockup__decoration--1"></div>
          <div class="mockup__decoration mockup__decoration--2"></div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="hero__scroll">
      <div class="hero__scroll-mouse">
        <div class="hero__scroll-wheel"></div>
      </div>
      <span>Scroll to explore</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  overflow: hidden;
}

/* Background Effects */
.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.hero__gradient {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 150%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(16, 185, 129, 0.08) 0%,
    transparent 60%
  );
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
}

.hero__glow {
  position: absolute;
  top: 20%;
  right: 15%;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(16, 185, 129, 0.1) 0%,
    transparent 70%
  );
  filter: blur(60px);
}

/* Container */
.hero__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4xl);
  align-items: center;
  position: relative;
  z-index: 1;
}

/* Content */
.hero__content {
  max-width: 600px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-primary-400);
  margin-bottom: var(--spacing-xl);
}

.hero__badge-icon {
  font-size: 1rem;
}

.hero__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: var(--spacing-lg);
}

.hero__subtitle {
  font-size: 1.125rem;
  color: var(--color-neutral-400);
  line-height: 1.7;
  margin-bottom: var(--spacing-xl);
}

/* Hotkey Demo */
.hero__hotkey {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
}

.hero__hotkey-label {
  font-size: 0.875rem;
  color: var(--color-neutral-500);
}

.hero__hotkey-keys {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.hero__key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--bg-dark-tertiary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  font-family: var(--font-family);
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-neutral-200);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.hero__key-plus {
  color: var(--color-neutral-500);
  font-weight: 500;
}

/* CTA Buttons */
.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.hero__platform {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.875rem;
  color: var(--color-neutral-500);
}

/* Visual / Mockup */
.hero__visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.hero__mockup {
  position: relative;
  width: 100%;
  max-width: 450px;
}

.mockup__menubar {
  background: linear-gradient(135deg, #2d2d30 0%, #1a1a1c 100%);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  padding: var(--spacing-sm) var(--spacing-lg);
  display: flex;
  justify-content: flex-end;
}

.mockup__menubar-icons {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-size: 0.75rem;
  color: var(--color-neutral-300);
}

.mockup__frog {
  font-size: 1rem;
  animation: bounce-subtle 2s ease-in-out infinite;
}

.mockup__popup {
  background: var(--bg-dark-secondary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-xl), var(--shadow-glow);
  position: relative;
  margin-top: var(--spacing-md);
}

.mockup__popup-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: var(--spacing-lg);
}

.mockup__popup-logo {
  font-size: 1.5rem;
}

.mockup__waveform {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  height: 60px;
  margin-bottom: var(--spacing-lg);
}

.mockup__wave-bar {
  width: 4px;
  height: 20%;
  background: var(--color-primary-500);
  border-radius: var(--radius-full);
  animation: waveform 1s ease-in-out infinite;
}

.mockup__status {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.875rem;
  color: var(--color-primary-400);
  margin-bottom: var(--spacing-lg);
}

.mockup__status-dot {
  width: 8px;
  height: 8px;
  background: var(--color-primary-500);
  border-radius: var(--radius-full);
  animation: pulse-glow 1.5s ease-in-out infinite;
}

.mockup__text-preview {
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}

.mockup__text-preview p {
  font-size: 0.9375rem;
  color: var(--color-neutral-300);
  font-style: italic;
  line-height: 1.5;
}

.mockup__decoration {
  position: absolute;
  border-radius: var(--radius-full);
  background: var(--color-primary-500);
  filter: blur(40px);
  opacity: 0.3;
}

.mockup__decoration--1 {
  width: 150px;
  height: 150px;
  top: -50px;
  right: -50px;
}

.mockup__decoration--2 {
  width: 100px;
  height: 100px;
  bottom: -30px;
  left: -30px;
  background: var(--color-accent-purple);
}

/* Scroll Indicator */
.hero__scroll {
  position: absolute;
  bottom: var(--spacing-2xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  opacity: 0.6;
  animation: bounce-subtle 2s ease-in-out infinite;
}

.hero__scroll-mouse {
  width: 24px;
  height: 40px;
  border: 2px solid var(--color-neutral-500);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.hero__scroll-wheel {
  width: 4px;
  height: 8px;
  background: var(--color-neutral-400);
  border-radius: var(--radius-full);
  animation: fade-in-up 1.5s ease-in-out infinite;
}

.hero__scroll span {
  font-size: 0.75rem;
  color: var(--color-neutral-500);
  letter-spacing: 0.05em;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero__container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__content {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero__hotkey {
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero__cta {
    justify-content: center;
  }

  .hero__visual {
    order: -1;
    margin-bottom: var(--spacing-2xl);
  }

  .hero__mockup {
    max-width: 380px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding-top: 100px;
  }

  .hero__title {
    font-size: 2rem;
  }

  .hero__cta {
    flex-direction: column;
    width: 100%;
  }

  .hero__cta .btn {
    width: 100%;
  }

  .hero__scroll {
    display: none;
  }
}
</style>
