<script setup lang="ts">
  import PartnersSection from './PartnersSection.vue'
  import InteractiveCases from './InteractiveCases.vue'
</script>

<template>
  <section class="relative min-h-screen flex flex-col items-center overflow-hidden justify-between">
    <!-- Animated Gradient Background -->
    <UiBackgroundGradientAnimation
      gradient-background-start="rgb(8, 37, 54)"
      gradient-background-end="rgb(13, 51, 72)"
      first-color="19, 153, 250"
      second-color="253, 71, 246"
      third-color="19, 153, 250"
      fourth-color="253, 71, 246"
      fifth-color="100, 180, 255"
      pointer-color="253, 71, 246"
      size="80%"
      :interactive="true"
      container-class="absolute inset-0 -z-10"
    />

    <!-- Oversized YourFlow Pattern - Bottom Right -->
    <div
      class="absolute -bottom-0 -right-32 lg:-right-48 w-[750px] h-[360px] lg:w-[1200px] lg:h-[578px] xl:w-[1500px] xl:h-[723px] pointer-events-none opacity-[0.12] select-none"
    >
      <img
        src="/images/yourflow-pattern.svg"
        alt=""
        class="w-full h-full text-white"
        aria-hidden="true"
      />
    </div>

    <div class="section-container flex-grow items-center flex relative z-10 w-full">
      <!-- Content -->
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        <!-- Left Column: Content -->
        <div class="text-left animate-fade-in relative z-20">
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-6"
          >
            Wij zijn
            <span class="text-gradient">YourFlow</span>
          </h1>
          <p class="text-lg sm:text-xl text-white/80 max-w-xl mb-8 leading-relaxed">
            Wij realiseren softwareoplossingen waarmee u klanten sneller, beter en tegen lagere
            kosten bedient. Met slimme procesinnovatie en automatische procesuitvoering.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#services" class="btn-primary">
              Onze diensten
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#testimonials"
              class="btn-secondary text-white border-white/40 hover:bg-black/30 hover:text-white"
            >
              Bekijk projecten
            </a>
          </div>
        </div>

        <!-- Right Column: Interactive Cases -->
        <div class="hidden lg:block relative z-20">
          <InteractiveCases />
        </div>
      </div>
      <!-- Scroll indicator - positioned at actual bottom of section -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block animate-bounce z-10">
        <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>

    <PartnersSection />
  </section>
</template>
