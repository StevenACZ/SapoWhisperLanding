<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <!-- Logo & Description -->
        <div class="footer__brand">
          <a href="#" class="footer__logo">
            <div class="footer__logo-icon">🐸</div>
            <span class="footer__logo-text">SapoWhisper</span>
          </a>
          <p class="footer__tagline">
            Transform your voice into text instantly. Free, open source, and
            built with love.
          </p>
          <div class="footer__social">
            <a
              href="https://github.com/StevenACZ/SapoWhisper"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__social-link"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div class="footer__links">
          <div class="footer__column">
            <h4 class="footer__column-title">Product</h4>
            <ul class="footer__list">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#download">Download</a></li>
            </ul>
          </div>

          <div class="footer__column">
            <h4 class="footer__column-title">Resources</h4>
            <ul class="footer__list">
              <li>
                <a
                  href="https://github.com/StevenACZ/SapoWhisper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/StevenACZ/SapoWhisper/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Release Notes
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/StevenACZ/SapoWhisper/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Report Issues
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__column">
            <h4 class="footer__column-title">Technologies</h4>
            <ul class="footer__list footer__list--tech">
              <li>
                <span class="footer__tech-badge">SwiftUI</span>
              </li>
              <li>
                <span class="footer__tech-badge">AVAudioEngine</span>
              </li>
              <li>
                <span class="footer__tech-badge">Speech Framework</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer__bottom">
        <p class="footer__copyright">
          © {{ currentYear }} SapoWhisper. Made with ❤️ by
          <a
            href="https://github.com/StevenACZ"
            target="_blank"
            rel="noopener noreferrer"
            >StevenACZ</a
          >
        </p>
        <p class="footer__version">
          <span class="footer__version-badge">v1.1.0</span>
          <span>MIT License</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background: var(--bg-dark-secondary);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: var(--spacing-4xl) 0 var(--spacing-2xl);
}

.footer__content {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: var(--spacing-4xl);
  margin-bottom: var(--spacing-3xl);
}

/* Brand */
.footer__brand {
  max-width: 300px;
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.footer__logo-icon {
  font-size: 2rem;
}

.footer__logo-text {
  font-size: 1.25rem;
  font-weight: 700;
}

.footer__tagline {
  font-size: 0.9375rem;
  color: var(--color-neutral-400);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
}

.footer__social {
  display: flex;
  gap: var(--spacing-sm);
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  color: var(--color-neutral-400);
  transition: all var(--transition-fast);
}

.footer__social-link:hover {
  background: var(--color-primary-500);
  border-color: var(--color-primary-500);
  color: white;
}

/* Links */
.footer__links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2xl);
}

.footer__column-title {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-neutral-300);
  margin-bottom: var(--spacing-lg);
}

.footer__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer__list a {
  font-size: 0.9375rem;
  color: var(--color-neutral-400);
  transition: color var(--transition-fast);
}

.footer__list a:hover {
  color: var(--color-primary-400);
}

.footer__list--tech {
  gap: var(--spacing-sm);
}

.footer__tech-badge {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-primary-400);
}

/* Bottom Bar */
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-2xl);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.footer__copyright {
  font-size: 0.875rem;
  color: var(--color-neutral-500);
}

.footer__copyright a {
  color: var(--color-primary-400);
  transition: color var(--transition-fast);
}

.footer__copyright a:hover {
  color: var(--color-primary-300);
}

.footer__version {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-size: 0.875rem;
  color: var(--color-neutral-500);
}

.footer__version-badge {
  padding: var(--spacing-xs) var(--spacing-sm);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-sm);
  font-family: monospace;
  font-size: 0.75rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer__content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .footer__brand {
    max-width: 100%;
    text-align: center;
  }

  .footer__logo {
    justify-content: center;
  }

  .footer__social {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .footer__links {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer__bottom {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }
}
</style>
