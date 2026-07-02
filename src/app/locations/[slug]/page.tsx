import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { towns } from "@/data/towns"
import SectionHeader from "@/components/SectionHeader"
import CTASection from "@/components/CTASection"
import FAQ from "@/components/FAQ"
import ProcessSection from "@/components/ProcessSection"
import StatsSection from "@/components/StatsSection"
import TrustBadges from "@/components/TrustBadges"
import Breadcrumbs from "@/components/Breadcrumbs"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import ScrollReveal from "@/components/ScrollReveal"
import { PROCESS_STEPS, STATS } from "@/lib/constants"

interface Props {
  params: Promise<{ slug: string }>
}

const regionLabels: Record<string, string> = {
  "north-east": "North East England",
  "north-west": "North West England",
  "yorkshire-and-the-humber": "Yorkshire and the Humber",
  "east-midlands": "the East Midlands",
  "west-midlands": "the West Midlands",
  "east-of-england": "the East of England",
  "south-east": "the South East",
  "south-west": "the South West",
  "greater-london": "Greater London",
}

const regionSlugToUrl: Record<string, string> = {
  "north-east": "north-east-england",
  "north-west": "north-west-england",
  "yorkshire-and-the-humber": "yorkshire",
  "east-midlands": "east-midlands",
  "west-midlands": "west-midlands",
  "east-of-england": "east-of-england",
  "south-east": "south-east-england",
  "south-west": "south-west-england",
  "greater-london": "greater-london",
}

const serviceAreas = [
  { title: "Web Development", description: "Custom websites, web applications, and e-commerce platforms built with modern technology for speed, security, and scalability.", slug: "web-development" },
  { title: "Social Media Management", description: "Strategic social media management across all major platforms to build brand awareness, engagement, and conversions.", slug: "social-media-management" },
  { title: "SEO Blog Writing", description: "Data-driven blog content optimized for search engines that establishes authority and drives organic traffic.", slug: "blog-writing" },
  { title: "Google Business Profile", description: "Complete GBP optimisation and management to dominate local search results and attract more customers.", slug: "google-business-profile" },
  { title: "Bing Business Management", description: "Optimise your Bing presence to capture additional search traffic and reach new audiences.", slug: "bing-business-management" },
  { title: "Content Creation", description: "High-quality graphics, video, copywriting, and multimedia content that captures your brand voice.", slug: "content-creation" },
  { title: "Paid Advertising", description: "ROI-driven ad campaigns across Google, Meta, LinkedIn, and Bing that maximise conversions.", slug: "paid-advertising" },
  { title: "Community Management", description: "Build and nurture engaged online communities that foster brand advocacy and customer loyalty.", slug: "community-management" },
  { title: "Analytics & Reporting", description: "Comprehensive analytics setup and custom reporting for real-time business performance insights.", slug: "analytics-reporting" },
  { title: "Strategy Development", description: "Comprehensive digital marketing strategies aligned with business goals for sustainable growth.", slug: "strategy-development" },
]

