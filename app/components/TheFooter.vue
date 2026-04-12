<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <a href="#" class="footer__logo">
            <img
              src="/icons/icon_128x128.png"
              alt="SapoWhisper logo"
              class="footer__logo-icon"
            />
            <span>SapoWhisper</span>
          </a>
          <p class="footer__tagline">
            Native dictation for macOS — fast to trigger, flexible to run, and
            built for real work.
          </p>
        </div>

        <div class="footer__columns">
          <div>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#history">History</a>
            <a href="#how-it-works">Workflow</a>
            <a href="#download">Download</a>
          </div>

          <div>
            <h4>Resources</h4>
            <a
              href="https://github.com/StevenACZ/SapoWhisper"
              target="_blank"
              rel="noopener noreferrer"
              >App repository</a
            >
            <a
              href="https://github.com/StevenACZ/SapoWhisper/releases"
              target="_blank"
              rel="noopener noreferrer"
              >Release notes</a
            >
            <a
              href="https://github.com/StevenACZ/SapoWhisper/issues"
              target="_blank"
              rel="noopener noreferrer"
              >Issues</a
            >
          </div>

          <div>
            <h4>Stack</h4>
            <p class="footer__stack-list">
              SwiftUI · WhisperKit · Deepgram · Google Cloud · SQLite History
            </p>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p>
          © {{ currentYear }} SapoWhisper · Made by
          <a
            href="https://github.com/StevenACZ"
            target="_blank"
            rel="noopener noreferrer"
            >StevenACZ</a
          >
        </p>
        <div class="footer__meta">
          <span class="footer__version">{{ version }}</span>
          <span>MIT License</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
const { version } = useGithubRelease();
</script>

<style scoped>
.footer {
  padding: var(--spacing-4xl) 0 var(--spacing-2xl);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: var(--bg-dark-secondary);
}

.footer__top {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr);
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-3xl);
}

.footer__logo {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer__logo-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
}

.footer__tagline {
  max-width: 400px;
  color: var(--color-neutral-400);
  line-height: 1.8;
}

.footer__columns {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--spacing-xl);
}

.footer__columns h4 {
  margin-bottom: 1rem;
  color: var(--color-neutral-200);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.8rem;
}

.footer__columns a {
  display: block;
  margin-bottom: 0.8rem;
  color: var(--color-neutral-400);
  transition: color var(--transition-fast);
}

.footer__columns a:hover {
  color: var(--color-primary-300);
}

.footer__stack-list {
  color: var(--color-neutral-400);
  line-height: 1.9;
}

.footer__version {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
  padding-top: var(--spacing-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--color-neutral-400);
}

.footer__bottom a {
  color: var(--color-neutral-200);
}

.footer__meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .footer__top,
  .footer__columns {
    grid-template-columns: 1fr;
  }
}
</style>
