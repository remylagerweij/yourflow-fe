<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router'

  type Variant = 'primary' | 'secondary' | 'outline' | 'error' | 'warning' | 'info' | 'success'
  type Size = 'sm' | 'md' | 'lg'
  type IconPosition = 'left' | 'right'

  interface Props {
    variant?: Variant
    size?: Size
    to?: RouteLocationRaw
    href?: string
    disabled?: boolean
    loading?: boolean
    block?: boolean
    iconPosition?: IconPosition
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    iconPosition: 'right',
  })

  const is = computed(() => {
    if (props.to) return resolveComponent('NuxtLink')
    if (props.href) return 'a'
    return 'button'
  })

  const linkProps = computed(() => {
    if (props.to) return { to: props.to }
    if (props.href) return { href: props.href }
    return {}
  })

  // Base classes shared by all variants
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden group'

  // Size classes
  const sizeClasses: Record<Size, string> = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  }

  // Variant classes
  const variantClasses: Record<Variant, string> = {
    primary:
      'bg-yf-blue text-white hover:bg-yf-pink hover:shadow-lg hover:shadow-yf-pink/25 focus:ring-yf-blue',
    secondary:
      'bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 hover:border-white/40 focus:ring-white/50',
    outline:
      'border-2 border-yf-blue text-yf-blue hover:bg-yf-blue hover:text-white focus:ring-yf-blue',
    error:
      'bg-red-500 text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/25 focus:ring-red-500',
    warning:
      'bg-amber-500 text-white hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/25 focus:ring-amber-500',
    info: 'bg-sky-500 text-white hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/25 focus:ring-sky-500',
    success:
      'bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25 focus:ring-emerald-500',
  }

  const classes = computed(() => [
    baseClasses,
    sizeClasses[props.size ?? 'md'],
    variantClasses[props.variant ?? 'primary'],
    props.block ? 'w-full' : '',
    props.disabled ? 'opacity-50 pointer-events-none' : '',
  ])
</script>

<template>
  <component :is="is" v-bind="linkProps" :class="classes" :disabled="disabled">
    <!-- Icon left -->
    <span v-if="$slots.icon && iconPosition === 'left'" class="shrink-0">
      <slot name="icon" />
    </span>

    <!-- Label -->
    <span class="relative z-10">
      <slot />
    </span>

    <!-- Icon right -->
    <span
      v-if="$slots.icon && iconPosition === 'right'"
      class="shrink-0 group-hover:translate-x-0.5 transition-transform duration-200"
    >
      <slot name="icon" />
    </span>

    <!-- Shimmer effect on hover -->
    <div
      class="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0"
    />
  </component>
</template>
