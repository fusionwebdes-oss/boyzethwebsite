import { Metadata } from 'next'
import Button from '@/components/Button'
import CTASection from '@/components/CTASection'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Case Studies | Boyzeth Solutions',
  description: 'Explore detailed case studies showcasing how Boyzeth Solutions has helped businesses achieve measurable growth through digital marketing and web development.',
}

const studies = [
  {
    client: 'LuxeMart Nigeria',
    industry: 'E-commerce',
    challenge: 'LuxeMart, a Lagos-based fashion retailer, struggled with low online visibility and a dated website that converted less than 1% of visitors. Their social media presence was fragmented across platforms with no cohesive strategy. With increasing competition from international brands entering the Nigerian market, LuxeMart needed an immediate digital transformation to protect their market share and attract a younger, digitally-savvy customer base.',
    solution: 'We rebuilt their e-commerce platform on Shopify with a modern, mobile-first design optimized for speed. We implemented a full digital marketing strategy including SEO, Google Ads, Instagram and Facebook campaigns, and email marketing automation. The new platform featured seamless payment integration with local gateways, a streamlined checkout process, and personalised product recommendations powered by customer behaviour data.',
    results: [
      { metric: '320%', label: 'Increase in organic traffic' },
      { metric: '5.2%', label: 'Conversion rate (up from 0.8%)' },
      { metric: '₦12M+', label: 'Additional revenue in 6 months' },
    ],
    slug: 'luxemart-nigeria',
  },
  {
    client: 'ProServe Africa',
    industry: 'Professional Services',
    challenge: 'ProServe Africa, a business consulting firm in Victoria Island, had no digital presence beyond a basic LinkedIn page. They needed a professional website and lead generation system to attract corporate clients. Without an online footprint, they were missing out on major RFPs and corporate contracts that required a credible digital presence and case study portfolio.',
    solution: 'We designed a sleek corporate website with case study showcases and a blog. We built a LinkedIn and Google Ads lead generation engine with targeted landing pages, and implemented a CRM integration for automated follow-ups. Each landing page was A/B tested to maximise conversion rates, and we set up analytics dashboards to track lead quality and sales pipeline movement in real time.',
    results: [
      { metric: '85+', label: 'Qualified leads in 3 months' },
      { metric: '40%', label: 'Email open rate' },
      { metric: '3x', label: 'ROI on ad spend' },
    ],
    slug: 'proserve-africa',
  },
  {
    client: 'GreenRoots Agro',
    industry: 'Agriculture',
    challenge: 'GreenRoots Agro, an agritech startup in Ibadan, needed to raise awareness for their farm-to-table platform. They had zero online presence and struggled to attract both farmers and consumers to their marketplace. Trust was a major barrier — both farmers and consumers needed reassurance about quality, freshness, and reliable delivery before committing to the platform.',
    solution: 'We developed a full brand identity and a responsive web platform. We launched a content marketing strategy featuring blog posts, YouTube tutorials, and social media campaigns targeting farmers and health-conscious consumers in Nigeria. Video testimonials from early adopters and farm-visit content helped build trust, while targeted Facebook and Instagram ads drove cost-effective sign-ups across both audiences.',
    results: [
      { metric: '15,000+', label: 'Platform sign-ups in 4 months' },
      { metric: '200+', label: 'Partner farmers onboarded' },
      { metric: '450%', label: 'Social media follower growth' },
    ],
    slug: 'greenroots-agro',
  },
]

export default function CaseStudiesPage() {
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
              Case Studies
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Real businesses, real challenges, real results. See how we have helped our clients transform their digital presence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Case Studies" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Case Studies", href: "/case-studies" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {studies.map((study, i) => (
            <ScrollReveal key={i}>
              <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 relative overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/case-study-${i + 1}/800/600`}
                    alt={`${study.client} - ${study.industry} case study by Boyzeth Solutions`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-blue/80" />
                  <div className="relative p-8 lg:p-12 flex flex-col justify-center min-h-[250px]">
                    <span className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-2">{study.industry}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{study.client}</h2>
                    <Button href={`/case-studies/${study.slug}`} variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-navy self-start">
                      View Full Study
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-3 p-8 lg:p-12 space-y-8">
                  <div>
                    <h3 className="text-sm font-bold text-blue uppercase tracking-widest mb-2">The Challenge</h3>
                    <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-blue uppercase tracking-widest mb-2">Our Solution</h3>
                    <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-blue uppercase tracking-widest mb-4">The Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {study.results.map((r, j) => (
                        <div key={j} className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-2xl md:text-3xl font-bold text-teal">{r.metric}</div>
                          <div className="text-gray-500 text-sm mt-1">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ScrollReveal>
        <CTASection
          title="Want Results Like These?"
          description="Let&rsquo;s talk about how we can help your business achieve measurable growth."
          primaryLabel="Start Your Project"
          primaryHref="/contact"
          secondaryLabel="Get a Free Audit"
          secondaryHref="/free-audit"
        />
      </ScrollReveal>
    </>
  )
}
