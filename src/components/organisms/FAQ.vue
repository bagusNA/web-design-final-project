<script setup lang="ts">
import { ref } from 'vue'

import Accordion from 'primevue/accordion'
import AccordionContent from 'primevue/accordioncontent'
import AccordionHeader from 'primevue/accordionheader'
import AccordionPanel from 'primevue/accordionpanel'
import Icon from '@/components/atoms/Icon.vue'

export interface FAQItem {
  title: string
  content: string
}

const faqs = ref<FAQItem[]>([
  {
    title: 'Is OpenAtelio free?',
    content: 'It is totally free.',
  },
  {
    title: 'Do I need to create an account?',
    content: 'You can start building a resume without signing up, anytime!',
  },
  {
    title: 'Can I download my resume?',
    content: 'Yes, you can download your resume in PDF format.',
  },
  {
    title: 'Are the templates ATS-friendly?',
    content:
      'Absolutely. All templates are optimized to pass Applicant Tracking Systems so your resume stays readable by employers.',
  },
  {
    title: 'Can I create multiple resumes?',
    content: 'Yes, you can create and manage multiple resumes for different job applications.',
  },
])
</script>

<template>
  <section class="py-32 grid grid-cols-1 md:grid-cols-2 items-center gap-x-8 gap-y-4">
    <div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Frequently Asked Questions</h1>
    </div>

    <div>
      <Accordion class="rounded-xl" multiple>
        <AccordionPanel
          v-for="(faq, i) in faqs"
          :value="i"
          class="border-l border-r first-of-type:border-t last-of-type:border-b first-of-type:rounded-t-xl last-of-type:rounded-b-xl"
        >
          <AccordionHeader
            class="py-3"
            :class="{ 'rounded-t-xl': !i, 'rounded-b-xl': i === faqs.length - 1 }"
          >
            <template #default="{ active }">
              <div class="font-medium" :class="{ 'text-primary-600': active }">
                {{ faq.title }}
              </div>
            </template>

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

          <AccordionContent class="rounded-xl">
            <div class="pt-2 text-sm text-neutral-600 dark:text-neutral-200">
              {{ faq.content }}
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </section>
</template>
