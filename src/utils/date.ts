import { useDateFormat, type UseDateFormatReturn } from '@vueuse/core'
import type { MaybeRefOrGetter } from 'vue'

export function formatMonthYear(date: MaybeRefOrGetter<Date> | null = null): UseDateFormatReturn | null {
  return date ? useDateFormat(date, 'MMMM YYYY') : null
}
