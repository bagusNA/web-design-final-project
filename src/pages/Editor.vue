<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useLocalStorage } from '@vueuse/core'
import { randomString } from '@/utils/string.ts'
import { EmploymentType } from '@/types/employment.ts'
import { parseWithDates } from '@/utils/parser.ts'

import Button from 'primevue/button'
import EditorBar, { type EditorData } from '@/components/organisms/EditorBar.vue'
import Preview from '@/components/organisms/Preview.vue'
import EditorTopRightOverlay from '@/components/organisms/EditorTopRightOverlay.vue'

const defaultData = ref<EditorData>({
  biodata: {
    profileImage: null,
    name: 'Your Name',
    email: 'youremail@example.com',
    phoneNumber: '+62 812-3456-7890',
    jobTitle: 'Web Developer',
    location: 'City, Country',
    description: 'Describe yourself briefly',
    website: 'yourwebsite.com',
    githubUsername: '/username',
    linkedinUsername: '/in/username',
    keySkills: [],
    languages: [],
  },
  educationData: {
    educations: [
      {
        id: randomString(),
        schoolName: 'Kalimantan Institute of Technology',
        degree: 'Undergraduate in Computer Science',
        startDate: new Date('2023-07'),
        endDate: null,
        location: 'Balikpapan, Indonesia',
        description: '',
      },
    ],
  },
  experienceData: {
    experiences: [
      {
        id: randomString(),
        jobTitle: 'Your Job Title',
        employer: 'Super Company',
        employmentType: EmploymentType.FullTime,
        startDate: new Date('2025-02'),
        endDate: null,
        description: ['Describe your responsibilities briefly.'],
      },
      {
        id: randomString(),
        jobTitle: 'Your Job Title',
        employer: 'Super Company',
        employmentType: EmploymentType.FullTime,
        startDate: new Date('2024-04'),
        endDate: new Date('2025-02'),
        description: ['Describe your responsibilities briefly.'],
      },
    ],
  },
  awardData: {
    awards: [
      {
        id: randomString(),
        award: 'Best Striker of All Time',
        issuer: 'NATO',
        date: new Date('2025-03'),
        description: 'Describe what the award was for.',
      }
    ]
  }
})

const editorData = useLocalStorage<EditorData>('editor-data', defaultData.value, {
  serializer: {
    // JSON.parse() does not handle date value so we use this instead
    read: (v) => v ? parseWithDates(v) : null,
    write: (v) => JSON.stringify(v),
  },
})
</script>

<template>
  <EditorBar v-model:editorData="editorData">
    <div class="flex flex-wrap gap-2">
      <RouterLink to="/app">
        <Button label="Home" icon="iconify lucide--home" />
      </RouterLink>
    </div>
  </EditorBar>

  <Preview :editorData="editorData" />

  <EditorTopRightOverlay/>
</template>
