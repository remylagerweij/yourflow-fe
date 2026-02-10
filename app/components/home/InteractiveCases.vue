<script setup lang="ts">
  import { ref } from 'vue'
  import { Autoplay, Pagination, Mousewheel } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/autoplay'
  import 'swiper/css/pagination'

  const cases = [
    {
      id: 1,
      title: 'Digitale Transformatie',
      client: 'Achmea',
      description: 'Van handmatig naar volledig digitaal polismutaties verwerken.',
      tags: ['Pega', 'Automation'],
      color: 'from-blue-500 to-cyan-400',
      image: '/images/cases/achmea.png',
    },
    {
      id: 2,
      title: 'Overheids Innovatie',
      client: 'RijksZaak',
      description: 'Klantapplicaties naar een hoger niveau tillen met slimme software.',
      tags: ['Government', 'Innovation'],
      color: 'from-purple-500 to-pink-500',
      image: '/images/cases/rijkszaak.png',
    },
    {
      id: 3,
      title: 'Vergunningen Platform',
      client: 'Kiwa Register',
      description: 'Snelle en accurate vergunningverlening met het Appian platform.',
      tags: ['Appian', 'Low-code'],
      color: 'from-amber-400 to-orange-500',
      image: '/images/cases/kiwa.png',
    },
    {
      id: 4,
      title: 'Stad van de Toekomst',
      client: 'Gemeente Amsterdam',
      description: 'Slimme sensoren en data-analyse voor een leefbare en duurzame stad.',
      tags: ['Smart City', 'IoT'],
      color: 'from-emerald-400 to-teal-500',
      image: '/images/cases/amsterdam.png',
    },
    {
      id: 5,
      title: 'FinTech Integratie',
      client: 'Adyen',
      description: 'Naadloze betaaloplossingen implementeren voor wereldwijde platforms.',
      tags: ['FinTech', 'API'],
      color: 'from-indigo-500 to-violet-500',
      image: '/images/cases/adyen.png',
    },
    {
      id: 6,
      title: 'Slimme Logistiek',
      client: 'PostNL',
      description: 'AI-gestuurde optimalisatie van pakketroutes en bezorging.',
      tags: ['Logistics', 'AI'],
      color: 'from-orange-500 to-red-500',
      image: '/images/cases/postnl.png',
    },
  ]

  const swiperInstance = ref<any>(null)

  // Function to slide to a specific index when a card is clicked
  const slideTo = (index: number) => {
    if (swiperInstance.value) {
      swiperInstance.value.slideTo(index)
    }
  }

  const onSwiper = (swiper: any) => {
    swiperInstance.value = swiper
  }
</script>

<template>
  <div class="cases-carousel relative w-full mx-auto animate-fade-in-up">
    <!-- Swiper Vertical Carousel -->
    <div class="relative">
      <Swiper
        :modules="[Autoplay, Pagination, Mousewheel]"
        direction="vertical"
        :slides-per-view="2"
        :centered-slides="true"
        :space-between="16"
        :rewind="true"
        :speed="600"
        :initial-slide="2"
        :mousewheel="{ forceToAxis: true }"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :pagination="{
          el: '.cases-pagination',
          clickable: true,
        }"
        class="cases-swiper"
        @swiper="onSwiper"
      >
        <SwiperSlide v-for="(item, index) in cases" :key="item.id" v-slot="{ isActive }">
          <div
            class="glass-card h-full w-full rounded-2xl flex flex-row overflow-hidden group cursor-pointer transition-all duration-500"
            :class="isActive ? 'glass-card--active' : 'glass-card--inactive'"
            @click="slideTo(index)"
          >
            <!-- Left Column: Thumbnail -->
            <div class="w-2/5 relative aspect-video shrink-0">
              <img
                :src="item.image"
                :alt="item.client"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>

            <!-- Right Column: Content -->
            <div class="w-2/3 flex flex-col justify-between p-5 pl-4">
              <!-- Top Row: Logo + Title -->
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <span
                    class="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider bg-gradient-to-r shadow-sm whitespace-nowrap"
                    :class="item.color"
                  >
                    {{ item.client }}
                  </span>
                </div>
                <h3
                  class="text-base font-heading font-bold text-white group-hover:text-yf-blue transition-colors duration-300 line-clamp-1"
                >
                  {{ item.title }}
                </h3>
                <p class="text-white/60 text-xs leading-relaxed line-clamp-2 mt-1">
                  {{ item.description }}
                </p>
              </div>

              <!-- Bottom Row: Tags -->
              <div class="mt-3 flex flex-wrap gap-1.5">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/70 whitespace-nowrap"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- Vertical Pagination - Right side -->
    <div class="cases-pagination" />
  </div>
</template>

<style scoped>
  .cases-swiper {
    height: 550px;
    overflow: hidden;
    mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      black 20%,
      black 80%,
      transparent 100%
    );
  }

  :deep(.swiper-slide) {
    transition:
      opacity 0.5s ease,
      filter 0.5s ease;
  }

  :deep(.swiper-slide:not(.swiper-slide-active)) {
    opacity: 0.35;
    filter: blur(1px);
  }

  :deep(.swiper-slide-active) {
    opacity: 1;
    filter: blur(0);
  }

  /* Glass card base */
  .glass-card {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.1),
      0 4px 8px rgba(0, 0, 0, 0.08);
  }

  .glass-card:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.16);
  }

  .glass-card--active {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.14);
    box-shadow:
      0 4px 16px rgba(56, 189, 248, 0.1),
      0 16px 48px rgba(56, 189, 248, 0.08);
  }

  .glass-card--inactive {
    background: rgba(255, 255, 255, 0.03);
  }

  /* Vertical pagination – right side */
  .cases-pagination {
    position: absolute;
    right: -24px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 30;
  }

  :deep(.cases-pagination .swiper-pagination-bullet) {
    width: 6px;
    height: 6px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 9999px;
    transition: all 0.3s ease;
    opacity: 1;
  }

  :deep(.cases-pagination .swiper-pagination-bullet-active) {
    background: white;
    height: 24px;
  }

  /* Entrance animation */
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out both;
    animation-delay: 0.3s;
  }
</style>
