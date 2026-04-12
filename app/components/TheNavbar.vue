<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__container container">
      <a href="#" class="navbar__logo">
        <img
          src="/icons/icon_128x128.png"
          alt="SapoWhisper Logo"
          class="navbar__logo-icon"
        />
        <span class="navbar__logo-text">SapoWhisper</span>
      </a>

      <ul class="navbar__links">
        <li><a href="#features" class="navbar__link">Features</a></li>
        <li><a href="#history" class="navbar__link">History</a></li>
        <li><a href="#how-it-works" class="navbar__link">Workflow</a></li>
        <li><a href="#download" class="navbar__link">Download</a></li>
      </ul>

      <a
        href="https://github.com/StevenACZ/SapoWhisper"
        target="_blank"
        rel="noopener noreferrer"
        class="navbar__cta"
      >
        GitHub
      </a>

      <button
        class="navbar__mobile-btn"
        @click="toggleMobile"
        :aria-label="isMobileOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="isMobileOpen"
        aria-controls="mobile-nav"
      >
        <span
          class="navbar__mobile-icon"
          :class="{ 'is-open': isMobileOpen }"
        ></span>
      </button>
    </div>

    <div
      id="mobile-nav"
      class="navbar__mobile-menu"
      :class="{ 'is-open': isMobileOpen }"
    >
      <ul class="navbar__mobile-links">
        <li>
          <a href="#features" class="navbar__mobile-link" @click="closeMobile"
            >Features</a
          >
        </li>
        <li>
          <a href="#history" class="navbar__mobile-link" @click="closeMobile"
            >History</a
          >
        </li>
        <li>
          <a
            href="#how-it-works"
            class="navbar__mobile-link"
            @click="closeMobile"
            >Workflow</a
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
            View on GitHub
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
  isScrolled.value = window.scrollY > 24;
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
  inset: 0 0 auto;
  z-index: 1000;
  padding: 1rem 0;
  transition: all var(--transition-base);
}

.navbar--scrolled {
  background: rgba(10, 10, 11, 0.72);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.navbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.navbar__logo {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  font-weight: 700;
}

.navbar__logo-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
}

.navbar__logo-text {
  color: var(--color-neutral-100);
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
}

.navbar__link {
  color: var(--color-neutral-400);
  font-size: 0.95rem;
  font-weight: 500;
  transition: color var(--transition-fast);
}

.navbar__link:hover {
  color: var(--color-neutral-100);
}

.navbar__cta {
  color: var(--color-neutral-300);
  font-size: 0.92rem;
  font-weight: 600;
  transition: color var(--transition-fast);
}

.navbar__cta:hover {
  color: var(--color-neutral-100);
}

.navbar__mobile-btn {
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
}

.navbar__mobile-icon,
.navbar__mobile-icon::before,
.navbar__mobile-icon::after {
  width: 20px;
  height: 2px;
  border-radius: 999px;
  background: var(--color-neutral-100);
  transition: all var(--transition-fast);
}

.navbar__mobile-icon {
  position: relative;
}

.navbar__mobile-icon::before,
.navbar__mobile-icon::after {
  content: "";
  position: absolute;
  left: 0;
}

.navbar__mobile-icon::before {
  top: -6px;
}

.navbar__mobile-icon::after {
  top: 6px;
}

.navbar__mobile-icon.is-open {
  background: transparent;
}

.navbar__mobile-icon.is-open::before {
  top: 0;
  transform: rotate(45deg);
}

.navbar__mobile-icon.is-open::after {
  top: 0;
  transform: rotate(-45deg);
}

.navbar__mobile-menu {
  display: none;
}

@media (max-width: 900px) {
  .navbar__links,
  .navbar__cta {
    display: none;
  }

  .navbar__mobile-btn {
    display: inline-flex;
  }

  .navbar__mobile-menu {
    display: block;
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-base);
    background: rgba(10, 10, 11, 0.94);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .navbar__mobile-menu.is-open {
    max-height: 320px;
  }

  .navbar__mobile-links {
    list-style: none;
    padding: 0 1.5rem 1.5rem;
    display: grid;
    gap: 0.75rem;
  }

  .navbar__mobile-link {
    display: block;
    padding: 0.85rem 0;
    color: var(--color-neutral-300);
  }

  .navbar__mobile-link--github {
    color: var(--color-primary-300);
    font-weight: 600;
  }
}
</style>
