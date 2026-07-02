const badges = [
  { name: 'Google Partner', src: '/images/google-partner.svg' },
  { name: 'Meta Certified', src: '/images/meta-certified.svg' },
  { name: 'HubSpot Certified', src: '/images/hubspot-certified.svg' },
  { name: 'SEMrush Certified', src: '/images/semrush-certified.svg' },
]

export default function TrustBadges() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
          Trusted by industry leaders & certified partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {badges.map((badge, i) => (
            <div key={badge.name} className="flex items-center gap-2 text-gray-400 animate-fade-in" style={{ animationDelay: `${i * 0.15}s`, animationFillMode: 'both' }}>
              <div className="w-10 h-10 bg-gradient-to-br from-blue/10 to-teal/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-blue to-teal opacity-40"></div>
              </div>
              <span className="text-sm font-semibold text-gray-500">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
