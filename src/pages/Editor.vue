<script setup lang="ts">
import { ref } from 'vue'
import { randomString } from '@/utils/string.ts'
import { EmploymentType } from '@/types/employment.ts'

import EditorBar, { type EditorData } from '@/components/organisms/EditorBar.vue'
import Preview from '@/components/organisms/Preview.vue'

const editorData = ref<EditorData>({
  biodata: {
    name: '',
    email: '',
    phoneNumber: '',
  },
  educationData: {
    educations: [
      {
        id: randomString(),
        schoolName: '',
        degree: '',
        startDate: null,
        endDate: null,
        location: '',
        description: '',
      }
    ],
  },
  experienceData: {
    experiences: [
      {
        id: randomString(),
        jobTitle: '',
        employer: '',
        employmentType: EmploymentType.FullTime,
        startDate: null,
        endDate: null,
        description: '',
      }
    ],
  },
  awardData: {
    awards: [
      {
        id: randomString(),
        award: '',
        issuer: '',
        date: null,
        description: '',
      }
    ]
  }
})
</script>

<template>
  <EditorBar v-model:editorData="editorData" />

  <Preview :editorData="editorData" />
</template>
