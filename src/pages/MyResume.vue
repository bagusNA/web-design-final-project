<script setup lang="ts">
import router from '@/router'

import { useResume } from '@/composables/useResume.ts'
import { formatDate } from '@/utils/date.ts'

import placeholder from '@/assets/images/placeholder.png'

export interface SavedResume {
  date: Date
  thumbnail: string
}

const { resumes, createResume } = useResume()

function newResume() {
  const resume = createResume()

  router.push({ name: 'app.editor', params: { id: resume.id } })
}
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 py-12 md:py-18">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">My Resume</h1>
    <p>Continue building your resume.</p>
  </section>

  <section
    class="grid gap-6 px-4 pb-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto"
  >
    <RouterLink
      v-for="(resume, index) in resumes"
      :key="index"
      :to="{ name: 'app.editor', params: { id: resume.id } }"
    >
      <div class="transition hover:brightness-80 active:brightness-70">
        <img
          :src="placeholder"
          alt="Thumbnail"
          class="w-full h-100 object-cover rounded-lg border border-neutral-300 dark:border-neutral-800 shadow-2xl mb-4"
        />
        <p class="text-sm text-gray-600 dark:text-gray-300 font-medium">
          {{ resume.title }}
        </p>
        <div class="text-xs text-gray-500 dark:text-gray-400 font-light">
          {{ formatDate(resume.createdAt) }}
        </div>
      </div>
    </RouterLink>

    <div class="transition hover:brightness-80 active:brightness-70 space-y-4 flex flex-col">
      <button
        @click="newResume"
        type="button"
        class="w-full h-100 flex flex-col justify-center items-center border-2 border-dashed border-primary-300 dark:border-primary-600 rounded-2xl p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        <span class="text-4xl text-primary-500 dark:text-primary-400">+</span>
      </button>

      <p class="text-start text-sm text-gray-600 dark:text-gray-300 font-medium">
        Create new resume
      </p>
    </div>
  </section>
</template>
