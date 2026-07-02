interface Stat {
  value: string
  label: string
}

interface StatsSectionProps {
  stats: Stat[]
  variant?: 'white' | 'navy'
}

export default function StatsSection({ stats, variant = 'white' }: StatsSectionProps) {
  const bgClass = variant === 'navy' ? 'bg-navy' : 'bg-white'
  const textClass = variant === 'navy' ? 'text-white' : 'text-navy'
  const labelClass = variant === 'navy' ? 'text-gray-400' : 'text-gray-500'

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center animate-scale-in" style={{ animationDelay: `${i * 0.15}s`, animationFillMode: 'both' }}>
              <div className={`text-4xl md:text-5xl font-bold ${textClass} mb-2`}>{stat.value}</div>
              <div className={`text-sm ${labelClass} font-medium`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
