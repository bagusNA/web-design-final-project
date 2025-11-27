<script setup lang="ts">
import { ref } from 'vue'

import { formatDate } from '@/utils/date.ts'
import placeholder from '@/assets/images/placeholder.png'

export interface SavedResume {
  date: Date
  thumbnail: string
}

const cards = ref<SavedResume[]>([
  {
    date: new Date(),
    thumbnail: placeholder,
  },
  {
    date: new Date(),
    thumbnail: placeholder,
  },
  {
    date: new Date(),
    thumbnail: placeholder,
  },
  {
    date: new Date(),
    thumbnail: placeholder,
  },
  {
    date: new Date(),
    thumbnail: placeholder,
  },
])
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 py-12 md:py-18">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">My Resume</h1>
    <p>Continue building your resume.</p>
  </section>

  <section
    class="grid gap-6 px-4 pb-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto"
  >
    <RouterLink v-for="(card, index) in cards" :key="index" :to="{ name: 'app.editor' }">
      <div class="transition hover:brightness-80 active:brightness-70">
        <img
          v-if="card.thumbnail"
          :src="card.thumbnail"
          alt="Thumbnail"
          class="w-full h-80 object-cover rounded-lg border border-neutral-300 shadow-2xl mb-4"
        />
        <p class="text-sm text-gray-600 dark:text-gray-300 font-medium">
          {{ formatDate(card.date) }}
        </p>
      </div>
    </RouterLink>

    <RouterLink :to="{ name: 'app.editor' }">
      <div class="transition hover:brightness-80 active:brightness-70">
        <div class="space-y-4">
          <div
            class="w-full h-80 flex flex-col justify-center items-center border-2 border-dashed border-primary-300 dark:border-primary-600 rounded-2xl p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <span class="text-4xl text-primary-500 dark:text-primary-400">+</span>
          </div>

          <p class="text-sm text-gray-600 dark:text-gray-300 font-medium">Create new resume</p>
        </div>
      </div>
    </RouterLink>
  </section>
</template>
