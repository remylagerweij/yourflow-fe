<script setup lang="ts">
  import { cn } from '~/lib/utils'

  interface Props {
    gradientBackgroundStart?: string
    gradientBackgroundEnd?: string
    firstColor?: string
    secondColor?: string
    thirdColor?: string
    fourthColor?: string
    fifthColor?: string
    pointerColor?: string
    size?: string
    blendingValue?: string
    class?: string
    interactive?: boolean
    containerClass?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    gradientBackgroundStart: 'rgb(8, 37, 54)',
    gradientBackgroundEnd: 'rgb(13, 51, 72)',
    firstColor: '19, 153, 250',
    secondColor: '253, 71, 246',
    thirdColor: '100, 180, 255',
    fourthColor: '253, 71, 246',
    fifthColor: '19, 153, 250',
    pointerColor: '253, 71, 246',
    size: '80%',
    blendingValue: 'hard-light',
    interactive: true,
  })

  const isSafari = ref(false)
  const isClient = ref(false)
  const gradientReady = ref(false)

  // Interactive offset state - exposed for template binding
  const offsetX = ref(0)
  const offsetY = ref(0)

  // Internal tracking
  let targetX = 0
  let targetY = 0
  let currentX = 0
  let currentY = 0
  let animationFrameId: number | null = null

  onMounted(() => {
    isClient.value = true
    isSafari.value = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

    // Delay gradient reveal so blobs are positioned before appearing
    setTimeout(() => {
      gradientReady.value = true
    }, 200)

    if (props.interactive) {
      startAnimation()

      // Attach global mousemove listener since our component is behind content
      window.addEventListener('mousemove', handleWindowMove)
      window.addEventListener('touchmove', handleWindowTouch, { passive: true })
    }
  })

  onUnmounted(() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
    window.removeEventListener('mousemove', handleWindowMove)
    window.removeEventListener('touchmove', handleWindowTouch)
  })

  const startAnimation = () => {
    const animate = () => {
      // Smooth interpolation
      currentX += (targetX - currentX) * 0.1
      currentY += (targetY - currentY) * 0.1

      // Update reactive refs
      offsetX.value = currentX
      offsetY.value = currentY

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()
  }

  const handleWindowMove = (event: MouseEvent) => {
    // Use window dimensions for calculation
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    targetX = (event.clientX - centerX) * 0.5
    targetY = (event.clientY - centerY) * 0.5
  }

  const handleWindowTouch = (event: TouchEvent) => {
    if (!event.touches[0]) return

    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    targetX = (event.touches[0].clientX - centerX) * 0.5
    targetY = (event.touches[0].clientY - centerY) * 0.5
  }

  // Computed transforms for parallax effect
  const blob1Style = computed(() => ({
    width: props.size,
    height: props.size,
    top: `calc(50% - ${props.size} / 2)`,
    left: `calc(50% - ${props.size} / 2)`,
    mixBlendMode: props.blendingValue as any,
    background: `radial-gradient(circle at center, rgba(${props.firstColor}, 0.35) 0%, rgba(${props.firstColor}, 0) 50%)`,
    opacity: '0.6',
    transform: `translate(${offsetX.value * 0.25}px, ${offsetY.value * 0.25}px)`,
  }))

  const blob2Style = computed(() => ({
    width: props.size,
    height: props.size,
    top: `calc(50% - ${props.size} / 2)`,
    left: `calc(50% - ${props.size} / 2)`,
    mixBlendMode: props.blendingValue as any,
    background: `radial-gradient(circle at center, rgba(${props.secondColor}, 0.35) 0%, rgba(${props.secondColor}, 0) 50%)`,
    opacity: '0.5',
    transform: `translate(${offsetX.value * -0.2}px, ${offsetY.value * 0.3}px)`,
  }))

  const blob3Style = computed(() => ({
    width: props.size,
    height: props.size,
    top: `calc(50% - ${props.size} / 2)`,
    left: `calc(50% - ${props.size} / 2)`,
    mixBlendMode: props.blendingValue as any,
    background: `radial-gradient(circle at center, rgba(${props.thirdColor}, 0.35) 0%, rgba(${props.thirdColor}, 0) 50%)`,
    opacity: '0.5',
    transform: `translate(${offsetX.value * 0.3}px, ${offsetY.value * -0.25}px)`,
  }))

  const blob4Style = computed(() => ({
    width: props.size,
    height: props.size,
    top: `calc(50% - ${props.size} / 2)`,
    left: `calc(50% - ${props.size} / 2)`,
    mixBlendMode: props.blendingValue as any,
    background: `radial-gradient(circle at center, rgba(${props.fourthColor}, 0.3) 0%, rgba(${props.fourthColor}, 0) 50%)`,
    opacity: '0.4',
    transform: `translate(${offsetX.value * -0.28}px, ${offsetY.value * -0.22}px)`,
  }))

  const blob5Style = computed(() => ({
    width: props.size,
    height: props.size,
    top: `calc(50% - ${props.size} / 2)`,
    left: `calc(50% - ${props.size} / 2)`,
    mixBlendMode: props.blendingValue as any,
    background: `radial-gradient(circle at center, rgba(${props.fifthColor}, 0.35) 0%, rgba(${props.fifthColor}, 0) 50%)`,
    opacity: '0.5',
    transform: `translate(${offsetX.value * 0.22}px, ${offsetY.value * 0.28}px)`,
  }))

  const pointerStyle = computed(() => ({
    background: `radial-gradient(circle at center, rgba(${props.pointerColor}, 0.4) 0%, rgba(${props.pointerColor}, 0) 50%)`,
    mixBlendMode: props.blendingValue as any,
    width: '100%',
    height: '100%',
    top: '-50%',
    left: '-50%',
    opacity: '0.4',
    transform: `translate(${offsetX.value}px, ${offsetY.value}px)`,
  }))

  const backgroundStyle = computed(() => ({
    background: `linear-gradient(40deg, ${props.gradientBackgroundStart}, ${props.gradientBackgroundEnd})`,
  }))
</script>

<template>
  <div
    :class="cn('h-full w-full relative overflow-hidden', containerClass)"
    :style="backgroundStyle"
  >
    <!-- SVG Filter -->
    <svg class="hidden">
      <defs>
        <filter id="blurMe">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>

    <!-- Content slot -->
    <div :class="cn('relative z-10', props.class)">
      <slot />
    </div>

    <!-- Gradient animations - only render on client -->
    <div
      v-if="isClient"
      :class="[
        cn(
          'gradients-container absolute inset-0 h-full w-full pointer-events-none transition-opacity duration-1000 ease-out',
          isSafari ? 'blur-2xl' : '[filter:url(#blurMe)_blur(40px)]'
        ),
        gradientReady ? 'opacity-100' : 'opacity-0',
      ]"
    >
      <div class="absolute rounded-full blob-animate-1" :style="blob1Style" />
      <div class="absolute rounded-full blob-animate-2" :style="blob2Style" />
      <div class="absolute rounded-full blob-animate-3" :style="blob3Style" />
      <div class="absolute rounded-full blob-animate-4" :style="blob4Style" />
      <div class="absolute rounded-full blob-animate-5" :style="blob5Style" />
      <div v-if="interactive" class="absolute rounded-full" :style="pointerStyle" />
    </div>
  </div>
