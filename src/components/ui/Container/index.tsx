import type { ReactNode } from 'react'

interface ContainerProps {
  name: string
  description?: string
  icon?: ReactNode
  className?: string
  children: ReactNode
}

const Container = ({
  name,
  description,
  icon,
  className,
  children,
}: ContainerProps) => {
  return (
    <section className={className}>
      <div className="mb-2 flex items-center gap-2">
        {icon}
        <h2 className="font-bold">{name}</h2>
      </div>
      {description ? <p className="mb-3 text-sm">{description}</p> : null}
      {children}
    </section>
  )
}

export default Container
