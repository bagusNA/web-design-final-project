import { computed, type MaybeRefOrGetter } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import { parseWithDates } from '@/utils/parser.ts'
import { createResume as serviceCreateResume } from '@/services/resumeService.ts'
import type { EditorData } from '@/components/organisms/EditorBar.vue'
import { randomString } from '@/utils/string.ts'

export function useResume(id: MaybeRefOrGetter<string | null> = null) {
  const resumes = useLocalStorage<EditorData[]>('editor-data', [], {
    serializer: {
      // JSON.parse() does not handle date value so we use this instead
      read: (v) => (v ? parseWithDates(v) : null),
      write: (v) => JSON.stringify(v),
    },
  })

  const resume = computed<EditorData | null>(() =>
    id ? (resumes.value.find((r) => r.id === id) ?? null) : null,
  )

  function getResumeById(id: string) {
    return resumes.value.find(r => r.id === id)
  }

  function createResume(): EditorData {
    let id
    do {
      id = randomString()
    } while (getResumeById(id))

    const resume = serviceCreateResume(id)

    resumes.value.push(resume)
    return resume
  }

  function deleteResume(id: string): void {
    const index = resumes.value.findIndex((r) => r.id === id)

    if (index === -1) return
    resumes.value.splice(index, 1)
  }

  return {
    resumes,
    resume,

    createResume,
    deleteResume,
  }
}
