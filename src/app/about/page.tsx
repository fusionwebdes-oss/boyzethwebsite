import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import StatsSection from '@/components/StatsSection'
import CTASection from '@/components/CTASection'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'About Us | Boyzeth Solutions',
  description: 'Learn about Boyzeth Solutions — a Lagos-based digital marketing and web development agency helping businesses grow through innovative digital strategies.',
}

const values = [
  { title: 'Innovation', description: 'We stay ahead of digital trends to deliver cutting-edge solutions that give our clients a competitive edge.' },
  { title: 'Integrity', description: 'Transparency and honesty are at the core of every engagement. We build trust through clear communication and reliable delivery.' },
  { title: 'Results-Driven', description: 'Every strategy we create is measured against real business outcomes — traffic, conversions, and revenue growth.' },
  { title: 'Client-First', description: 'Your success is our success. We prioritize your goals and tailor every solution to your unique business needs.' },
]

const team = [
  { name: 'Chukwudi Okafor', role: 'Founder & CEO' },
  { name: 'Amara Eze', role: 'Head of Strategy' },
  { name: 'Tunde Balogun', role: 'Lead Developer' },
  { name: 'Chioma Nwosu', role: 'Creative Director' },
]

const stats = [
  { value: '50+', label: 'Clients Served' },
  { value: '120+', label: 'Projects Delivered' },
  { value: '4.9', label: 'Average Rating' },
  { value: '6+', label: 'Years Experience' },
]

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 lg:pt-60 pb-24 bg-gradient-to-br from-navy via-navy to-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              About Boyzeth Solutions
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              We are a Lagos-based digital agency on a mission to help businesses thrive in the digital age.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "About Us" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "About Us", href: "/about" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-blue font-semibold text-sm uppercase tracking-widest mb-4">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-6">
                Built in Lagos, Driven by Purpose
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Boyzeth Solutions was founded in Lagos, Nigeria with a simple vision: to bridge the gap between African businesses and the digital opportunities of the modern world. We saw too many promising companies struggle with online visibility and decided to change that.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Today, we partner with businesses of all sizes — from startups to established enterprises — to craft digital strategies that drive real growth. Our team combines local market insight with global best practices to deliver results that matter.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Whether it is building a high-performance website, running targeted ad campaigns, or creating content that resonates, we bring passion and expertise to every project.
              </p>
              <p className="text-gray-500 leading-relaxed">
                With deep expertise in the UK and Nigerian markets, we understand the nuances of both audiences. Our client-first approach means we listen first, strategise second, and deliver results that align with your business goals — whether you are scaling locally or expanding internationally.
              </p>
            </div>
            <img
              src="https://picsum.photos/seed/about-office/800/600"
              alt="Boyzeth Solutions team working in modern office"
              className="rounded-2xl h-80 lg:h-96 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 bg-gray-50">
          <SectionHeader
            subtitle="Our Values"
            title="What We Stand For"
            description="These core principles guide every decision we make and every project we deliver."
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:border-blue/20 transition-all duration-300 text-center group animate-scale-in overflow-hidden" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                <img
                  src={`https://picsum.photos/seed/about-value-${i + 1}/400/300`}
                  alt={`${v.title} - core value at Boyzeth Solutions digital agency`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-8 pt-6">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-gradient-to-br from-blue to-teal flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />}
                      {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                      {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />}
                      {i === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />}
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <StatsSection stats={stats} variant="navy" />
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20">
          <SectionHeader
            subtitle="Our Team"
            title="Meet the People Behind the Work"
            description="A passionate team of strategists, developers, and creatives dedicated to your success."
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                <img
                  src={`https://picsum.photos/seed/about-team-${i + 1}/200/200`}
                  alt={`${member.name} - ${member.role} at Boyzeth Solutions digital agency`}
                  className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="font-bold text-navy">{member.name}</h3>
                <p className="text-blue text-sm font-semibold">{member.role}</p>
              </div>
            ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <CTASection
          title="Ready to Grow Your Business?"
          description="Let&rsquo;s discuss how we can help you achieve your digital goals."
          primaryLabel="Contact Us"
          primaryHref="/contact"
          secondaryLabel="View Our Work"
          secondaryHref="/portfolio"
        />
      </ScrollReveal>
    </>
  )
}
