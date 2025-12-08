export function hexToRgb(hex: string) {
  const cleaned = hex.replace('#', '')
  const bigint = parseInt(cleaned, 16)
  if (cleaned.length === 6) {
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 }
  } else if (cleaned.length === 3) {
    return { r: parseInt(cleaned[0] + cleaned[0], 16), g: parseInt(cleaned[1] + cleaned[1], 16), b: parseInt(cleaned[2] + cleaned[2], 16) }
  }
  return { r: 0, g: 0, b: 0 }
}

export function rgbToHex(r: number, g: number, b: number) {
  return '#' + [r, g, b].map((x) => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
}

export function rgbToHsl(r: number, g: number, b: number) {
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h = 0, s = 0, l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }
  return { h: h * 360, s: s * 100, l: l * 100 }
}

export function hslToRgb(h: number, s: number, l: number) {
  s /= 100; l /= 100; h /= 360;
  let r: number, g: number, b: number
  if (s === 0) { r = g = b = l }
  else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1/6) return p + (q - p) * 6 * t
      if (t < 1/2) return q
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
      return p
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1/3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1/3)
  }
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) }
}

export function adjustLightness(hex: string, percent: number): string {
  const { r, g, b } = hexToRgb(hex)
  const hsl = rgbToHsl(r, g, b)

  let newL = hsl.l + percent
  if (newL > 100) newL = 100
  if (newL < 0) newL = 0

  const rgb = hslToRgb(hsl.h, hsl.s, newL)

  return rgbToHex(rgb.r, rgb.g, rgb.b)
}

export function generateShades(baseHex: string): string[] {
  // generate 10 shades from light (50) to dark (900)
  // tweak the lightness offsets as needed
  const offsets = [52,40,30,20,12,0,-8,-16,-24,-32]

  return offsets.map((offset) => adjustLightness(baseHex, offset))
}

export function luminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex)

  const a = [r, g, b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })

  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]
}

export function pickContrast(hex: string): string {
  return luminance(hex) > 0.5 ? '#000000' : '#ffffff'
}
