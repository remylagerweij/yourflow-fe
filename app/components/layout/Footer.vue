<script setup lang="ts">
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Consulting', href: '#services' },
    { label: 'Projecten', href: '#testimonials' },
    { label: 'Over ons', href: '#about' },
    { label: 'Vacatures', href: '#' },
    { label: 'Contact', href: '#contact' },
  ]
</script>

<template>
  <footer
    id="contact"
    class="bg-gradient-to-br from-yf-navy to-slate-900 text-white relative overflow-hidden"
  >
    <!-- Background Decor -->
    <div
      class="absolute top-0 right-0 w-[500px] h-[500px] bg-yf-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
    />
    <div
      class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yf-pink/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"
    />

    <!-- Oversized YourFlow Pattern - Bottom Right -->
    <div
      class="absolute -bottom-32 -right-32 lg:-bottom-48 lg:-right-48 w-[750px] h-[360px] lg:w-[1200px] lg:h-[578px] xl:w-[1500px] xl:h-[723px] pointer-events-none opacity-[0.12] select-none"
    >
      <img
        src="/images/yourflow-pattern.svg"
        alt=""
        class="w-full h-full text-white"
        aria-hidden="true"
      />
    </div>

    <div class="fluid-container py-16 lg:py-24 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <NuxtLink to="/" class="flex items-center gap-3 mb-6 group w-fit">
            <div
              class="w-12 h-12 bg-gradient-to-br from-yf-blue to-yf-pink rounded-xl flex items-center justify-center shadow-lg shadow-yf-blue/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-yf-pink/30 group-hover:scale-105"
            >
              <span class="text-white font-heading font-bold text-xl">YF</span>
            </div>
            <span
              class="font-heading font-bold text-2xl tracking-tight transition-colors duration-200 group-hover:text-yf-blue"
            >
              YourFlow
            </span>
          </NuxtLink>
          <p class="text-white/70 max-w-md leading-relaxed text-lg">
            Wij realiseren softwareoplossingen waarmee u klanten sneller, beter en tegen lagere
            kosten bedient.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-heading font-bold text-xl mb-6 text-white">Navigatie</h4>
          <ul class="space-y-4">
            <li v-for="link in footerLinks" :key="link.label">
              <a
                :href="link.href"
                class="group flex items-center gap-2 text-white/70 hover:text-yf-blue transition-all duration-300 cursor-pointer"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full bg-yf-blue opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                />
                <span class="transition-transform duration-300 group-hover:translate-x-1">{{
                  link.label
                }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-heading font-bold text-xl mb-6 text-white">Contact</h4>
          <address class="not-italic space-y-4 text-white/70">
            <div class="flex items-start gap-3">
              <svg
                class="w-6 h-6 text-yf-blue shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <p>Orteliuslaan 9</p>
                <p>3528 BA Utrecht</p>
                <p>The Netherlands</p>
              </div>
            </div>
            <!-- Email (example addition for completeness, can be removed if strictly not needed) -->
            <div class="flex items-center gap-3">
              <svg
                class="w-6 h-6 text-yf-blue shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a href="mailto:info@yourflow.eu" class="hover:text-yf-blue transition-colors"
                >info@yourflow.eu</a
              >
            </div>
          </address>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <p class="text-white/50 text-sm font-medium">
          © {{ currentYear }} YourFlow B.V. &nbsp;|&nbsp; KvK: 69952957
        </p>
        <div class="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/company/yourflow/"
            target="_blank"
            rel="noopener noreferrer"
            class="group w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-yf-blue hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-yf-blue/30"
            aria-label="LinkedIn"
          >
            <svg
              class="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
