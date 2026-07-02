import SectionHeader from './SectionHeader'

interface ProcessStep {
  number: string
  title: string
  description: string
}

interface ProcessSectionProps {
  steps: ProcessStep[]
  title?: string
  subtitle?: string
}

export default function ProcessSection({ steps, title = 'Our Process', subtitle = 'How We Work' }: ProcessSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader subtitle={subtitle} title={title} description="A proven methodology that delivers consistent results for our clients." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative animate-slide-up" style={{ animationDelay: `${i * 0.15}s`, animationFillMode: 'both' }}>
              <div className="text-5xl font-bold text-blue/10 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
