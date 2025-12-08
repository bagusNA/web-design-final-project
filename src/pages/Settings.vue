<script setup lang="ts">
import router from '@/router'
import { useResume } from '@/composables/useResume.ts'

import { useConfirm } from 'primevue'
import Button from 'primevue/button'
import FieldGroup from '@/components/molecules/FieldGroup.vue'
import DarkModeSwitch from '@/components/atoms/DarkModeSwitch.vue'

const { clearResumes } = useResume()
const confirm = useConfirm()

function clearData(): void {
  const onClear = () => {
    clearResumes()
    router.push({ name: 'landing' })
  }

  confirm.require({
    accept: () => onClear(),
    message: 'Are you sure you want to clear all app data? This includes all of your resumes.',
    header: 'Clear?',
    icon: 'iconify lucide--triangle-alert',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true
    },
    acceptProps: {
      label: 'Clear',
      severity: 'danger',
    },
  })
}
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 py-12 md:py-18">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Settings</h1>
    <p>Adjust your settings</p>
  </section>

  <section class="max-w-7xl mx-auto px-4 pt-4 pb-20 space-y-12">
    <div class="space-y-2">
      <div class="flex gap-4 items-center">
        <h6 class="text-lg">Appearance</h6>
        <hr class="text-primary-100 dark:text-neutral-400 grow" />
      </div>

      <FieldGroup label="Dark Mode" inputId="dark-mode">
        <DarkModeSwitch />
      </FieldGroup>
    </div>

    <div class="space-y-2">
      <div class="flex gap-4 items-center">
        <h6 class="text-lg">Others</h6>
        <hr class="text-primary-100 dark:text-neutral-400 grow" />
      </div>

      <FieldGroup label="App Data" inputId="dark-mode">
        <Button
          @click="clearData"
          label="Clear Data"
          icon="iconify lucide--trash"
          severity="danger"
          size="small"
        />
      </FieldGroup>
    </div>
  </section>
</template>
