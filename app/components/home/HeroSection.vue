<script setup lang="ts">
  import PartnersSection from './PartnersSection.vue'
  import InteractiveCases from './InteractiveCases.vue'
</script>

<template>
  <section
    class="relative h-screen max-h-screen flex flex-col items-center overflow-hidden justify-between"
  >
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

    <!-- Noise Texture Overlay -->
    <div
      class="absolute inset-0 pointer-events-none z-0 opacity-[0.07]"
      style="
        background-image: url('/images/bg-noise.svg');
        background-repeat: repeat;
        background-size: 100px;
      "
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
      <div class="grid lg:grid-cols-3 gap-12 lg:gap-20 items-center w-full">
        <!-- Left Column: Content -->
        <div class="text-left animate-fade-in relative z-30">
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
          </div>
        </div>

        <!-- Right Column: Interactive Cases -->
        <div class="hidden lg:block relative z-20 lg:col-span-2">
          <InteractiveCases />
        </div>
      </div>
      <!-- Scroll indicator - interactive -->
      <div class="absolute bottom-8 left-0 right-0 hidden md:flex justify-center z-10">
        <button
          class="scroll-arrow flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/50 hover:text-white cursor-pointer transition-all duration-500"
          aria-label="Scroll to next section"
          @click="
            $el.closest('section')?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' })
          "
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </div>

    <PartnersSection />
  </section>
</template>

<style scoped>
  .scroll-arrow:hover {
    box-shadow:
      0 8px 25px rgba(19, 153, 250, 0.4),
      0 16px 40px rgba(253, 71, 246, 0.2);
    border-color: rgba(19, 153, 250, 0.5);
  }
</style>
