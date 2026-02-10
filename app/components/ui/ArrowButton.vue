<script setup lang="ts">
  type Direction = 'up' | 'down' | 'left' | 'right'
  type Size = 'sm' | 'md' | 'lg'
  type Variant = 'ghost' | 'glass'

  interface Props {
    direction?: Direction
    size?: Size
    variant?: Variant
    ariaLabel?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    direction: 'down',
    size: 'md',
    variant: 'ghost',
  })

  defineEmits<{ (e: 'click', event: MouseEvent): void }>()

  // SVG path data for each direction
  const pathData: Record<Direction, string> = {
    down: 'M19 14l-7 7m0 0l-7-7m7 7V3',
    up: 'M5 10l7-7m0 0l7 7m-7-7v18',
    left: 'M15 19l-7-7 7-7',
    right: 'M9 5l7 7-7 7',
  }

  // Hover translate direction for subtle motion feedback
  const hoverTranslate: Record<Direction, string> = {
    down: 'group-hover:translate-y-0.5',
    up: 'group-hover:-translate-y-0.5',
    left: 'group-hover:-translate-x-0.5',
    right: 'group-hover:translate-x-0.5',
  }

  // Size classes
  const sizeClasses: Record<Size, { button: string; icon: string }> = {
    sm: { button: 'w-10 h-10 p-2.5', icon: 'w-4 h-4' },
    md: { button: 'w-12 h-12 p-3', icon: 'w-5 h-5' },
    lg: { button: 'w-14 h-14 p-4', icon: 'w-6 h-6' },
  }

  // Shadow classes for ghost variant based on direction
  const shadowClasses: Record<Direction, string> = {
    down: 'hover:shadow-[0_8px_25px_rgba(19,153,250,0.4),0_16px_40px_rgba(253,71,246,0.2)]',
    up: 'hover:shadow-[0_-8px_25px_rgba(19,153,250,0.4),0_-16px_40px_rgba(253,71,246,0.2)]',
    right: 'hover:shadow-[8px_0_25px_rgba(19,153,250,0.4),16px_0_40px_rgba(253,71,246,0.2)]',
    left: 'hover:shadow-[-8px_0_25px_rgba(19,153,250,0.4),-16px_0_40px_rgba(253,71,246,0.2)]',
  }

  // Variant classes
  const variantClasses: Record<Variant, string> = {
    ghost: 'border border-white/20 text-white/50 hover:text-white hover:border-yf-blue/50',
    glass:
      'bg-white/5 border border-white/10 text-white hover:bg-yf-blue/20 hover:border-yf-blue/50 hover:text-yf-blue',
  }
</script>

<template>
  <button
    class="group flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yf-blue/50"
    :class="[
      sizeClasses[size].button,
      variantClasses[variant],
      variant === 'ghost' ? shadowClasses[direction] : '',
    ]"
    :aria-label="ariaLabel"
    @click="$emit('click', $event)"
  >
    <svg
      :class="[sizeClasses[size].icon, hoverTranslate[direction]]"
      class="transition-transform duration-200"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        :d="pathData[direction]"
      />
    </svg>
  </button>
</template>
