<script setup lang="ts">
  import { ref, computed } from 'vue'

  const cases = [
    {
      id: 1,
      title: 'Digitale Transformatie',
      client: 'Achmea',
      description: 'Van handmatig naar volledig digitaal polismutaties verwerken.',
      tags: ['Pega', 'Automation'],
      color: 'from-blue-500 to-cyan-400',
    },
    {
      id: 2,
      title: 'Overheids Innovatie',
      client: 'RijksZaak',
      description: 'Klantapplicaties naar een hoger niveau tillen met slimme software.',
      tags: ['Government', 'Innovation'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Vergunningen Platform',
      client: 'Kiwa Register',
      description: 'Snelle en accurate vergunningverlening met het Appian platform.',
      tags: ['Appian', 'Low-code'],
      color: 'from-amber-400 to-orange-500',
    },
  ]

  // Duplicate cases for seamless infinite scroll
  const marqueeCases = computed(() => [...cases, ...cases])

  const isPaused = ref(false)
</script>

<template>
  <div
    class="w-full max-w-md mx-auto h-full overflow-hidden flex flex-col justify-center"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
  >
    <!-- Top & Bottom Fade Masks -->
    <div
      class="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0B3B59] to-transparent z-10 pointer-events-none"
    />
    <div
      class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B3B59] to-transparent z-10 pointer-events-none"
    />

    <!-- Animated Marquee Container -->
    <div
      class="flex flex-col gap-6 animate-marquee-vertical"
      :style="{ animationPlayState: isPaused ? 'paused' : 'running' }"
    >
      <div v-for="(item, index) in marqueeCases" :key="`${item.id}-${index}`" class="flex-shrink-0">
        <!-- Glass Card -->
        <div
          class="rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20 group cursor-pointer"
        >
          <!-- Logo Placeholder (White) -->
          <div class="mb-4 pb-4 border-b border-white/10 flex items-center justify-between">
            <span
              class="font-heading font-black text-xl text-white tracking-wide uppercase opacity-90 group-hover:opacity-100 transition-opacity"
            >
              {{ item.client }}
            </span>
            <div class="flex gap-1 opacity-50">
              <div class="w-1 h-1 rounded-full bg-white/60" />
              <div class="w-1 h-1 rounded-full bg-white/40" />
            </div>
          </div>

          <h3
            class="text-2xl font-heading font-bold text-white mb-2 group-hover:text-yf-blue transition-colors"
          >
            {{ item.title }}
          </h3>

          <p class="text-white/70 leading-relaxed text-sm mb-4 line-clamp-3">
            {{ item.description }}
          </p>

          <div class="flex items-center justify-between">
            <div class="flex gap-2">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="px-2 py-0.5 bg-white/5 rounded text-[10px] font-medium text-white/50 border border-white/5"
              >
                {{ tag }}
              </span>
            </div>

            <span class="text-white/40 group-hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @keyframes marquee-vertical {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }

  .animate-marquee-vertical {
    animation: marquee-vertical 20s linear infinite;
  }
</style>
