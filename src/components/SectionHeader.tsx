interface SectionHeaderProps {
  subtitle?: string
  title: string
  description?: string
  center?: boolean
  className?: string
}

export default function SectionHeader({ subtitle, title, description, center = true, className = '' }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-16 animate-slide-up ${className}`}>
      {subtitle && (
        <span className="inline-block text-blue font-semibold text-sm uppercase tracking-widest mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
