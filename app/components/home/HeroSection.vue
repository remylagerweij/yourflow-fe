<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'
  import PartnersSection from './PartnersSection.vue'
  import InteractiveCases from './InteractiveCases.vue'

  const heroTitleLine1 = ref<HTMLElement>()
  const heroTitleLine2 = ref<HTMLElement>()
  const heroDescription = ref<HTMLElement>()
  const heroCta = ref<HTMLElement>()
  const heroCarousel = ref<HTMLElement>()
  const heroScrollArrow = ref<HTMLElement>()

  // Track whether carousel is ready (may fire before onMounted)
  let carouselIsReady = false
  let heroTimeline: gsap.core.Timeline | null = null

  const onCarouselReady = () => {
    carouselIsReady = true
    // If timeline is already built, play it
    heroTimeline?.play()
  }

  onMounted(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' }, delay: 0.15, paused: true })

    // 1. Title lines — gentle clip reveal from left
    tl.fromTo(
      heroTitleLine1.value!,
      { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
      { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1.2 }
    )
    tl.fromTo(
      heroTitleLine2.value!,
      { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
      { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1.5 },
      '-=0.4'
    )

    // 2. Description — soft fade up
    tl.fromTo(
      heroDescription.value!,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5 },
      '-=1'
    )

    // 3. CTA button — gentle fade up with slight delay
    tl.fromTo(heroCta.value!, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=1.2')

    // 4. Carousel — GPU-accelerated fade + slide (will-change on wrapper avoids Swiper conflicts)
    tl.fromTo(
      heroCarousel.value!,
      { y: 16, opacity: 0, force3D: true },
      { y: 0, opacity: 1, duration: 1.8, force3D: true },
      '-=1'
    )

    // 5. Scroll arrow — subtle appearance
    if (heroScrollArrow.value) {
      tl.fromTo(
        heroScrollArrow.value,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0 },
        '-=1.2'
      )
    }

    heroTimeline = tl

    // If carousel already signaled ready before we mounted, play now
    if (carouselIsReady) {
      tl.play()
    }
  })

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('services')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
</script>

<template>
  <section
    class="relative lg:h-screen lg:max-h-screen flex flex-col items-center overflow-hidden justify-between pt-24 lg:pt-0"
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

    <div
      class="fluid-container flex-grow items-center flex relative z-10 w-full py-8 sm:py-12 lg:py-0"
    >
      <!-- Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-14 lg:gap-20 items-center w-full">
        <!-- Left Column: Content -->
        <div class="text-left relative z-30">
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-5 sm:mb-6"
          >
            <span ref="heroTitleLine1" class="inline-block pb-2 opacity-0">Wij zijn</span>
            <span ref="heroTitleLine2" class="text-gradient block pb-2 opacity-0">YourFlow</span>
          </h1>
          <p
            ref="heroDescription"
            class="text-base sm:text-xl text-white/70 max-w-xl mb-8 sm:mb-8 leading-relaxed opacity-0"
          >
            Wij realiseren softwareoplossingen waarmee u klanten sneller, beter en tegen lagere
            kosten bedient. Met slimme procesinnovatie en automatische procesuitvoering.
          </p>
          <div ref="heroCta" class="flex flex-col sm:flex-row gap-4 opacity-0">
            <UiAppButton href="#services">
              Onze diensten
              <template #icon>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </template>
            </UiAppButton>
          </div>
        </div>

        <!-- Right Column: Interactive Cases -->
        <div
          ref="heroCarousel"
          class="relative z-20 lg:col-span-2 opacity-0"
          style="will-change: transform, opacity"
        >
          <InteractiveCases @ready="onCarouselReady" />
        </div>
      </div>
      <!-- Scroll indicator - interactive -->
      <div
        ref="heroScrollArrow"
        class="absolute bottom-8 left-0 right-0 hidden lg:flex justify-center z-10 opacity-0"
      >
        <UiArrowButton
          direction="down"
          variant="ghost"
          aria-label="Scroll to next section"
          @click="scrollToNextSection"
        />
      </div>
    </div>

    <PartnersSection />
  </section>
</template>
