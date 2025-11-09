<script setup lang="ts">
export interface HeroSectionProps {
  title: string
  subtitle?: string | null
  imageUrl?: string | null
}

defineProps<HeroSectionProps>()
</script>

<template>
  <section
    class="grid grid-cols-1 sm:grid-cols-2 items-center gap-y-12 gap-x-8 sm:flex-row"
  >
    <div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{{ title }}</h1>
      <p v-if="subtitle"
         class="mb-4"
      >{{ subtitle }}</p>

      <slot/>
    </div>

    <div>
      <img
        src="@/assets/images/placeholder.png"
        alt="App Preview"
        class="h-full w-auto aspect-auto object-cover"
      >
    </div>
  </section>
</template>
