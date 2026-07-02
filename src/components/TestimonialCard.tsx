interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  rating?: number
  image?: string
  imageAlt?: string
}

export default function TestimonialCard({ quote, name, role, company, rating = 5, image, imageAlt }: TestimonialCardProps) {
  return (
    <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue/10 hover:-translate-y-1 transition-all duration-500">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed mb-6 italic">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        {image ? (
          <img src={image} alt={imageAlt || `${name} - ${role} at ${company}`} className="w-12 h-12 rounded-full object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue to-teal flex items-center justify-center text-white font-bold text-sm">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
        <div>
          <p className="font-semibold text-navy text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{role}, {company}</p>
        </div>
      </div>
    </div>
  )
}
