<script setup lang="ts">
  const isMenuOpen = ref(false)
  const isServicesOpen = ref(false)

  interface NavLink {
    label: string
    href: string
    children?: NavLink[]
  }

  const navLinks: NavLink[] = [
    { label: 'Consulting', href: '/consulting' },
    { label: 'Projecten', href: '/projecten' },
    { label: 'Dagcursus Lean en Agile integratie', href: '/dagcursus' },
    { label: 'Over ons', href: '/over-ons' },
    { label: 'Vacatures', href: '/vacatures' },
  ]

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
    isServicesOpen.value = false
  }
</script>

<template>
  <header class="fixed top-4 left-4 right-4 z-50">
    <nav
      class="bg-black/30 backdrop-blur-md fluid-container rounded-2xl shadow-nav border-1 border-black/40 px-4 sm:px-6 lg:px-8"
    >
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo with hover animation -->
        <NuxtLink to="/" class="flex items-center gap-3 cursor-pointer group" @click="closeMenu">
          <img
            src="/images/yourflow-logo.svg"
            alt="YourFlow"
            class="h-10 lg:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden xl:flex items-center gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.label"
            :to="link.href"
            class="nav-link group relative px-4 py-2 rounded-lg font-medium text-white/80 transition-all duration-200 hover:text-white hover:bg-black/30"
          >
            <span class="relative z-10">{{ link.label }}</span>

            <!-- Active indicator line -->
            <span
              class="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yf-blue to-yf-pink rounded-full transition-all duration-300 group-hover:w-[calc(100%-2rem)]"
            />
          </NuxtLink>
        </div>

        <!-- CTA Button with glow effect -->
        <div class="hidden xl:block">
          <UiAppButton to="/contact"> Contact opnemen </UiAppButton>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="xl:hidden p-2.5 rounded-xl text-white hover:bg-white/10 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Menu openen"
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        >
          <svg
            v-if="!isMenuOpen"
            class="w-6 h-6 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu with slide animation -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="xl:hidden pb-6 border-t border-white/20 mt-2">
          <div class="flex flex-col gap-1 pt-4">
            <NuxtLink
              v-for="(link, index) in navLinks"
              :key="link.label"
              :to="link.href"
              class="mobile-nav-link px-4 py-3 text-white/90 font-medium hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-3"
              :style="{ animationDelay: `${index * 50}ms` }"
              @click="closeMenu"
            >
              <!-- Decorative dot -->
              <span
                class="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-yf-blue to-yf-pink opacity-0 transition-opacity duration-200"
              />
              {{ link.label }}
            </NuxtLink>

            <!-- Mobile CTA -->
            <div class="px-4 mt-4">
              <UiAppButton to="/contact" block @click="closeMenu"> Contact opnemen </UiAppButton>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<style scoped>
  /* Premium glassmorphism navigation */

  /* Elevated shadow for depth */
  .shadow-nav {
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.05),
      0 10px 15px -3px rgba(0, 0, 0, 0.05),
      0 0 0 1px rgba(0, 0, 0, 0.2) inset;
  }

  /* Nav link hover states */
  .nav-link:hover .nav-link-dot {
    opacity: 1;
  }

  /* Mobile nav link entrance animation */
  .mobile-nav-link {
    animation: slideInFromRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
    transform: translateX(20px);
  }

  .mobile-nav-link:hover span:first-child {
    opacity: 1 !important;
  }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Respect reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    .mobile-nav-link {
      animation: none;
      opacity: 1;
      transform: none;
    }

    .nav-link,
    .mobile-nav-link,
    button {
      transition: none !important;
    }
  }
</style>
