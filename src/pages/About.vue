<script setup lang="ts">
import { ref } from 'vue'

import placeholder from '@/assets/images/placeholder.png'
import Badge from '@/components/atoms/Badge.vue'
import Strongpoints, { type StrongpointItem } from '@/components/organisms/Strongpoints.vue'

const skills = ref<StrongpointItem[]>([
  {
    title: 'Ngoding',
    text: 'Ngoding is my passion',
    icon: 'iconify lucide--rocket text-yellow-400',
  },
  {
    title: 'Ngoding',
    text: 'Ngoding is my passion',
    icon: 'iconify lucide--rocket text-yellow-400',
  },
  {
    title: 'Ngoding',
    text: 'Ngoding is my passion',
    icon: 'iconify lucide--rocket text-yellow-400',
  },
])
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 py-12 md:py-18">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12">
      <div class="space-y-4">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
          Bagus Nur Andiansyah
        </h1>
        <div class="flex flex-col md:flex-row flex-wrap gap-y-1 gap-x-2 items-start justify-start">
          <Badge>11231015</Badge>
          <Badge>Informatika</Badge>
          <Badge>Institut Teknologi Kalimantan</Badge>
        </div>

        <p>
          Lorem ipsum sit dolor ameLorem ipsum sit dolor ameLorem ipsum sit dolor ameLorem ipsum sit
          dolor ameLorem ipsum sit dolor ameLorem ipsum sit dolor ameLorem ipsum sit dolor ameLorem
          ipsum sit dolor ameLorem ipsum sit dolor ameLorem ipsum sit dolor ameLorem ipsum sit dolor
          ameLorem ipsum sit dolor ameLorem ipsum sit dolor ameLorem ipsum sit dolor
          amettttttttttttttLorem ipsum sit dolor amet
        </p>
      </div>

      <img :src="placeholder" alt="Profile Image" class="hidden md:block rounded-lg shadow" />
    </div>
  </section>

  <Strongpoints :items="skills" class="mb-8" />
</template>
