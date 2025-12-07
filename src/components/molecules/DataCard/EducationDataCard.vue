<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useSortable } from '@vueuse/integrations/useSortable'
import { randomString } from '@/utils/string.ts'

import Accordion from 'primevue/accordion'
import AccordionContent from 'primevue/accordioncontent'
import AccordionHeader from 'primevue/accordionheader'
import AccordionPanel from 'primevue/accordionpanel'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Message from 'primevue/message'
import Panel from 'primevue/panel'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import FieldGroup from '@/components/molecules/FieldGroup.vue'
import Icon from '@/components/atoms/Icon.vue'

export interface EducationItem {
  id: string
  schoolName: string | null
  degree: string | null
  startDate: Date | null
  endDate: Date | null
  location: string | null
  description: string | null
}

export interface EducationData {
  educations: EducationItem[]
}

const educationData = defineModel<EducationData>({ required: true })

function addEducation(): void {
  educationData.value.educations.push({
    id: randomString(),
    schoolName: '',
    degree: '',
    startDate: null,
    endDate: null,
    location: '',
    description: '',
  })
}

function removeEducation(index: number): void {
  educationData.value.educations.splice(index, 1)
}

// --- Sorting ---
const listEl = useTemplateRef('listEl')
useSortable(listEl, educationData.value.educations, {
  handle: '.handle',
  animation: 200,
})
</script>

<template>
  <Panel toggleable>
    <template #header>
      <div class="flex items-center gap-x-2">
        <Icon name="lucide--graduation-cap"></Icon>
        <span class="font-semibold">Education</span>
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

    <Accordion ref="listEl" multiple>
      <AccordionPanel
        v-for="(education, i) in educationData.educations"
        :key="education.id"
        :value="education.id"
        class="border-l border-r first-of-type:border-t last-of-type:border-b first-of-type:rounded-t last-of-type:rounded-b"
      >
        <AccordionHeader class="py-2">
          <div class="flex items-center gap-x-4">
            <span class="handle flex items-center">
              <Icon name="lucide--grip-vertical"></Icon>
            </span>

            {{ education.schoolName || `Education ${i + 1}` }}
          </div>

          <template #toggleicon="{ active }">
            <Icon
              name="lucide--chevron-down"
              class="transition"
              :class="{
                'rotate-180': active,
              }"
            ></Icon>
          </template>
        </AccordionHeader>

        <AccordionContent>
          <div class="space-y-2">
            <FieldGroup label="School / University" icon="lucide--school" inputId="school-name">
              <InputText
                v-model="education.schoolName"
                id="school-name"
                placeholder="University"
                size="small"
              />
            </FieldGroup>

            <FieldGroup label="Degree" icon="lucide--graduation-cap" inputId="degree">
              <InputText
                v-model="education.degree"
                id="degree"
                placeholder="Master of Bachelors"
                size="small"
              />
            </FieldGroup>

            <FieldGroup label="Start Date" icon="lucide--calendar" inputId="start-date">
              <DatePicker
                v-model="education.startDate"
                id="start-date"
                placeholder="Start Date"
                size="small"
                dateFormat="dd MM yy"
              />
            </FieldGroup>

            <FieldGroup label="End Date" icon="lucide--calendar" inputId="end-date">
              <DatePicker
                v-model="education.endDate"
                id="end-date"
                placeholder="End Date"
                size="small"
                dateFormat="dd MM yy"
              />
            </FieldGroup>

            <FieldGroup label="Location" icon="lucide--map-pin" inputId="location">
              <InputText
                v-model="education.location"
                id="location"
                placeholder="Indonesia"
                size="small"
              />
            </FieldGroup>

            <FieldGroup label="Description" inputId="description">
              <Textarea
                v-model="education.description"
                id="description"
                placeholder="Describe it here"
                class="w-full text-sm"
              />
            </FieldGroup>

            <div class="flex justify-end">
              <Button
                label="Remove"
                icon="iconify lucide--trash"
                size="small"
                severity="danger"
                outlined
                @click="removeEducation(i)"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>

    <Message v-if="!educationData.educations.length" severity="secondary" size="small">
      Empty
    </Message>

    <div class="mt-2">
      <Button @click="addEducation" size="small"> Add </Button>
    </div>
  </Panel>
</template>
