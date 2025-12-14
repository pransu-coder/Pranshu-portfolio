
interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'secondary'
  className?: string
  style?: React.CSSProperties // Added style prop
}

export function Badge({ children, variant = 'default', className = '', style }: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold'
  const variants = {
    default: 'bg-primary/20 text-primary border border-primary/30',
    secondary: 'bg-accent/20 text-accent border border-accent/30',
  }

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`} style={style}>
      {children}
    </span>
  )
}

