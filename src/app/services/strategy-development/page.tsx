import type { Metadata } from "next"
import Link from "next/link"
import SectionHeader from "@/components/SectionHeader"
import CTASection from "@/components/CTASection"
import FAQ from "@/components/FAQ"
import ProcessSection from "@/components/ProcessSection"
import StatsSection from "@/components/StatsSection"
import { PROCESS_STEPS, STATS } from "@/lib/constants"
import Breadcrumbs from "@/components/Breadcrumbs"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Digital Strategy Development for Sustainable Growth",
  description: "Comprehensive digital marketing strategies aligned with your business goals for measurable, long-term success.",
  openGraph: {
    title: "Digital Strategy Development for Sustainable Growth | Boyzeth Solutions",
    description: "Comprehensive digital marketing strategies aligned with your business goals for measurable, long-term success.",
  },
}

const features = [
  { title: "Market Research", description: "We conduct thorough market research to understand your industry landscape, customer behavior, and emerging trends that inform every aspect of your digital strategy.", image: "https://picsum.photos/seed/sd-feature-1/800/500" },
  { title: "Competitor Analysis", description: "We analyze your competitors' digital footprint — their traffic sources, content strategy, ad approach, and social presence — to identify opportunities for differentiation and growth.", image: "https://picsum.photos/seed/sd-feature-2/800/500" },
  { title: "Channel Strategy", description: "We determine the optimal mix of digital channels — SEO, paid ads, social media, email, content marketing — tailored to your audience and business objectives.", image: "https://picsum.photos/seed/sd-feature-3/800/500" },
  { title: "Budget Planning", description: "We develop realistic, data-backed budget allocations across channels and initiatives, ensuring every naira spent contributes directly to your business goals.", image: "https://picsum.photos/seed/sd-feature-4/800/500" },
  { title: "KPI Definition", description: "We define clear, measurable KPIs aligned with your business objectives — from brand awareness metrics to revenue targets — so you can track real progress.", image: "https://picsum.photos/seed/sd-feature-5/800/500" },
  { title: "Roadmap Creation", description: "We deliver a comprehensive 6–12 month roadmap with phased initiatives, milestones, and timelines that guide your digital transformation step by step.", image: "https://picsum.photos/seed/sd-feature-6/800/500" },
]

const faqItems = [
  { question: "What is included in your strategy development service?", answer: "Our strategy development service includes market research, competitor analysis, channel strategy, budget planning, KPI definition, and a comprehensive roadmap. The final deliverable is a detailed strategy document with actionable recommendations." },
  { question: "How long does it take to develop a digital strategy?", answer: "A comprehensive digital strategy typically takes 4–6 weeks to develop, including research, analysis, strategy formulation, and documentation. Accelerated timelines are available for focused initiatives." },
  { question: "Do you work with businesses in Lagos and across Nigeria?", answer: "Yes! We develop digital strategies for businesses throughout Lagos, Nigeria, and internationally. Our strategies are grounded in local market realities while incorporating global best practices." },
  { question: "How much does your strategy development service cost?", answer: "Our strategy development projects start at ₦500,000 for a comprehensive digital marketing strategy. Pricing depends on market complexity, number of channels, and business scope." },
  { question: "Can I combine strategy development with other services?", answer: "Absolutely. Strategy development is the foundation for all other digital services. Many clients start with strategy, then engage us for execution across web development, paid advertising, and content creation." },
]

const relatedServices = [
  { name: "Analytics & Reporting", href: "/services/analytics-reporting" },
  { name: "Paid Advertising", href: "/services/paid-advertising" },
  { name: "Web Development", href: "/services/web-development" },
]

export default function StrategyDevelopmentPage() {
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
              Digital Strategy Development for Sustainable Growth
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital marketing strategies aligned with your business goals for measurable, long-term success.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Strategy Development" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Strategy Development", href: "/services/strategy-development" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Offer"
            title="Comprehensive Strategy Development Services"
            description="Comprehensive digital marketing strategies aligned with your business goals, combining market research, competitive analysis, and data-driven planning for sustainable growth."
          />
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue/20 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={feature.image} alt={`${feature.title} - Boyzeth Solutions Strategy Development Service`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="Our Work in Action"
              title="See Our Strategy Development Expertise"
              description="Every strategy we develop reflects our commitment to research, clarity, and actionable plans that drive real business growth."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/sd-showcase-1/600/500" alt="Market research and competitor analysis dashboard informing digital strategy development by Boyzeth Solutions" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Market Research</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/sd-showcase-2/600/500" alt="Digital channel strategy planning showing optimal marketing mix across SEO, paid ads, and social media" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Channel Strategy</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/sd-showcase-3/600/500" alt="Comprehensive 12-month digital marketing roadmap with milestones and phased initiatives" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Strategic Roadmap</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <ProcessSection steps={PROCESS_STEPS} />
      </ScrollReveal>

      <ScrollReveal>
        <StatsSection stats={STATS} />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ items={faqItems} title="Strategy Development - FAQ" />
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="Why Choose Us"
              title="What Sets Boyzeth Solutions Apart"
              description="We combine deep strategic thinking with hands-on execution experience to create digital marketing strategies that are ambitious yet achievable, grounded in real data."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/sd-why-1/200/200" alt="Strategic thinking combining business analysis, market research, and creative planning" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Strategic Thinking</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Our strategists combine business analysis, market research, and creative planning to develop strategies that address your unique challenges and capitalize on your opportunities.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/sd-why-2/200/200" alt="In-depth market research capabilities covering industry trends, customer behavior, and competitive landscape" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">In-Depth Research</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We invest heavily in research — analyzing your market, competitors, customers, and industry trends — so every recommendation in your strategy is backed by solid evidence.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/sd-why-3/200/200" alt="Actionable strategic roadmaps with clear milestones, timelines, and measurable KPIs" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Actionable Roadmaps</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Your strategy won't sit on a shelf. We deliver clear, phased roadmaps with specific actions, timelines, budgets, and KPIs that your team can execute immediately.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/sd-why-4/200/200" alt="Long-term partnership approach with ongoing strategy refinement and performance monitoring" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Long-Term Partnership</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We don't hand over a document and disappear. We partner with you to implement the strategy, track progress, and refine your approach as your business grows and markets evolve.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Explore More" title="Related Services" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedServices.map((s, i) => (
              <Link key={i} href={s.href} className="p-6 bg-white rounded-xl border border-gray-100 hover:border-blue/20 hover:shadow-lg transition-all text-center group">
                <h3 className="font-semibold text-navy group-hover:text-blue transition-colors">{s.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal>
        <CTASection
          title="Ready to Build Your Digital Strategy?"
          description="Let's discuss how we can help your business grow with our expert strategy development services."
          primaryLabel="Book a Strategy Call"
          primaryHref="/contact"
          secondaryLabel="Get a Free Audit"
          secondaryHref="/free-audit"
        />
      </ScrollReveal>
    </>
  )
}
