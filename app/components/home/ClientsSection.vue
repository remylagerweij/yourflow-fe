<script setup lang="ts">
  // Placeholder client logos - replace with actual client logos
  const clients = ['Achmea', 'RijksZaak', 'Kiwa', 'IND', 'Belastingdienst', 'CJIB']
</script>

<template>
  <section class="py-20 lg:py-28 bg-white">
    <div class="fluid-container">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="section-title mb-4">Onze <span class="text-gradient">klanten</span></h2>
        <p class="section-subtitle mx-auto">
          We zijn trots met onze grote diversiteit aan klanten in onze klantportfolio
        </p>
      </div>

      <!-- Logo Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        <div
          v-for="client in clients"
          :key="client"
          class="group relative flex items-center justify-center h-20 transition-all duration-300"
        >
          <!-- Placeholder - replace with actual client logos -->
          <span
            class="font-heading font-bold text-xl text-yf-navy/30 group-hover:text-yf-blue group-hover:scale-110 transition-all duration-300 cursor-default"
          >
            {{ client }}
          </span>

          <!-- Subtle Glow on Hover -->
          <div
            class="absolute inset-0 bg-yf-blue/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
