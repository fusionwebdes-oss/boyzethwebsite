import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Industries We Serve | Boyzeth Solutions',
  description: 'Boyzeth Solutions serves a wide range of industries including healthcare, e-commerce, real estate, education, finance, technology, hospitality, and legal in Lagos, Nigeria.',
}

const industries = [
  {
    title: 'Healthcare',
    description: 'Digital solutions for hospitals, clinics, telemedicine platforms, and health-tech startups. We help healthcare providers reach patients online and streamline operations through HIPAA-compliant websites, patient portal development, and targeted healthcare marketing campaigns that build trust and drive appointments.',
    gradient: 'from-blue to-teal',
  },
  {
    title: 'E-commerce',
    description: 'End-to-end e-commerce solutions including custom store development, product listing optimization, shopping ad campaigns, and conversion rate optimization. We build high-converting online stores on Shopify and WooCommerce with seamless payment gateways and mobile-optimised shopping experiences.',
    gradient: 'from-teal to-blue',
  },
  {
    title: 'Real Estate',
    description: 'Property listing websites, virtual tour integrations, real estate marketing campaigns, and lead generation systems for agencies and developers. We help real estate businesses showcase properties effectively with immersive digital experiences and targeted buyer acquisition strategies.',
    gradient: 'from-blue to-orange',
  },
  {
    title: 'Education',
    description: 'E-learning platforms, school management systems, course marketing, and student recruitment campaigns for educational institutions and ed-tech startups. We create engaging digital learning environments that improve student outcomes and drive enrolment for schools and training providers.',
    gradient: 'from-orange to-teal',
  },
  {
    title: 'Finance',
    description: 'Fintech branding, mobile banking app promotion, compliance-focused web development, and digital marketing for banks, microfinance institutions, and startups. We deliver secure, regulation-compliant digital solutions that build consumer trust and drive adoption of financial services.',
    gradient: 'from-teal to-orange',
  },
  {
    title: 'Technology',
    description: 'SaaS website design, developer tools marketing, tech blog strategy, and product launch campaigns for B2B and B2C technology companies. We help tech startups and established firms communicate complex value propositions clearly and drive adoption through targeted digital campaigns.',
    gradient: 'from-blue to-navy',
  },
  {
    title: 'Hospitality',
    description: 'Hotel booking systems, restaurant websites with online ordering, travel agency marketing, and guest experience optimization for the hospitality industry. We help hospitality businesses attract more guests, streamline bookings, and deliver memorable digital experiences that drive repeat visits.',
    gradient: 'from-navy to-teal',
  },
  {
    title: 'Legal',
    description: 'Professional law firm websites, legal blog strategy, LinkedIn thought leadership, and client acquisition campaigns for solicitors and legal practices. We create authoritative digital presences that position legal professionals as trusted advisors and generate qualified client inquiries.',
    gradient: 'from-navy to-blue',
  },
]

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-24 lg:pt-60 pb-24 bg-gradient-to-br from-navy via-navy to-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-80 h-80 bg-teal rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Industries We Serve
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              From healthcare to hospitality, we bring our digital expertise to businesses across every sector.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Industries" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Industries", href: "/industries" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-blue/20 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
                >
                <img
                  src={`https://picsum.photos/seed/industry-${i + 1}/400/250`}
                  alt={`${ind.title} digital solutions by Boyzeth Solutions - ${ind.description.slice(0, 60)}`}
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ind.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />}
                    {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />}
                    {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />}
                    {i === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
                    {i === 4 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                    {i === 5 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />}
                    {i === 6 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
                    {i === 7 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-blue transition-colors">{ind.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{ind.description}</p>
              </div>
              </div>
            ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            subtitle="Local Expertise"
            title="Proudly Serving Lagos & Beyond"
            description="Based in Lagos, Nigeria, we understand the local market landscape, consumer behavior, and business challenges. Whether you are in Surulere or San Francisco, we deliver world-class digital solutions."
            center
          />
        </div>
      </section>

      <ScrollReveal>
        <CTASection
          title="Ready to Transform Your Industry Presence?"
          description="Let&rsquo;s build a digital strategy tailored to your industry and goals."
          primaryLabel="Start Your Project"
          primaryHref="/contact"
          secondaryLabel="Get a Free Audit"
          secondaryHref="/free-audit"
          variant="navy"
        />
      </ScrollReveal>
    </>
  )
}
