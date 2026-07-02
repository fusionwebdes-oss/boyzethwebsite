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
  title: "ROI-Focused Paid Advertising Management Services",
  description: "Strategic paid ad campaigns across Google, Meta, LinkedIn, and Bing that maximize ROI and minimize CPA.",
  openGraph: {
    title: "ROI-Focused Paid Advertising Management Services | Boyzeth Solutions",
    description: "Strategic paid ad campaigns across Google, Meta, LinkedIn, and Bing that maximize ROI and minimize CPA.",
  },
}

const features = [
  { title: "Google Ads", description: "We manage high-performing Google Search, Display, Shopping, and YouTube campaigns with strategic keyword targeting, ad copy optimization, and bid management to maximize your ad spend.", image: "https://picsum.photos/seed/pa-feature-1/800/500" },
  { title: "Facebook & Instagram Ads", description: "We create compelling Meta ad campaigns with precise audience targeting, creative testing, and funnel optimization to drive awareness, engagement, and conversions.", image: "https://picsum.photos/seed/pa-feature-2/800/500" },
  { title: "LinkedIn Advertising", description: "We run targeted LinkedIn ad campaigns including Sponsored Content, InMail, and Lead Gen Forms to reach decision-makers and B2B audiences effectively.", image: "https://picsum.photos/seed/pa-feature-3/800/500" },
  { title: "Retargeting Campaigns", description: "We set up sophisticated retargeting funnels that re-engage website visitors and past customers, dramatically improving conversion rates and lowering acquisition costs.", image: "https://picsum.photos/seed/pa-feature-4/800/500" },
  { title: "A/B Testing", description: "We continuously test ad creatives, copy, audience segments, landing pages, and bidding strategies to identify winning combinations and optimize campaign performance.", image: "https://picsum.photos/seed/pa-feature-5/800/500" },
  { title: "Conversion Tracking", description: "We implement comprehensive conversion tracking and attribution models across all platforms, giving you clear visibility into which campaigns drive real business results.", image: "https://picsum.photos/seed/pa-feature-6/800/500" },
]

const faqItems = [
  { question: "What is included in your paid advertising service?", answer: "Our paid advertising service includes campaign strategy, ad creation, platform management, audience targeting, A/B testing, conversion tracking, and monthly performance reporting across Google, Meta, LinkedIn, and Bing." },
  { question: "How long does it take to see results from paid advertising?", answer: "Paid ads can start driving traffic within hours of launch. However, optimal performance — including stable CPA and strong ROAS — typically develops over 4–8 weeks as we gather data and refine targeting." },
  { question: "Do you work with businesses in Lagos and across Nigeria?", answer: "Yes! We run paid ad campaigns for businesses throughout Lagos and Nigeria. We understand the nuances of the Nigerian digital advertising landscape and optimize campaigns for local audiences." },
  { question: "How much does your paid advertising service cost?", answer: "Our management fee is typically 15–20% of ad spend, with a minimum management fee of ₦200,000 per month. We work with budgets from ₦500,000 to ₦10,000,000+ per month depending on your goals." },
  { question: "Can I combine paid advertising with other services?", answer: "Absolutely. Paid advertising delivers maximum impact when combined with analytics and reporting for tracking, content creation for ad assets, and strategy development for overall campaign direction." },
]

const relatedServices = [
  { name: "Analytics & Reporting", href: "/services/analytics-reporting" },
  { name: "Social Media Management", href: "/services/social-media-management" },
  { name: "Strategy Development", href: "/services/strategy-development" },
]

export default function PaidAdvertisingPage() {
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
              ROI-Focused Paid Advertising Management Services
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Strategic paid ad campaigns across Google, Meta, LinkedIn, and Bing that maximize ROI and minimize CPA.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Paid Advertising" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Paid Advertising", href: "/services/paid-advertising" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Offer"
            title="Comprehensive Paid Advertising Services"
            description="Data-driven paid ad campaigns across Google, Meta, LinkedIn, and Bing that maximize ROI, minimize CPA, and deliver measurable business results from day one."
          />
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue/20 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={feature.image} alt={`${feature.title} - Boyzeth Solutions Paid Advertising Service`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
              title="See Our Paid Advertising Expertise"
              description="Every campaign we manage reflects our commitment to ROI, data-driven optimization, and measurable business outcomes."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/pa-showcase-1/600/500" alt="Google Ads campaign management dashboard showing search, display, and shopping campaign performance" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Google Ads</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/pa-showcase-2/600/500" alt="Facebook and Instagram ad campaign with audience targeting and creative testing by Boyzeth Solutions" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Meta Advertising</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/pa-showcase-3/600/500" alt="LinkedIn B2B advertising campaign targeting decision-makers with Sponsored Content and InMail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">LinkedIn Ads</span>
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
        <FAQ items={faqItems} title="Paid Advertising - FAQ" />
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="Why Choose Us"
              title="What Sets Boyzeth Solutions Apart"
              description="We take an ROI-first approach to paid advertising, combining strategic planning with continuous optimization to deliver campaigns that maximize every naira of your ad budget."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/pa-why-1/200/200" alt="ROI-focused paid advertising approach that maximizes returns and minimizes cost per acquisition" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">ROI-First Approach</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Every campaign we launch is built around your target ROAS and CPA. We optimize relentlessly to ensure every naira spent drives maximum return on investment.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/pa-why-2/200/200" alt="Multi-platform advertising expertise across Google, Meta, LinkedIn, and Bing ad platforms" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Multi-Platform Mastery</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We manage campaigns across Google, Meta, LinkedIn, and Bing — finding the perfect platform mix for your business and optimizing each platform's unique strengths.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/pa-why-3/200/200" alt="Continuous A/B testing and campaign optimization to improve performance and reduce costs" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Continuous Optimization</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We never set and forget. Our team continuously A/B tests creatives, audiences, bids, and landing pages to systematically improve performance and lower costs.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/pa-why-4/200/200" alt="Transparent paid advertising reporting with detailed campaign metrics and performance insights" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Transparent Reporting</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">You get full visibility into every campaign with detailed reports showing spend, impressions, clicks, conversions, and ROI — no black boxes, no hidden metrics.</p>
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
          title="Ready to Maximize Your Ad ROI?"
          description="Let's discuss how we can help your business grow with our expert paid advertising services."
          primaryLabel="Book a Strategy Call"
          primaryHref="/contact"
          secondaryLabel="Get a Free Audit"
          secondaryHref="/free-audit"
        />
      </ScrollReveal>
    </>
  )
}
