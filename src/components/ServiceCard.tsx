import Link from 'next/link'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  gradient?: string
}

export default function ServiceCard({ icon, title, description, href, gradient = 'from-blue to-teal' }: ServiceCardProps) {
  return (
    <Link href={href} className="group block p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue/20 hover:shadow-xl hover:shadow-blue/5 hover:-translate-y-1 transition-all duration-500">
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-blue transition-colors">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
      <span className="text-blue font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
        Learn More
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </span>
    </Link>
  )
}
