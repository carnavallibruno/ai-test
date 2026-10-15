import type { ReactNode } from 'react'
import { useId } from 'react'

interface InputFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  labelPosition?: 'top' | 'left'
  className?: string
  controlClassName?: string
  trailing?: ReactNode
}

const InputField = ({
  label,
  value,
  onChange,
  labelPosition = 'top',
  className,
  controlClassName,
  trailing,
}: InputFieldProps) => {
  const id = useId()
  const fieldClass = `flex min-w-0 items-center gap-2 ${controlClassName ?? ''}`

  return (
    <div
      className={`${labelPosition === 'left' ? 'flex items-center gap-3' : 'flex flex-col gap-1'} ${className ?? ''}`}
    >
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <div className={fieldClass}>
        <input
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full min-w-0 rounded border border-neutral-300 bg-white px-2 py-1"
        />
        {trailing}
      </div>
    </div>
  )
}

export default InputField
