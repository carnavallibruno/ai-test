export const FONTS = [
  'Inter (Default)',
  'Arial',
  'Roboto',
  'Open Sans',
  'Lato',
  'Source Sans Pro',
] as const

export type FontName = (typeof FONTS)[number]
