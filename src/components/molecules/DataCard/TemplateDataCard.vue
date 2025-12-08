<script setup lang="ts">
import Icon from '@/components/atoms/Icon.vue'
import Panel from 'primevue/panel'
import { resumeTemplates } from '@/composables/useResumeTemplate.ts'

const templateId = defineModel<string>({ required: true })
</script>

<template>
  <Panel toggleable>
    <template #header>
      <div class="flex items-center gap-x-2">
        <Icon name="lucide--file-image"></Icon>
        <span class="font-semibold">Templates</span>
      </div>
    </template>

    <template #toggleicon="{ collapsed }">
      <Icon
        name="lucide--chevron-down"
        class="transition"
        :class="{
          'rotate-180': !collapsed,
        }"
      ></Icon>
    </template>

    <div class="grid grid-cols-1 gap-4">
      <div v-for="item in resumeTemplates" :key="item.id" class="mx-2 flex flex-col justify-center">
        <button
          class="flex flex-col items-start justify-start text-start cursor-pointer relative transition hover:brightness-75"
          :class="{ 'brightness-80': templateId === item.id }"
          type="button"
          @click="templateId = item.id"
        >
          <img
            :src="item.thumbnail"
            :alt="item.name"
            class="h-100 w-auto aspect-10/14 object-cover w-full rounded-lg shadow-2xl mb-4"
          />

          <Transition name="fade">
            <Icon
              v-if="templateId === item.id"
              name="lucide--check"
              class="absolute inset-1/2 -translate-1/2 size-24 text-primary-500"
            ></Icon>
          </Transition>
        </button>

        <div>
          <div class="font-medium">{{ item.name }}</div>
          <div class="text-sm">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </Panel>
</template>
