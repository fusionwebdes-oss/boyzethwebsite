import Button from './Button'

interface CTASectionProps {
  title: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  variant?: 'default' | 'navy'
}

export default function CTASection({
  title,
  description,
  primaryLabel = 'Get Started',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
  variant = 'default',
}: CTASectionProps) {
  return (
    <section className={`py-20 animate-slide-up ${variant === 'navy' ? 'bg-navy' : 'bg-gradient-to-r from-blue to-teal'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${variant === 'navy' ? 'text-white' : 'text-white'}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${variant === 'navy' ? 'text-gray-300' : 'text-white/80'}`}>
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={primaryHref} variant={variant === 'navy' ? 'primary' : 'primary'} size="lg">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
