import { FONTS, type FontName } from './fonts.ts'

interface FontSelectorProps {
  value: FontName
  onChange: (value: FontName) => void
}

const FontSelector = ({ value, onChange }: FontSelectorProps) => {
  return (
    <select
      aria-label="Font family"
      value={value}
      onChange={(event) => onChange(event.target.value as FontName)}
      className="rounded border border-neutral-300 bg-white px-2 py-1"
    >
      {FONTS.map((font) => (
        <option key={font} value={font}>
          {font}
        </option>
      ))}
    </select>
  )
}

export default FontSelector
