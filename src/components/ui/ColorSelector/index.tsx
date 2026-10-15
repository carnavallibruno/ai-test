import InputField from '../InputField/index.tsx'
import {
  CHROME_COLOR,
  PRESETS,
  formatHsl,
  hexToHsl,
  hslToHex,
  parseHsl,
} from './color.ts'

interface ColorSelectorProps {
  text: string
  color: string
  onChange: (next: { text: string; color: string }) => void
}

const ColorSelector = ({ text, color, onChange }: ColorSelectorProps) => {
  const hex = hslToHex(color) ?? '#000000'

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-3">
        {PRESETS.map((preset) => {
          const selected = preset.hsl === color
          return (
            <button
              key={preset.name}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange({ text: preset.hsl, color: preset.hsl })}
              className={`w-24 rounded-lg border-2 px-2 py-3 ${selected ? 'bg-neutral-300' : 'bg-neutral-100'}`}
              style={{
                borderColor: selected ? CHROME_COLOR : 'transparent',
              }}
            >
              <span
                className="mx-auto block size-8 rounded-full"
                style={{ backgroundColor: `hsl(${preset.hsl})` }}
              />
              <span className="mt-2 block text-sm">{preset.name}</span>
            </button>
          )
        })}
      </div>
      <InputField
        label="Custom Primary (HSL)"
        labelPosition="left"
        value={text}
        controlClassName="w-1/4"
        onChange={(next) => {
          const parsed = parseHsl(next)
          onChange({
            text: next,
            color: parsed ? formatHsl(parsed.h, parsed.s, parsed.l) : color,
          })
        }}
        trailing={
          <span className="relative block size-8 shrink-0">
            <span
              className="block size-8 rounded border border-neutral-300"
              style={{ backgroundColor: `hsl(${color})` }}
            />
            <input
              type="color"
              aria-label="Pick a primary color"
              value={hex}
              onChange={(event) => {
                const hsl = hexToHsl(event.target.value)
                if (!hsl) return
                onChange({ text: hsl, color: hsl })
              }}
              className="absolute inset-0 cursor-pointer opacity-0"
            />
          </span>
        }
      />
    </div>
  )
}

export default ColorSelector
