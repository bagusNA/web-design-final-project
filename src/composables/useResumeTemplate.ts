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
  thumbnail: string | (() => Promise<typeof import('*.png')>)
  component: Component
}

export const resumeTemplates: ResumeTemplate[] = [
  {
    id: 'simple',
    name: 'Simple',
    description: "For those that don't want anything too fancy.",
    thumbnail: new URL('@/assets/images/templates/simple.png', import.meta.url).href,
    component: defineAsyncComponent(() => import('@/components/organisms/templates/SimpleTemplate.vue')),
  },
  {
    id: 'grass-green',
    name: 'Grass Green',
    description: "Touch some grass bro.",
    thumbnail: new URL('@/assets/images/templates/grass-green.png', import.meta.url).href,
    component: defineAsyncComponent(() => import('@/components/organisms/templates/GrassGreenTemplate.vue')),
  },
  {
    id: 'pinky-boy',
    name: 'Pinky Boy',
    description: "Pinky promise you'll get a job.",
    thumbnail: new URL('@/assets/images/templates/pinky-boy.png', import.meta.url).href,
    component: defineAsyncComponent(() => import('@/components/organisms/templates/PinkyBoyTemplate.vue')),
  },
  {
    id: 'purple-delight',
    name: 'Purple Delight',
    description: "Purple all the way.",
    thumbnail: new URL('@/assets/images/templates/purple-delight.png', import.meta.url).href,
    component: defineAsyncComponent(() => import('@/components/organisms/templates/PurpleDelightTemplate.vue')),
  },
  {
    id: 'professional',
    name: 'Professional',
    description: "We all need a job. :(",
    thumbnail: new URL('@/assets/images/templates/professional.png', import.meta.url).href,
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