const faqsByRegion: Record<string, { question: string; answer: string }[]> = {
  default: [
    { question: "What digital marketing services does Boyzeth Solutions offer?", answer: "We offer a full suite of digital services including web development, social media management, SEO blog writing, Google Business Profile management, paid advertising, content creation, community management, analytics, and strategy development." },
    { question: "How long does it typically take to see results from digital marketing?", answer: "Timelines vary by service. SEO content typically shows results in 3-6 months. Paid ads can drive traffic immediately, with optimal performance developing over 4-8 weeks. Web development projects take 4-12 weeks depending on complexity." },
    { question: "Do you work with businesses remotely?", answer: "Yes! We work with clients throughout the UK remotely. Our collaborative tools and streamlined processes ensure seamless communication and project delivery regardless of location." },
    { question: "How much do your services cost?", answer: "Our pricing is transparent and tailored to your needs. Monthly retainers start from £200 for our Starter plan, with Growth (£600/month) and Professional (£1,200/month) options available. Enterprise plans are custom-quoted." },
    { question: "Can I combine multiple services?", answer: "Absolutely. We recommend an integrated approach for maximum impact. Many clients combine web development with SEO content, social media management, and paid advertising for comprehensive digital growth." },
  ],
  "north-east": [
    { question: "Why should businesses in the North East invest in digital marketing?", answer: "The North East digital economy is growing rapidly, with increasing numbers of consumers researching and buying online. Investing in digital marketing helps local businesses capture this growing market, compete with national brands, and build sustainable growth in cities like Newcastle, Sunderland, and Durham." },
    { question: "What digital services are most popular with North East businesses?", answer: "Web development and Google Business Profile management are particularly popular, as many North East businesses are establishing or upgrading their online presence. Social media management and local SEO also drive strong results for businesses targeting regional audiences." },
    { question: "How long does web development take for a North East business?", answer: "Standard business websites typically take 4-6 weeks. E-commerce platforms and custom web applications may take 8-12 weeks. We work closely with you throughout the process." },
    { question: "Do you understand the North East market?", answer: "Yes. Our team has deep experience working with businesses across the North East, understanding local market dynamics, regional customer behaviours, and the competitive landscape from Newcastle to Middlesbrough." },
    { question: "Can I see examples of your work for North East clients?", answer: "We have delivered projects for clients across the UK, including the North East. Visit our portfolio page for selected case studies and examples of our web development and digital marketing work." },
  ],
  "north-west": [
    { question: "Why should businesses in the North West invest in digital marketing?", answer: "The North West is one of the UK's largest digital economies, with Manchester, Liverpool, and Preston leading the way. Digital marketing helps local businesses compete effectively, reach the region's 7M+ online consumers, and drive measurable growth." },
    { question: "What digital services are most popular with North West businesses?", answer: "Social media management and paid advertising are particularly effective in the North West's competitive market. Web development and SEO content also deliver strong ROI for businesses looking to establish or grow their online presence." },
    { question: "How long does web development take for a North West business?", answer: "Standard business websites typically take 4-6 weeks. E-commerce platforms and custom web applications may take 8-12 weeks. We work closely with you throughout the process." },
    { question: "How much do your services cost?", answer: "Our pricing is transparent and tailored to your needs. Monthly retainers start from £200 for our Starter plan, with Growth (£600/month) and Professional (£1,200/month) options available. Enterprise plans are custom-quoted." },
    { question: "Can I combine multiple services?", answer: "Absolutely. We recommend an integrated approach for maximum impact. Many clients combine web development with SEO content, social media management, and paid advertising for comprehensive digital growth." },
  ],
  "yorkshire-and-the-humber": [
    { question: "Why should businesses in Yorkshire invest in digital marketing?", answer: "Yorkshire's digital sector is thriving, with Leeds, Sheffield, and York emerging as major tech hubs. Digital marketing helps local businesses capitalise on this growth, reach the region's 5M+ online consumers, and build lasting customer relationships." },
    { question: "What digital services are most popular with Yorkshire businesses?", answer: "Web development and content creation are particularly popular in Yorkshire's creative economy. Google Business Profile management and local SEO also drive strong results for businesses in the region." },
    { question: "How long does web development take for a Yorkshire business?", answer: "Standard business websites typically take 4-6 weeks. E-commerce platforms and custom web applications may take 8-12 weeks." },
    { question: "How much do your services cost?", answer: "Our pricing is transparent and tailored to your needs. Monthly retainers start from £200 for our Starter plan, with Growth (£600/month) and Professional (£1,200/month) options available." },
    { question: "Do you work with businesses across Yorkshire?", answer: "Yes! We work with clients throughout Yorkshire, from Leeds and Sheffield to York, Hull, Harrogate, and all surrounding areas. Our remote delivery model means location is never a barrier." },
  ],
}

function getTownContent(town: { name: string; county: string; region: string }) {
  const regionLabel = regionLabels[town.region] || "the UK"
  return {
    heroTitle: `Digital Marketing & Web Development in ${town.name}`,
    heroDesc: `Professional web development, SEO, social media management, and digital marketing services tailored for businesses in ${town.name}, ${town.county}. Drive growth with Boyzeth Solutions.`,
    storyTitle: `Growing Businesses in ${town.name}`,
    storyContent: [
      `${town.name} is a vibrant town in ${regionLabel}, home to a growing community of businesses that are embracing digital transformation. At Boyzeth Solutions, we help ${town.name}-based businesses build powerful online presences that attract customers, drive sales, and fuel long-term growth.`,
      `Our team understands the unique opportunities and challenges facing businesses in ${town.name}. Whether you need a new website, better search rankings, or a comprehensive digital marketing strategy, we bring local insight combined with global best practices to every project.`,
      `From our headquarters in Lagos, Nigeria, we serve clients throughout the UK, including ${town.name} and the surrounding ${town.county} area. Our remote delivery model ensures seamless collaboration, regular communication, and outstanding results regardless of distance.`,
    ],
    whyTown: `We chose to offer dedicated services for ${town.name} because we believe every local business deserves access to world-class digital marketing expertise. The businesses of ${town.name} are the backbone of the local economy, and we are committed to helping them thrive in the digital age.`,
    ctaTitle: `Ready to Grow Your Business in ${town.name}?`,
    ctaDesc: `Let's discuss how our digital marketing services can help your ${town.name}-based business attract more customers and drive revenue.`,
  }
}

