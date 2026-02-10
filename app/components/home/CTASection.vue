<template>
  <section id="about" class="relative py-20 lg:py-28 overflow-hidden">
    <!-- Animated Gradient Background -->
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
      <div class="max-w-4xl mx-auto text-center">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 drop-shadow-lg"
        >
          Klaar om uw digitale transformatie te
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-yf-blue to-yf-pink"
            >versnellen</span
          >?
        </h2>
        <p
          class="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
        >
          Neem vandaag nog contact met ons op en ontdek hoe YourFlow uw organisatie kan helpen om
          sneller, beter en efficiënter te werken.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <UiAppButton href="#contact" size="lg">
            Contact opnemen
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

          <UiAppButton
            href="mailto:info@yourflow.eu"
            variant="secondary"
            size="lg"
            icon-position="left"
          >
            <template #icon>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </template>
            info@yourflow.eu
          </UiAppButton>
        </div>
      </div>
    </div>
  </section>
</template>
