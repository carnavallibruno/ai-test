export const PRESETS = [
  { name: 'Navy', hsl: '215 65% 30%' },
  { name: 'Teal', hsl: '174 62% 32%' },
  { name: 'Forest', hsl: '152 40% 28%' },
  { name: 'Slate', hsl: '215 16% 47%' },
  { name: 'Plum', hsl: '300 24% 40%' },
  { name: 'Crimson', hsl: '350 65% 42%' },
] as const

export const DEFAULT_PRIMARY = PRESETS[0].hsl
export const CHROME_COLOR = `hsl(${DEFAULT_PRIMARY})`

const HSL_PATTERN = /^\s*(\d{1,3})\s+(\d{1,3})%\s+(\d{1,3})%\s*$/

export const parseHsl = (
  text: string,
): { h: number; s: number; l: number } | null => {
  const match = HSL_PATTERN.exec(text)
  if (!match) return null
  const h = Number(match[1])
  const s = Number(match[2])
  const l = Number(match[3])
  if (h > 360 || s > 100 || l > 100) return null
  return { h, s, l }
}

export const formatHsl = (h: number, s: number, l: number) =>
  `${h} ${s}% ${l}%`

const hexByte = (value: number) => value.toString(16).padStart(2, '0')

export const hslToHex = (text: string): string | null => {
  const parsed = parseHsl(text)
  if (!parsed) return null
  const sn = parsed.s / 100
  const ln = parsed.l / 100
  const c = (1 - Math.abs(2 * ln - 1)) * sn
  const hp = parsed.h / 60
  const x = c * (1 - Math.abs((hp % 2) - 1))
  const m = ln - c / 2
  let r = 0
  let g = 0
  let b = 0
  if (hp < 1) {
    r = c
    g = x
  } else if (hp < 2) {
    r = x
    g = c
  } else if (hp < 3) {
    g = c
    b = x
  } else if (hp < 4) {
    g = x
    b = c
  } else if (hp < 5) {
    r = x
    b = c
  } else {
    r = c
    b = x
  }
  return `#${hexByte(Math.round((r + m) * 255))}${hexByte(Math.round((g + m) * 255))}${hexByte(Math.round((b + m) * 255))}`
}

export const hexToHsl = (hex: string): string | null => {
  const match = /^#([0-9a-f]{6})$/i.exec(hex.trim())
  if (!match) return null
  const value = Number.parseInt(match[1], 16)
  const rn = ((value >> 16) & 255) / 255
  const gn = ((value >> 8) & 255) / 255
  const bn = (value & 255) / 255
  const max = Math.max(rn, gn, bn)
  const min = Math.min(rn, gn, bn)
  const lightness = (max + min) / 2
  if (max === min) return formatHsl(0, 0, Math.round(lightness * 100))
  const delta = max - min
  const saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)
  const hue =
    max === rn
      ? (gn - bn) / delta + (gn < bn ? 6 : 0)
      : max === gn
        ? (bn - rn) / delta + 2
        : (rn - gn) / delta + 4
  return formatHsl(
    Math.round((hue / 6) * 360),
    Math.round(saturation * 100),
    Math.round(lightness * 100),
  )
}
