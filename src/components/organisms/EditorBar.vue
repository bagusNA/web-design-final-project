<script setup lang="ts">
import { ref } from 'vue'

import Button from 'primevue/button'
import Message from 'primevue/message'
import Icon from '@/components/atoms/Icon.vue'
import BiodataDataCard, {
  type BiodataData,
} from '@/components/molecules/DataCard/BiodataDataCard.vue'
import QuickSettingsDataCard from '@/components/molecules/DataCard/QuickSettingsDataCard.vue'

export interface EditorData {
  biodata: BiodataData
}

const open = ref<boolean>(true)

const editorData = defineModel<EditorData>('editorData', { required: true })
</script>

<template>
  <div
    class="h-[75vh] w-full fixed inset-x-0 bottom-0 z-60 transition-all duration-300 md:bottom-unset md:w-100 md:h-full md:inset-y-0 md:inset-x-none"
    :class="{
      'translate-y-5/6': !open,
    }"
    role="dialog"
    tabindex="-1"
    aria-label="Sidebar"
  >
    <Button
      class="absolute top-0 right-0 -translate-x-1/2 -translate-y-5/4 flex items-center justify-center cursor-pointer z-10 md:hidden"
      @click="open = !open"
    >
      <Icon name="lucide--chevron-up" class="transition" :class="{ 'rotate-180': open }"></Icon>
    </Button>

    <div class="relative flex flex-col h-full max-h-full">
      <!-- Content -->
      <div class="h-full overflow-y-auto flex flex-col">
        <div class="p-3 w-full flex flex-col flex-wrap grow">
          <div class="space-y-2">
            <Message icon="iconify lucide--info" closable>
              <div>Welcome to OpenAtelio!</div>
              <div class="font-normal text-sm">
                Start building your resume by entering your data below
              </div>
            </Message>

            <BiodataDataCard v-model:biodata="editorData.biodata" />

            <QuickSettingsDataCard />
          </div>
        </div>
      </div>
      <!-- End Content -->
    </div>
  </div>
</template>
