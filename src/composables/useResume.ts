import { computed, type MaybeRefOrGetter, watchEffect } from 'vue'
import { useIDBKeyval } from '@vueuse/integrations/useIDBKeyval'

import { parseWithDates } from '@/utils/parser.ts'
import { createResume as serviceCreateResume } from '@/services/resumeService.ts'
import type { EditorData } from '@/components/organisms/EditorBar.vue'
import { randomString } from '@/utils/string.ts'

export function useResume(id: MaybeRefOrGetter<string | null> = null) {
  const { data: resumes } = useIDBKeyval<EditorData[]>('editor-data', [], {
    serializer: {
      // JSON.parse() does not handle date value so we use this instead
      read: (v) => (v ? parseWithDates(v) : null),
      write: (v) => JSON.stringify(v),
    },
  })

  const resume = computed<EditorData | null>(() =>
    id ? getResumeById(id) : null,
  )

  function getResumeById(id: string): EditorData | null {
    return resumes.value.find(r => r.id === id) ?? null
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

  function clearResumes(): void {
    resumes.value = []
  }

  return {
    resumes,
    resume,

    createResume,
    deleteResume,
    clearResumes,
  }
}
