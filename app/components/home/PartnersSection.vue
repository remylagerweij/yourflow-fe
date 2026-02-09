<script setup lang="ts">
  // Partner logos with placeholder SVGs - can be replaced with actual logos
  const partners = [
    { name: 'Appian', logo: 'appian' },
    { name: 'Pega', logo: 'pega' },
    { name: 'OutSystems', logo: 'outsystems' },
  ]
  import { Autoplay } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/autoplay'
</script>

<template>
  <section
    class="relative z-20 w-full py-8 md:py-12 bg-black/30 backdrop-blur-md border-t border-black/50"
  >
    <div class="section-container">
      <p
        class="text-center text-white/80 text-xs md:text-sm font-medium uppercase tracking-wider mb-6 md:mb-8"
      >
        Trusted partnerships
      </p>

      <!-- Mobile Swiper -->
      <div class="md:hidden">
        <Swiper
          :modules="[Autoplay]"
          :slides-per-view="2.5"
          :space-between="20"
          :centered-slides="true"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          class="w-full"
        >
          <SwiperSlide v-for="partner in partners" :key="partner.name">
            <div
              class="flex items-center justify-center h-12 grayscale brightness-0 invert opacity-70"
            >
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center">
                  <span class="text-white font-heading font-bold text-xs">
                    {{ partner.name.charAt(0) }}
                  </span>
                </div>
                <span class="text-white font-semibold text-sm">{{ partner.name }}</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Desktop Grid -->
      <div class="hidden md:flex flex-wrap items-center justify-center gap-24">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="group flex items-center justify-center h-12 md:h-16 px-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
        >
          <!-- Placeholder logos - replace with actual partner SVGs -->
          <div class="flex items-center gap-2">
            <div
              class="w-10 h-10 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors flex items-center justify-center"
            >
              <span class="text-white font-heading font-bold text-sm">
                {{ partner.name.charAt(0) }}
              </span>
            </div>
            <span class="text-white font-semibold text-lg">{{ partner.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  :deep(.swiper-wrapper) {
    align-items: center;
  }
</style>
