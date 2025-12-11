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

        <div v-for="(step, index) in steps" :key="index" class="step">
          <div class="step__number">
            <span>{{ index + 1 }}</span>
          </div>
          <div class="step__content">
            <div class="step__visual">
              <div class="step__icon">{{ step.emoji }}</div>
              <div class="step__demo" v-html="step.demo"></div>
            </div>
            <h3 class="step__title">{{ step.title }}</h3>
            <p class="step__description">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <!-- Demo Video Placeholder -->
      <div class="how-it-works__demo">
        <div class="demo-window">
          <div class="demo-window__header">
            <div class="demo-window__dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span class="demo-window__title">SapoWhisper Demo</span>
          </div>
          <div class="demo-window__content">
            <div class="demo-animation">
              <!-- Step 1: Hotkey -->
              <div
                class="demo-step demo-step--1"
                :class="{ active: activeDemo === 0 }"
              >
                <div class="demo-keys">
                  <kbd class="demo-key demo-key--option">⌥</kbd>
                  <span>+</span>
                  <kbd class="demo-key">Space</kbd>
                </div>
              </div>

              <!-- Step 2: Recording -->
              <div
                class="demo-step demo-step--2"
                :class="{ active: activeDemo === 1 }"
              >
                <div class="demo-mic-container">
                  <div class="demo-mic">🎤</div>
                  <div class="demo-waves">
                    <div class="demo-wave"></div>
                    <div class="demo-wave"></div>
                    <div class="demo-wave"></div>
                  </div>
                </div>
                <p class="demo-speaking">
                  "Schedule meeting tomorrow at 3pm..."
                </p>
              </div>

              <!-- Step 3: Paste -->
              <div
                class="demo-step demo-step--3"
                :class="{ active: activeDemo === 2 }"
              >
                <div class="demo-text-field">
                  <span class="demo-cursor"></span>
                  <span class="demo-typed-text">{{ typedText }}</span>
                </div>
                <div class="demo-check">✓ Pasted!</div>
              </div>
            </div>

            <!-- Step Indicators -->
            <div class="demo-indicators">
              <button
                v-for="(step, index) in demoSteps"
                :key="index"
                class="demo-indicator"
                :class="{ active: activeDemo === index }"
                @click="setActiveDemo(index)"
              >
                {{ step }}
              </button>
            </div>
          </div>
        </div>
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

const demoSteps = ["Activate", "Record", "Paste"];
const activeDemo = ref(0);
const typedText = ref("");

const fullText = "Schedule meeting tomorrow at 3pm with the design team";

const setActiveDemo = (index) => {
  activeDemo.value = index;
  if (index === 2) {
    typeText();
  }
};

const typeText = () => {
  typedText.value = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < fullText.length) {
      typedText.value += fullText[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, 40);
};

// Auto-advance demo
let demoInterval = null;

onMounted(() => {
  demoInterval = setInterval(() => {
    activeDemo.value = (activeDemo.value + 1) % 3;
    if (activeDemo.value === 2) {
      typeText();
    }
  }, 4000);
});

onUnmounted(() => {
  if (demoInterval) {
    clearInterval(demoInterval);
  }
});
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

/* Demo Window */
.how-it-works__demo {
  max-width: 700px;
  margin: 0 auto;
}

.demo-window {
  background: var(--bg-dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.demo-window__header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--bg-dark-tertiary);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.demo-window__dots {
  display: flex;
  gap: var(--spacing-sm);
}

.demo-window__dots span {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-full);
}

.demo-window__dots span:nth-child(1) {
  background: #ff5f57;
}
.demo-window__dots span:nth-child(2) {
  background: #febc2e;
}
.demo-window__dots span:nth-child(3) {
  background: #28c840;
}

.demo-window__title {
  font-size: 0.875rem;
  color: var(--color-neutral-400);
}

.demo-window__content {
  padding: var(--spacing-2xl);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.demo-animation {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.demo-step {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.5s ease;
  pointer-events: none;
}

.demo-step.active {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}

/* Demo Step 1: Keys */
.demo-keys {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-size: 1.25rem;
  color: var(--color-neutral-400);
}

.demo-key {
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--bg-dark-tertiary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-neutral-100);
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.3);
  animation: key-press 2s ease-in-out infinite;
}

.demo-key--option {
  background: var(--color-primary-600);
  border-color: var(--color-primary-500);
}

@keyframes key-press {
  0%,
  100% {
    transform: translateY(0);
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.3);
  }
  50% {
    transform: translateY(2px);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);
  }
}

/* Demo Step 2: Recording */
.demo-mic-container {
  position: relative;
}

.demo-mic {
  font-size: 3rem;
  position: relative;
  z-index: 1;
}

.demo-waves {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.demo-wave {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border: 2px solid var(--color-primary-500);
  border-radius: var(--radius-full);
  opacity: 0;
  animation: wave-pulse 2s ease-out infinite;
}

.demo-wave:nth-child(2) {
  animation-delay: 0.4s;
}
.demo-wave:nth-child(3) {
  animation-delay: 0.8s;
}

@keyframes wave-pulse {
  0% {
    width: 60px;
    height: 60px;
    opacity: 0.6;
  }
  100% {
    width: 150px;
    height: 150px;
    opacity: 0;
  }
}

.demo-speaking {
  font-size: 1rem;
  color: var(--color-neutral-300);
  font-style: italic;
}

/* Demo Step 3: Paste */
.demo-text-field {
  background: var(--bg-dark-tertiary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: var(--spacing-md) var(--spacing-lg);
  min-width: 400px;
  min-height: 50px;
  font-family: monospace;
  font-size: 0.9375rem;
  color: var(--color-neutral-200);
}

.demo-cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: var(--color-primary-500);
  animation: blink 1s step-end infinite;
  vertical-align: text-bottom;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.demo-typed-text {
  margin-left: var(--spacing-xs);
}

.demo-check {
  margin-top: var(--spacing-md);
  color: var(--color-primary-400);
  font-weight: 600;
  font-size: 1rem;
}

/* Demo Indicators */
.demo-indicators {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
}

.demo-indicator {
  padding: var(--spacing-sm) var(--spacing-lg);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-neutral-400);
  transition: all var(--transition-fast);
}

.demo-indicator:hover {
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--color-neutral-200);
}

.demo-indicator.active {
  background: var(--color-primary-500);
  border-color: var(--color-primary-500);
  color: white;
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

@media (max-width: 640px) {
  .demo-text-field {
    min-width: 100%;
  }

  .demo-window__content {
    padding: var(--spacing-lg);
  }
}
</style>
