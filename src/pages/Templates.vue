<script setup lang="ts">
import { ref } from 'vue'
import placeholder from '@/assets/images/placeholder.png'

export interface ResumeTemplate {
  name: string
  description: string
  thumbnail: string
}

const templates = ref<ResumeTemplate[]>([
  {
    name: 'Simple Template',
    description: "For those that don't want anything fancy.",
    thumbnail: placeholder,
  },
  {
    name: 'Simple Template',
    description: "For those that don't want anything fancy.",
    thumbnail: placeholder,
  },
  {
    name: 'Simple Template',
    description: "For those that don't want anything fancy.",
    thumbnail: placeholder,
  },
  {
    name: 'Simple Template',
    description: "For those that don't want anything fancy.",
    thumbnail: placeholder,
  },
  {
    name: 'Simple Template',
    description: "For those that don't want anything fancy.",
    thumbnail: placeholder,
  },
  {
    name: 'Simple Template',
    description: "For those that don't want anything fancy.",
    thumbnail: placeholder,
  },
  {
    name: 'Simple Template',
    description: "For those that don't want anything fancy.",
    thumbnail: placeholder,
  },
])
</script>

<template>
  <main class="max-w-7xl mx-auto px-4">
    <div class="columns-1 sm:columns-2 space-y-12 gap-16 py-18">
      <div class="py-12 md:py-24">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Templates</h1>
        <p class="text-sm md:text-base">Quick start your resume with these following templates. More coming soon!</p>
      </div>

      <div
        v-for="(item, i) in templates"
        :key="i"
        class="inline-block w-full"
        :class="{ 'md:mt-12': i % 3 === 1 && i !== 1 }"
      >
        <img
          :src="item.thumbnail"
          :alt="item.name"
          class="aspect-10/14 object-cover w-full rounded-lg shadow-2xl mb-4"
        >

        <div>
          <div class="font-medium md:text-xl mb-1">{{ item.name }}</div>
          <div class="text-sm md:text-base">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </main>
</template>
