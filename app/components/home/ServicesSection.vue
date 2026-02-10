<script setup lang="ts">
  const services = [
    {
      icon: 'process',
      title: 'Proces',
      description:
        'Hoe u uw werk uitvoert en welke belemmeringen u ervaart. Wij analyseren en optimaliseren uw bedrijfsprocessen.',
    },
    {
      icon: 'tool',
      title: 'Tool',
      description:
        'Hoe u dit anders kunt doen gegeven de digitale hulpmiddelen die Appian, Pega en OutSystems bieden.',
    },
    {
      icon: 'people',
      title: 'Mens',
      description:
        'Een iteratieve, agile aanpak waarin uw mensen centraal staan en waarin we samen intensief optrekken naar het resultaat.',
    },
  ]
</script>

<template>
  <section id="services" class="py-20 lg:py-28 bg-slate-50">
    <div class="fluid-container">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="section-title mb-4">Onze <span class="text-gradient">aanpak</span></h2>
        <p class="section-subtitle mx-auto">
          We tillen uw dienstverlening naar een hoog digitaal niveau door drie zaken samen te
          brengen.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="(service, index) in services"
          :key="service.title"
          class="group relative bg-white rounded-2xl p-8 shadow-sm border border-yf-grey/20 hover:shadow-xl hover:border-yf-blue/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Hover Background Gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-white via-white to-yf-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          />

          <!-- Icon -->
          <div
            class="relative w-14 h-14 rounded-xl bg-gradient-to-br from-yf-blue/10 to-yf-pink/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
          >
            <!-- Process icon -->
            <svg
              v-if="service.icon === 'process'"
              class="w-7 h-7 text-yf-blue group-hover:text-yf-pink transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <!-- Tool icon -->
            <svg
              v-else-if="service.icon === 'tool'"
              class="w-7 h-7 text-yf-blue group-hover:text-yf-pink transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <!-- People icon -->
            <svg
              v-else
              class="w-7 h-7 text-yf-blue group-hover:text-yf-pink transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>

          <!-- Content -->
          <h3
            class="relative font-heading font-semibold text-xl text-yf-navy mb-3 group-hover:text-yf-blue transition-colors"
          >
            {{ service.title }}
          </h3>
          <p class="relative text-yf-navy/70 leading-relaxed mb-6">
            {{ service.description }}
          </p>

          <!-- Read More Link -->
          <div
            class="relative flex items-center text-yf-blue font-semibold group-hover:translate-x-1 transition-transform duration-300"
          >
            <span>Lees meer</span>
            <svg
              class="w-4 h-4 ml-2 group-hover:ml-3 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>

          <!-- Bottom accent -->
          <div
            class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yf-blue to-yf-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
          />
        </article>
      </div>
    </div>
  </section>
</template>
