import { Metadata } from 'next'
import Button from '@/components/Button'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionHeader from '@/components/SectionHeader'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Pricing | Boyzeth Solutions',
  description: 'View transparent pricing for digital marketing and web development services from Boyzeth Solutions. Choose from Starter, Growth, Professional, or Enterprise plans.',
}

const tiers = [
  {
    name: 'Starter',
    price: '£200',
    period: '/month',
    description: 'Perfect for small businesses taking their first step into digital.',
    features: [
      'Basic website (up to 5 pages)',
      'Social media setup (2 platforms)',
      'SEO keyword research',
      'Monthly performance report',
      'Email support',
    ],
    cta: 'Get Started',
    href: '/contact',
    popular: false,
  },
  {
    name: 'Growth',
    price: '£600',
    period: '/month',
    description: 'Ideal for growing businesses ready to scale their online presence.',
    features: [
      'Custom website (up to 10 pages)',
      'Social media management (3 platforms)',
      'On-page & technical SEO',
      'Google Ads management',
      'Content creation (4 posts/month)',
      'Priority email & phone support',
    ],
    cta: 'Get Started',
    href: '/contact',
    popular: true,
  },
  {
    name: 'Professional',
    price: '£1,200',
    period: '/month',
    description: 'For established businesses seeking comprehensive digital strategies.',
    features: [
      'Full website redesign or build',
      'Social media management (4 platforms)',
      'Advanced SEO + content strategy',
      'Google & social ads management',
      'Content creation (8 posts/month)',
      'Email marketing automation',
      'Dedicated account manager',
    ],
    cta: 'Get Started',
    href: '/contact',
    popular: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations with unique needs.',
    features: [
      'Custom web application development',
      'Multi-channel marketing strategy',
      'Enterprise SEO & CRO',
      'Full ad management (all platforms)',
      'Content studio (unlimited revisions)',
      'CRM & marketing automation',
      'Dedicated team',
      'Weekly strategy calls',
    ],
    cta: 'Contact Us',
    href: '/contact',
    popular: false,
  },
]

const faqItems = [
  {
    question: 'Can I switch plans later?',
    answer: 'Absolutely. You can upgrade or downgrade your plan at any time. We will prorate the billing and ensure a seamless transition without any disruption to your services.',
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'No. Our pricing is completely transparent. The quoted price includes all services listed in the plan. Ad spend budgets are separate and discussed based on your campaign goals.',
  },
  {
    question: 'Do you offer month-to-month contracts?',
    answer: 'Yes. We offer flexible contract terms including month-to-month options. Longer commitments come with discounted rates.',
  },
  {
    question: 'What if I need services not listed in a plan?',
    answer: 'We can create a custom package tailored to your specific needs. Contact us for a personalized quote.',
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Timelines vary by service. Website development typically takes 4–8 weeks. SEO and content marketing show meaningful results within 3–6 months. Paid ads can drive traffic immediately.',
  },
  {
    question: 'Do you serve clients outside Lagos?',
    answer: 'Yes. We work with clients across Nigeria and internationally. All our services can be delivered remotely with regular virtual check-ins.',
  },
]

export default function PricingPage() {
  return (
    <>
      <section className="pt-24 lg:pt-60 pb-24 bg-gradient-to-br from-navy via-navy to-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-80 h-80 bg-teal rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transparent Pricing
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              No hidden fees, no surprises. Choose a plan that fits your budget and goals — from essential starter packages to comprehensive enterprise solutions with dedicated support.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Pricing" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Pricing", href: "/pricing" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className={`relative bg-white rounded-3xl border-2 p-8 flex flex-col transition-all duration-300 hover:shadow-xl animate-scale-in ${
                    tier.popular
                      ? 'border-blue shadow-lg shadow-blue/10 scale-105 lg:scale-110'
                      : 'border-gray-100 hover:border-blue/20'
                  }`}
                  style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
                >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-navy mb-1">{tier.name}</h2>
                  <p className="text-gray-500 text-sm">{tier.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-navy">{tier.price}</span>
                  {tier.period && <span className="text-gray-400 text-sm">{tier.period}</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href={tier.href}
                  variant={tier.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="Compare Plans"
              title="Feature Comparison"
              description="See exactly what each plan includes so you can choose the right level of support for your business goals."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <img src="https://picsum.photos/seed/pricing-comparison-1/600/400" alt="Starter plan features for small businesses - website and social media setup" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-navy text-lg mb-2">Starter & Growth Plans</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Ideal for businesses beginning their digital journey. Includes essential website setup, social media integration, and foundational SEO to establish your online presence.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <img src="https://picsum.photos/seed/pricing-comparison-2/600/400" alt="Professional plan features for established businesses - full digital strategy" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-navy text-lg mb-2">Professional Plan</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">For established businesses needing comprehensive digital strategies. Full website redesign, multi-platform ad management, content creation, and dedicated account management.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <img src="https://picsum.photos/seed/pricing-comparison-3/600/400" alt="Enterprise plan features for large organizations - custom solutions" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-navy text-lg mb-2">Enterprise Solutions</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Tailored for large organisations with complex needs. Custom web applications, full marketing automation, dedicated team, and strategic consulting to drive enterprise growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <FAQ items={faqItems} title="Pricing FAQs" />
      </ScrollReveal>

      <ScrollReveal>
        <CTASection
          title="Need a Custom Solution?"
          description="Tell us about your project and we will create a tailored plan that fits your exact needs."
          primaryLabel="Contact Us"
          primaryHref="/contact"
          variant="navy"
        />
      </ScrollReveal>
    </>
  )
}
