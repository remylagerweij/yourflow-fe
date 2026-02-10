<script setup lang="ts">
  const testimonials = [
    {
      quote:
        'De consultants hebben het verschil gemaakt bij het waarmaken van onze ambitieuze digitale roadmap: van handmatig naar digitaal polismutaties verwerken. We kunnen onze klantwensen nu sneller en beter doorvoeren!',
      author: 'Kees Veenhof',
      role: 'destijds opdrachtgever en senior manager',
      company: 'Achmea',
    },
    {
      quote:
        'YourFlow levert ons Pega Business Architecten. Ze hebben echt verstand van zaken. Ze brengen met hun grondige kennis van de Pega software en de overheidsmarkt de klantapplicaties van RijksZaak op een hoger niveau!',
      author: 'Harry van der Haar',
      role: 'voormalig MT lid',
      company: 'RijksZaak',
    },
    {
      quote:
        'De consultants zijn kritisch op hoe we ons werk doen, dagen ons uit waar dit beter kan en regelen dat dit goed gebouwd wordt in het Appian platform. In een paar maanden tijd werken we met Appian en leveren we de vergunningen van onze eerste productgroep snel en goed uit!',
      author: 'Niek Schut',
      role: 'opdrachtgever en manager',
      company: 'Kiwa Register',
    },
    {
      quote:
        'We hebben voor YourFlow gekozen als onze leverancier van ons nieuwe EPD. Ze kwamen met mooie verbetersuggesties en leveren ons een krachtig en AVG-proof EPD.',
      author: 'Directeur',
      role: 'bij één van de leidende paramedische ketens',
      company: '',
    },
  ]

  const activeIndex = ref(0)

  const nextTestimonial = () => {
    activeIndex.value = (activeIndex.value + 1) % testimonials.length
  }

  const prevTestimonial = () => {
    activeIndex.value = (activeIndex.value - 1 + testimonials.length) % testimonials.length
  }

  const activeTestimonial = computed(() => {
    return testimonials[activeIndex.value] || testimonials[0]
  })

  // Auto-advance every 5 seconds
  let interval: ReturnType<typeof setInterval>

  onMounted(() => {
    interval = setInterval(nextTestimonial, 6000)
  })

  onUnmounted(() => {
    clearInterval(interval)
  })
</script>

<template>
  <section id="testimonials" class="relative py-20 lg:py-28 bg-yf-navy overflow-hidden">
    <!-- Noise Texture Overlay -->
    <UiBackgroundGradientAnimation
      gradient-background-start="rgb(8, 37, 54)"
      gradient-background-end="rgb(13, 51, 72)"
      first-color="19, 153, 250"
      second-color="253, 71, 246"
      third-color="100, 180, 255"
      fourth-color="253, 71, 246"
      fifth-color="19, 153, 250"
      pointer-color="253, 71, 246"
      size="60%"
      :interactive="true"
      container-class="absolute inset-0 -z-10"
    />
    <div class="fluid-container relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
          Wat klanten <span class="text-gradient">zeggen</span>
        </h2>
        <p class="text-lg text-white/70 max-w-2xl mx-auto">
          Ontdek waarom toonaangevende organisaties kiezen voor YourFlow
        </p>
      </div>

      <!-- Testimonial Carousel -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Background Glow -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-yf-blue/20 to-yf-pink/20 blur-3xl opacity-30 rounded-full transform scale-90"
        />

        <!-- Quote -->
        <div
          class="relative bg-black/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-black/40 shadow-2xl"
        >
          <svg class="w-16 h-16 text-yf-blue/50 mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
            />
          </svg>

          <Transition name="fade" mode="out-in">
            <div :key="activeIndex" v-if="activeTestimonial">
              <blockquote
                class="text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-tight mb-10 font-heading"
              >
                "{{ activeTestimonial.quote }}"
              </blockquote>

              <div class="flex items-center gap-5">
                <div
                  class="w-14 h-14 rounded-full bg-gradient-to-br from-yf-blue to-yf-pink flex items-center justify-center shadow-lg shadow-yf-blue/20"
                >
                  <span class="text-white font-heading font-bold text-xl">
                    {{ activeTestimonial.author.charAt(0) }}
                  </span>
                </div>
                <div>
                  <div class="font-bold text-white text-lg">
                    {{ activeTestimonial.author }}
                  </div>
                  <div class="text-white/70">
                    {{ activeTestimonial.role }}
                    <span v-if="activeTestimonial.company" class="text-yf-blue font-medium">
                      @ {{ activeTestimonial.company }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Navigation -->
        <div class="flex items-center justify-center gap-6 mt-10">
          <UiArrowButton
            direction="left"
            variant="ghost"
            size="lg"
            aria-label="Previous testimonial"
            @click="prevTestimonial"
          />

          <!-- Dots -->
          <div class="flex gap-3">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              class="h-2 rounded-full transition-all duration-300 cursor-pointer"
              :class="
                index === activeIndex ? 'bg-yf-blue w-8' : 'bg-white/20 w-2 hover:bg-white/40'
              "
              :aria-label="`Go to testimonial ${index + 1}`"
              @click="activeIndex = index"
            />
          </div>

          <UiArrowButton
            direction="right"
            variant="ghost"
            size="lg"
            aria-label="Next testimonial"
            @click="nextTestimonial"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
