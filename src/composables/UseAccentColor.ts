import { useLocalStorage } from '@vueuse/core'
import { onMounted } from 'vue'
import { generateShades, pickContrast } from '@/utils/color.ts'

export interface Color {
  name: string
  hex: string
}

const colors: Color[] = [
  { name: 'Blue', hex: '#3B82F6' },
  { name: 'Sky', hex: '#0EA5E9' },
  { name: 'Cyan', hex: '#06B6D4' },
  { name: 'Teal', hex: '#14B8A6' },
  { name: 'Emerald', hex: '#10B981' },
  { name: 'Green', hex: '#22C55E' },
  { name: 'Lime', hex: '#84CC16' },
  { name: 'Amber', hex: '#F59E0B' },
  { name: 'Orange', hex: '#F97316' },
  { name: 'Red', hex: '#EF4444' },
  { name: 'Rose', hex: '#FB7185' },
  { name: 'Pink', hex: '#EC4899' },
  { name: 'Purple', hex: '#8B5CF6' },
  { name: 'Violet', hex: '#7C3AED' },
  { name: 'Indigo', hex: '#6366F1' },
  { name: 'Slate', hex: '#64748B' },
]

export function useAccentColor() {
  const currentColor = useLocalStorage<string>('accent-color', '')

  function applyColor(hex: string) {
    currentColor.value = hex
    const root = document.documentElement

    const shades = generateShades(hex)

    const accentPalette: Record<string, string> = {
      '--p-primary-50': shades[0],
      '--p-primary-100': shades[1],
      '--p-primary-200': shades[2],
      '--p-primary-300': shades[3],
      '--p-primary-400': shades[4],
      '--p-primary-500': shades[5], // main
      '--p-primary-600': shades[6],
      '--p-primary-700': shades[7],
      '--p-primary-800': shades[8],
      '--p-primary-900': shades[9],
      '--p-primary-color': shades[5],
      '--p-primary-contrast': pickContrast(shades[5]),
    }

    Object.entries(accentPalette).forEach(([k, v]) => {
      root.style.setProperty(k, v)
    })
  }

  function reset() {
    applyColor(colors[0]!.hex)
  }

  onMounted(() => {
    if (!currentColor) return
    applyColor(currentColor.value)
  })

  return {
    colors,
    currentColor,

    applyColor,
    reset,
  }
}