</template>

<style scoped>
  .blob-animate-1 {
    animation: moveVerticalFast 10s ease-in-out infinite;
    transform-origin: center center;
  }

  .blob-animate-2 {
    animation: moveInCircleFast 8s reverse infinite;
    transform-origin: calc(50% - 400px);
  }

  .blob-animate-3 {
    animation: moveInCircleFast 12s linear infinite;
    transform-origin: calc(50% + 400px);
  }

  .blob-animate-4 {
    animation: moveHorizontalFast 14s ease-in-out infinite;
    transform-origin: calc(50% - 200px);
  }

  .blob-animate-5 {
    animation: moveDiagonal 11s ease-in-out infinite;
    transform-origin: calc(50% - 800px) calc(50% + 800px);
  }

  @keyframes moveVerticalFast {
    0%,
    100% {
      transform: translateY(-30%) translateX(-10%);
    }
    25% {
      transform: translateY(20%) translateX(15%);
    }
    50% {
      transform: translateY(40%) translateX(-5%);
    }
    75% {
      transform: translateY(-10%) translateX(10%);
    }
  }

  @keyframes moveInCircleFast {
    0%,
    100% {
      transform: rotate(0deg) scale(1);
    }
    25% {
      transform: rotate(90deg) scale(1.1);
    }
    50% {
      transform: rotate(180deg) scale(1);
    }
    75% {
      transform: rotate(270deg) scale(0.9);
    }
  }

  @keyframes moveHorizontalFast {
    0%,
    100% {
      transform: translateX(-40%) translateY(0%);
    }
    25% {
      transform: translateX(20%) translateY(-20%);
    }
    50% {
      transform: translateX(40%) translateY(10%);
    }
    75% {
      transform: translateX(-10%) translateY(25%);
    }
  }

  @keyframes moveDiagonal {
    0%,
    100% {
      transform: translateX(-25%) translateY(-25%);
    }
    25% {
      transform: translateX(25%) translateY(-15%);
    }
    50% {
      transform: translateX(30%) translateY(25%);
    }
    75% {
      transform: translateX(-15%) translateY(30%);
    }
  }
</style>
