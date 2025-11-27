<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useSortable } from '@vueuse/integrations/useSortable'
import { randomString } from '@/utils/string.ts'
import { EmploymentType, EmploymentTypeOptions } from '@/types/employment.ts'

import Accordion from 'primevue/accordion'
import AccordionContent from 'primevue/accordioncontent'
import AccordionHeader from 'primevue/accordionheader'
import AccordionPanel from 'primevue/accordionpanel'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Panel from 'primevue/panel'
import Select from 'primevue/select'
import FieldGroup from '@/components/molecules/FieldGroup.vue'
import Icon from '@/components/atoms/Icon.vue'
import MultipleInputText from '@/components/molecules/MultipleInputText.vue'

export interface ExperienceItem {
  id: string
  jobTitle: string | null
  employer: string | null
  employmentType: EmploymentType
  startDate: Date | null
  endDate: Date | null
  description: string[]
}

export interface ExperienceData {
  experiences: ExperienceItem[]
}

const experienceData = defineModel<ExperienceData>({ required: true })

function addExperience(): void {
  experienceData.value.experiences.push({
    id: randomString(),
    jobTitle: '',
    employer: '',
    employmentType: EmploymentType.FullTime,
    startDate: null,
    endDate: null,
    description: '',
  })
}

function removeExperience(index: number): void {
  experienceData.value.experiences.splice(index, 1)
}

// --- Sorting ---
const listEl = useTemplateRef('listEl')
useSortable(listEl, experienceData.value.experiences, {
  handle: '.handle',
  animation: 200,
})
</script>

<template>
  <Panel toggleable>
    <template #header>
      <div class="flex items-center gap-x-2">
        <Icon name="lucide--user"></Icon>
        <span class="font-semibold">Experiences</span>
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
        v-for="(experience, i) in experienceData.experiences"
        :key="experience.id"
        :value="experience.id"
        class="border-l border-r first-of-type:border-t last-of-type:border-b first-of-type:rounded-t last-of-type:rounded-b"
      >
        <AccordionHeader class="py-2">
          <div class="flex items-center gap-x-4">
            <span class="handle flex items-center">
              <Icon name="lucide--grip-vertical"></Icon>
            </span>

            {{ experience.jobTitle || `Experience ${i + 1}` }}
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
            <FieldGroup label="Job Title" icon="lucide--briefcase-business" inputId="job-title">
              <InputText
                v-model="experience.jobTitle"
                id="job-title"
                placeholder="Web Developer"
                size="small"
              />
            </FieldGroup>

            <FieldGroup label="Employer / Company" icon="lucide--building-2" inputId="employer">
              <InputText
                v-model="experience.employer"
                id="employer"
                placeholder="Company"
                size="small"
              />
            </FieldGroup>

            <FieldGroup label="Employment Type" icon="lucide--signature" inputId="employer">
              <Select
                v-model="experience.employmentType"
                :options="EmploymentTypeOptions"
                optionLabel="label"
                optionValue="value"
                size="small"
              />
            </FieldGroup>

            <FieldGroup label="Start Date" icon="lucide--calendar" inputId="start-date">
              <DatePicker
                v-model="experience.startDate"
                id="start-date"
                placeholder="Start Date"
                size="small"
                dateFormat="dd MM yy"
              />
            </FieldGroup>

            <FieldGroup label="End Date" icon="lucide--calendar" inputId="end-date">
              <DatePicker
                v-model="experience.endDate"
                id="end-date"
                placeholder="End Date"
                size="small"
                dateFormat="dd MM yy"
              />
            </FieldGroup>

            <MultipleInputText v-model="experience.description" label="Description" inputId="description"/>

            <div class="flex justify-end">
              <Button
                label="Remove"
                icon="iconify lucide--trash"
                size="small"
                severity="danger"
                outlined
                @click="removeExperience(i)"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>

    <Message v-if="!experienceData.experiences.length" severity="secondary" size="small">
      Empty
    </Message>

    <div class="mt-2">
      <Button @click="addExperience" size="small"> Add </Button>
    </div>
  </Panel>
</template>
