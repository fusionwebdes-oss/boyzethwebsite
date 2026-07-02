import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-orange text-white hover:bg-orange-light shadow-lg shadow-orange/25 hover:shadow-orange/40',
  secondary: 'bg-blue text-white hover:bg-blue-light shadow-lg shadow-blue/25 hover:shadow-blue/40',
  outline: 'border-2 border-blue text-blue hover:bg-blue hover:text-white',
  ghost: 'text-blue hover:bg-blue/10',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({ variant = 'primary', size = 'md', href, children, className = '', onClick, type = 'button', disabled }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 active:scale-95 hover:-translate-y-0.5'
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return <Link href={href} className={styles}>{children}</Link>
  }

  return <button type={type} onClick={onClick} className={`${styles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={disabled}>{children}</button>
}
