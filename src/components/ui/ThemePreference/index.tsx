interface ThemePreferenceProps {
  darkMode: boolean
  compactMode: boolean
  onDarkModeChange: (value: boolean) => void
  onCompactModeChange: (value: boolean) => void
}

interface SwitchRowProps {
  label: string
  checked: boolean
  onChange: (value: boolean) => void
}

const SwitchRow = ({ label, checked, onChange }: SwitchRowProps) => {
  return (
    <div className="flex items-center justify-between rounded px-2 py-4">
      <span>{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 rounded-full ${checked ? 'bg-neutral-700' : 'bg-neutral-300'}`}
      >
        <span
          className={`absolute top-0.5 size-5 rounded-full bg-white ${checked ? 'left-5' : 'left-0.5'}`}
        />
      </button>
    </div>
  )
}

const ThemePreference = ({
  darkMode,
  compactMode,
  onDarkModeChange,
  onCompactModeChange,
}: ThemePreferenceProps) => {
  return (
    <div className="flex flex-col">
      <SwitchRow
        label="Dark Mode"
        checked={darkMode}
        onChange={onDarkModeChange}
      />
      <SwitchRow
        label="Compact Mode"
        checked={compactMode}
        onChange={onCompactModeChange}
      />
    </div>
  )
}

export default ThemePreference
