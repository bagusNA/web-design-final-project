import {
  type Component,
  computed,
  defineAsyncComponent,
  type Ref,
} from 'vue'

export interface ResumeTemplate {
  id: string
  name: string
  description: string
  component: Component
}

export const resumeTemplates: ResumeTemplate[] = [
  {
    id: 'simple',
    name: 'Simple',
    description: "For those that don't want anything too fancy.",
    component: defineAsyncComponent(() => import('@/components/organisms/templates/SimpleTemplate.vue')),
  },
  {
    id: 'grass-green',
    name: 'Grass Green',
    description: "Touch some grass bro.",
    component: defineAsyncComponent(() => import('@/components/organisms/templates/GrassGreenTemplate.vue')),
  },
  {
    id: 'purple-delight',
    name: 'Purple Delight',
    description: "Purple all the way.",
    component: defineAsyncComponent(() => import('@/components/organisms/templates/PurpleDelightTemplate.vue')),
  },
  {
    id: 'professional',
    name: 'Professional',
    description: "We all need a job. :(",
    component: defineAsyncComponent(() => import('@/components/organisms/templates/ProfessionalTemplate.vue')),
  },
]


export function useResumeTemplate(id: Ref<string>) {
  const template = computed<ResumeTemplate>(() => {
    const template = resumeTemplates.find(t => t.id === id.value)
    if (!template) {
      throw new Error('Template not found.')
    }

    return template
  })

  return {
    template,
  }
}
