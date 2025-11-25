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

export interface AwardItem {
  id: string
  award: string | null
  issuer: string | null
  date: Date | null
  description: string | null
}

export interface AwardData {
  awards: AwardItem[]
}

const awardData = defineModel<AwardData>({ required: true })

function addAward(): void {
  awardData.value.awards.push({
    id: randomString(),
    award: '',
    issuer: '',
    date: null,
    description: '',
  })
}

function removeAward(index: number): void {
  awardData.value.awards.splice(index, 1)
}

// --- Sorting ---
const listEl = useTemplateRef('listEl')
useSortable(listEl, awardData.value.awards, {
  handle: '.handle',
  animation: 200,
})
</script>

<template>
  <Panel toggleable>
    <template #header>
      <div class="flex items-center gap-x-2">
        <Icon name="lucide--user"></Icon>
        <span class="font-semibold">Award</span>
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
        v-for="(award, i) in awardData.awards"
        :key="award.id"
        :value="award.id"
        class="border-l border-r first-of-type:border-t last-of-type:border-b first-of-type:rounded-t last-of-type:rounded-b"
      >
        <AccordionHeader class="py-2">
          <div class="flex items-center gap-x-4">
            <span class="handle flex items-center">
              <Icon name="lucide--grip-vertical"></Icon>
            </span>

            {{ award.award || `Award ${i + 1}` }}
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
            <FieldGroup label="Award" icon="lucide--medal" inputId="award">
              <InputText
                v-model="award.award"
                id="award"
                placeholder="Your Award"
                size="small"
              />
            </FieldGroup>

            <FieldGroup label="Issuer" icon="lucide--building-2" inputId="issuer">
              <InputText
                v-model="award.issuer"
                id="issuer"
                placeholder="Issuing Body"
                size="small"
              />
            </FieldGroup>

            <FieldGroup label="Date" icon="lucide--calendar" inputId="date">
              <DatePicker
                v-model="award.date"
                id="date"
                placeholder="Date"
                size="small"
                dateFormat="dd MM yy"
              />
            </FieldGroup>

            <FieldGroup label="Description" inputId="description">
              <Textarea
                v-model="award.description"
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
                @click="removeAward(i)"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>

    <Message v-if="!awardData.awards.length" severity="secondary" size="small">
      Empty
    </Message>

    <div class="mt-2">
      <Button @click="addAward" size="small"> Add </Button>
    </div>
  </Panel>
</template>
