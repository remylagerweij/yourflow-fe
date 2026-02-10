<script setup lang="ts">
  import { ref } from 'vue'
  import { Autoplay } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/autoplay'

  const swiperReady = ref(false)

  const onSwiper = () => {
    setTimeout(() => {
      swiperReady.value = true
    }, 100)
  }

  const partners = [
    { name: 'Appian', logo: 'appian' },
    { name: 'Pega', logo: 'pega' },
    { name: 'OutSystems', logo: 'outsystems' },
    { name: 'Appian', logo: 'appian-2' },
    { name: 'Pega', logo: 'pega-2' },
    { name: 'OutSystems', logo: 'outsystems-2' },
  ]
</script>

<template>
  <section
    class="relative z-20 w-full py-8 md:pt-12 bg-black/30 backdrop-blur-md border-t border-black/50"
  >
    <div class="fluid-container">
      <p
        class="text-center text-white/80 text-xs md:text-sm font-medium uppercase tracking-wider mb-6 md:mb-8"
      >
        Trusted partnerships
      </p>

      <Swiper
        :modules="[Autoplay]"
        :slides-per-view="2.5"
        :space-between="20"
        :centered-slides="true"
        :loop="true"
        :allow-touch-move="false"
        :simulate-touch="false"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
        }"
        :speed="3000"
        :breakpoints="{
          768: { slidesPerView: 3, spaceBetween: 40 },
          1024: { slidesPerView: 4, spaceBetween: 48 },
        }"
        class="w-full partners-swiper transition-opacity duration-700 ease-out"
        :class="swiperReady ? 'opacity-100' : 'opacity-0'"
        @swiper="onSwiper"
      >
        <SwiperSlide v-for="partner in partners" :key="partner.logo">
          <div class="flex items-center justify-center h-12 md:h-16 opacity-60">
            <div class="flex items-center gap-2">
              <div
                class="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/20 flex items-center justify-center"
              >
                <span class="text-white font-heading font-bold text-xs md:text-sm">
                  {{ partner.name.charAt(0) }}
                </span>
              </div>
              <span class="text-white font-semibold text-sm md:text-lg">{{ partner.name }}</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
  :deep(.swiper-wrapper) {
    align-items: center;
    transition-timing-function: linear !important;
  }
</style>
