<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__container container">
      <!-- Logo -->
      <a href="#" class="navbar__logo">
        <img
          src="/icons/icon_128x128.png"
          alt="SapoWhisper Logo"
          class="navbar__logo-icon"
        />
        <span class="navbar__logo-text">SapoWhisper</span>
      </a>

      <!-- Navigation Links -->
      <ul class="navbar__links">
        <li><a href="#features" class="navbar__link">Features</a></li>
        <li><a href="#how-it-works" class="navbar__link">How It Works</a></li>
        <li><a href="#download" class="navbar__link">Download</a></li>
      </ul>

      <!-- CTA Button -->
      <a
        href="https://github.com/StevenACZ/SapoWhisper"
        target="_blank"
        rel="noopener noreferrer"
        class="navbar__cta btn btn-secondary"
      >
        <svg
          class="navbar__github-icon"
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
        <span>GitHub</span>
      </a>

      <!-- Mobile Menu Button -->
      <button
        class="navbar__mobile-btn"
        @click="toggleMobile"
        :aria-label="isMobileOpen ? 'Close menu' : 'Open menu'"
      >
        <span
          class="navbar__mobile-icon"
          :class="{ 'is-open': isMobileOpen }"
        ></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="navbar__mobile-menu" :class="{ 'is-open': isMobileOpen }">
      <ul class="navbar__mobile-links">
        <li>
          <a href="#features" class="navbar__mobile-link" @click="closeMobile"
            >Features</a
          >
        </li>
        <li>
          <a
            href="#how-it-works"
            class="navbar__mobile-link"
            @click="closeMobile"
            >How It Works</a
          >
        </li>
        <li>
          <a href="#download" class="navbar__mobile-link" @click="closeMobile"
            >Download</a
          >
        </li>
        <li>
          <a
            href="https://github.com/StevenACZ/SapoWhisper"
            target="_blank"
            rel="noopener noreferrer"
            class="navbar__mobile-link navbar__mobile-link--github"
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
            <span>View on GitHub</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const isScrolled = ref(false);
const isMobileOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobile = () => {
  isMobileOpen.value = !isMobileOpen.value;
};

const closeMobile = () => {
  isMobileOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: var(--spacing-md) 0;
  transition: all var(--transition-base);
  background: transparent;
}

.navbar--scrolled {
  background: rgba(10, 10, 11, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.navbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-weight: 700;
  font-size: 1.25rem;
}

.navbar__logo-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-lg);
  object-fit: cover;
}

.navbar__logo-text {
  background: linear-gradient(
    135deg,
    var(--color-neutral-100) 0%,
    var(--color-neutral-300) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: var(--spacing-2xl);
  list-style: none;
}

.navbar__link {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-neutral-400);
  transition: color var(--transition-fast);
  position: relative;
}

.navbar__link:hover {
  color: var(--color-neutral-100);
}

.navbar__link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary-500);
  transition: width var(--transition-base);
  border-radius: var(--radius-full);
}

.navbar__link:hover::after {
  width: 100%;
}

.navbar__cta {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: 0.875rem;
}

.navbar__github-icon {
  opacity: 0.9;
}

.navbar__mobile-btn {
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
}

.navbar__mobile-icon {
  position: relative;
  width: 20px;
  height: 2px;
  background: var(--color-neutral-100);
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
}

.navbar__mobile-icon::before,
.navbar__mobile-icon::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-neutral-100);
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
}

.navbar__mobile-icon::before {
  top: -6px;
}

.navbar__mobile-icon::after {
  bottom: -6px;
}

.navbar__mobile-icon.is-open {
  background: transparent;
}

.navbar__mobile-icon.is-open::before {
  top: 0;
  transform: rotate(45deg);
}

.navbar__mobile-icon.is-open::after {
  bottom: 0;
  transform: rotate(-45deg);
}

.navbar__mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--bg-dark-secondary);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: var(--spacing-lg);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all var(--transition-base);
}

.navbar__mobile-menu.is-open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.navbar__mobile-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.navbar__mobile-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-neutral-300);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.navbar__mobile-link:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-neutral-100);
}

.navbar__mobile-link--github {
  color: var(--color-primary-400);
}

@media (max-width: 768px) {
  .navbar__links,
  .navbar__cta {
    display: none;
  }

  .navbar__mobile-btn {
    display: flex;
  }

  .navbar__mobile-menu {
    display: block;
  }
}
</style>
