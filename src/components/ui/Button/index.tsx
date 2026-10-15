import type { CSSProperties, ReactNode } from 'react'

interface ButtonProps {
  icon?: ReactNode
  children: ReactNode
  onClick?: () => void
  className?: string
  style?: CSSProperties
}

const Button = ({ icon, children, onClick, className, style }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`inline-flex items-center gap-2 rounded px-3 py-2 ${className ?? ''}`}
    >
      {icon}
      {children}
    </button>
  )
}

export default Button