const images = [
  "https://picsum.photos/seed/location-hero-1/1200/600",
  "https://picsum.photos/seed/location-hero-2/1200/600",
  "https://picsum.photos/seed/location-hero-3/1200/600",
]

export async function generateStaticParams() {
  return towns.map((town) => ({ slug: town.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const town = towns.find((t) => t.slug === slug)
  if (!town) return {}

  const content = getTownContent(town)
  const regionLabel = regionLabels[town.region] || "the UK"

  return {
    title: `Digital Marketing & Web Development in ${town.name}, ${town.county} | Boyzeth Solutions`,
    description: `Professional web development, SEO, social media management, and digital marketing services in ${town.name}, ${town.county}. ${regionLabel}. Custom websites, Google Business Profile optimisation, paid ads, and more. Free consultation.`,
    openGraph: {
      title: `Digital Marketing & Web Development Services in ${town.name} | Boyzeth Solutions`,
      description: `Expert digital marketing services for businesses in ${town.name}, ${town.county}. Web development, SEO, social media management, and paid advertising tailored to your local market.`,
      images: [{ url: images[0] }],
    },
  }
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const town = towns.find((t) => t.slug === slug)
  if (!town) notFound()

  const content = getTownContent(town)
  const regionLabel = regionLabels[town.region] || "the UK"
  const faqItems = faqsByRegion[town.region] || faqsByRegion.default

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Boyzeth Solutions",
    description: `Digital marketing and web development agency serving businesses in ${town.name}, ${town.county}.`,
    areaServed: {
      "@type": "City",
      name: town.name,
      sameAs: `https://en.wikipedia.org/wiki/${town.name.replace(/\s+/g, "_")}`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: town.name,
      addressRegion: town.county,
      addressCountry: "GB",
    },
    telephone: "+44-7346-071355",
    email: "hello@boyzethsolutions.com",
    url: `https://www.boyzethsolutions.com/locations/${town.slug}`,
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: serviceAreas.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: `Professional ${s.title} in ${town.name}`,
        description: `${s.description} We provide expert ${s.title.toLowerCase()} services for businesses in ${town.name}, ${town.county}.`,
        provider: { "@type": "Organization", name: "Boyzeth Solutions" },
        areaServed: { "@type": "City", name: town.name },
      },
    })),
  }

  const heroImage = images[Math.floor(Math.random() * images.length)]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="pt-24 lg:pt-60 pb-24 bg-gradient-to-br from-navy via-navy to-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-80 h-80 bg-teal rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {content.heroTitle}
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              {content.heroDesc}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: town.name }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }, { name: town.name, href: `/locations/${town.slug}` }]} />

      <TrustBadges />

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-blue font-semibold text-sm uppercase tracking-widest mb-4">About {town.name}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-6">{content.storyTitle}</h2>
                {content.storyContent.map((p, i) => (
                  <p key={i} className="text-gray-500 leading-relaxed mb-4">{p}</p>
                ))}
              </div>
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                <img src={heroImage} alt={`Digital marketing and web development services in ${town.name}, ${town.county}`} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle={`Services in ${town.name}`}
              title={`Complete Digital Services for ${town.name} Businesses`}
              description={`From custom web development to social media management and SEO, we provide everything your ${town.name}-based business needs to succeed online. Every service is tailored to the ${town.county} market.`}
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {serviceAreas.map((s, i) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue/20 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-blue transition-colors">{s.title} in {town.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle={`Why ${town.name} Businesses Trust Us`}
              title={`Digital Marketing Expertise for ${town.county}`}
              description={content.whyTown}
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/loc-why-local/200/200" alt={`Local digital marketing expertise in ${town.name}, ${town.county}`} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Local Market Expertise</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We understand the ${town.name} and ${town.county} market landscape, helping you connect with local customers effectively through targeted digital strategies.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/loc-why-proven/200/200" alt={`Proven digital marketing results for UK businesses`} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Proven Results</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We have delivered 120+ successful projects for businesses across the UK with a 4.9 average client rating and measurable ROI improvements.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/loc-why-seo/200/200" alt={`SEO-optimised digital marketing strategies for businesses in ${town.name}`} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">SEO-First Approach</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Every service we deliver is built with search engines in mind, helping your ${town.name} business rank higher in local and national search results.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/loc-why-support/200/200" alt={`Dedicated support for digital marketing clients in ${town.name}`} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Dedicated Support</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">You get a dedicated account manager, regular performance updates, and ongoing support to ensure your digital marketing delivers consistent results.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle={`Our Process for ${town.name} Clients`}
              title="How We Deliver Results"
              description={`Our proven 4-step process ensures every ${town.name} client gets a tailored strategy, expert execution, and measurable outcomes.`}
              center
            />
            <ProcessSection steps={PROCESS_STEPS} />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <StatsSection stats={STATS} variant="navy" />
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle={`Pricing for ${town.name} Businesses`}
              title="Transparent, Competitive Pricing"
              description={`We offer flexible pricing plans designed to suit businesses of all sizes in ${town.name}. No hidden fees, no surprises.`}
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all text-center">
                <h3 className="text-xl font-bold text-navy mb-2">Starter</h3>
                <p className="text-gray-500 text-sm mb-4">Perfect for small businesses in ${town.name}</p>
                <div className="text-3xl font-bold text-navy mb-6">£200<span className="text-gray-400 text-sm">/month</span></div>
                <ul className="space-y-2 text-sm text-gray-600 mb-8 text-left">
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Basic website (up to 5 pages)</li>
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Social media setup (2 platforms)</li>
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>SEO keyword research</li>
                </ul>
                <Link href="/contact" className="inline-block w-full px-6 py-3 bg-blue text-white rounded-xl font-semibold hover:bg-blue-dark transition-colors text-center">Get Started</Link>
              </div>
              <div className="bg-white rounded-2xl border-2 border-blue p-8 hover:shadow-lg transition-all text-center scale-105 shadow-lg shadow-blue/10 relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</span>
                <h3 className="text-xl font-bold text-navy mb-2">Growth</h3>
                <p className="text-gray-500 text-sm mb-4">Ideal for growing ${town.name} businesses</p>
                <div className="text-3xl font-bold text-navy mb-6">£600<span className="text-gray-400 text-sm">/month</span></div>
                <ul className="space-y-2 text-sm text-gray-600 mb-8 text-left">
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Custom website (up to 10 pages)</li>
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Social media management (3 platforms)</li>
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>On-page & technical SEO</li>
                </ul>
                <Link href="/contact" className="inline-block w-full px-6 py-3 bg-blue text-white rounded-xl font-semibold hover:bg-blue-dark transition-colors text-center">Get Started</Link>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all text-center">
                <h3 className="text-xl font-bold text-navy mb-2">Professional</h3>
                <p className="text-gray-500 text-sm mb-4">For established {town.name} businesses</p>
                <div className="text-3xl font-bold text-navy mb-6">£1,200<span className="text-gray-400 text-sm">/month</span></div>
                <ul className="space-y-2 text-sm text-gray-600 mb-8 text-left">
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Full website redesign or build</li>
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Social media management (4 platforms)</li>
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Advanced SEO + content strategy</li>
                </ul>
                <Link href="/contact" className="inline-block w-full px-6 py-3 bg-blue text-white rounded-xl font-semibold hover:bg-blue-dark transition-colors text-center">Get Started</Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/pricing" className="text-blue hover:underline font-semibold text-sm">View full pricing details →</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle={`FAQ for ${town.name}`}
              title={`Frequently Asked Questions About Digital Marketing in ${town.name}`}
              description={`Common questions from businesses in ${town.name}, ${town.county} about our digital marketing and web development services.`}
              center
            />
            <FAQ items={faqItems} title={`Digital Marketing FAQ - ${town.name}`} />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <CTASection
          title={content.ctaTitle}
          description={content.ctaDesc}
          primaryLabel="Book a Free Strategy Call"
          primaryHref="/contact"
          secondaryLabel="Get a Free Audit"
          secondaryHref="/free-audit"
        />
      </ScrollReveal>
    </>
  )
}
