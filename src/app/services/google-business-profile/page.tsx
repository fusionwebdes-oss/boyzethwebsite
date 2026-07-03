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
  title: "Google Business Profile Management for Local SEO Dominance",
  description: "Complete GBP optimization and management to boost local search visibility and drive foot traffic.",
  openGraph: {
    title: "Google Business Profile Management for Local SEO Dominance | Boyzeth Solutions",
    description: "Complete GBP optimization and management to boost local search visibility and drive foot traffic.",
  },
}

const features = [
  { title: "Profile Optimization", description: "We fully optimize your Google Business Profile with accurate business information, categories, attributes, and high-quality photos to ensure maximum visibility in local search results.", image: "https://picsum.photos/seed/gbp-feature-1/800/500" },
  { title: "Review Management", description: "We implement a systematic approach to generating, monitoring, and responding to customer reviews — boosting your rating and showing Google you&apos;re an active, engaged business.", image: "https://picsum.photos/seed/gbp-feature-2/800/500" },
  { title: "Post Creation", description: "We create engaging Google Posts — including offers, events, updates, and product highlights — that appear directly in your GBP listing and attract local customers.", image: "https://picsum.photos/seed/gbp-feature-3/800/500" },
  { title: "Q&A Management", description: "We monitor and respond to questions on your profile, and proactively seed frequently asked questions with detailed answers to guide potential customers.", image: "https://picsum.photos/seed/gbp-feature-4/800/500" },
  { title: "Insights Analysis", description: "We analyze your GBP performance data — search queries, profile views, direction requests, and phone calls — to refine your local SEO strategy continuously.", image: "https://picsum.photos/seed/gbp-feature-5/800/500" },
  { title: "Multi-Location Management", description: "For businesses with multiple branches, we manage all profiles from a central dashboard, ensuring consistent information and optimized performance across every location.", image: "https://picsum.photos/seed/gbp-feature-6/800/500" },
]

const faqItems = [
  { question: "What is included in your Google Business Profile management service?", answer: "Our GBP management service includes profile optimization, review management, post creation, Q&A management, insights analysis, and multi-location management. We ensure your profile is fully optimized to rank in Google's local pack and attract nearby customers." },
  { question: "How long does it take to see results from GBP management?", answer: "Most clients see improvements in profile views and search impressions within 2–4 weeks. Achieving top 3 local pack rankings typically takes 2–3 months of consistent optimization and review management." },
  { question: "Do you work with businesses in Lagos and across Nigeria?", answer: "Yes! We specialize in helping Lagos businesses dominate local search results. Whether you&apos;re in Ikeja, Victoria Island, Lekki, or anywhere in Nigeria, our GBP strategies are tailored to your local market." },
  { question: "How much does your GBP management service cost?", answer: "Our pricing starts at ₦150,000 per month for single-location businesses. Multi-location management and enterprise plans are quoted based on the number of profiles and scope of work." },
  { question: "Can I combine GBP management with other services?", answer: "Absolutely. GBP management works best alongside Bing Business Management, local SEO content, and paid advertising to create a comprehensive local digital presence." },
]

const relatedServices = [
  { name: "Bing Business Management", href: "/services/bing-business-management" },
  { name: "Analytics & Reporting", href: "/services/analytics-reporting" },
  { name: "Paid Advertising", href: "/services/paid-advertising" },
]

export default function GoogleBusinessProfilePage() {
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
              Google Business Profile Management for Local SEO Dominance
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Complete GBP optimization and management to boost local search visibility and drive foot traffic.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Google Business Profile" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Google Business Profile", href: "/services/google-business-profile" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Offer"
            title="Comprehensive GBP Management Services"
            description="Complete Google Business Profile optimization and management services that boost local search visibility, attract more customers, and drive foot traffic to your physical locations."
          />
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue/20 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={feature.image} alt={`${feature.title} - Boyzeth Solutions GBP Management Service`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
              title="See Our GBP Management Expertise"
              description="Every profile we manage reflects our commitment to local search excellence and tangible business results."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/gbp-showcase-1/600/500" alt="Fully optimized Google Business Profile showing complete business information and categories by Boyzeth Solutions" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Profile Optimization</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/gbp-showcase-2/600/500" alt="Customer review management and response strategy for Google Business Profile by Boyzeth Solutions" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Review Management</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/gbp-showcase-3/600/500" alt="Google Business Profile insights and analytics dashboard showing local search performance metrics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Performance Insights</span>
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
        <FAQ items={faqItems} title="Google Business Profile Management - FAQ" />
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="Why Choose Us"
              title="What Sets Boyzeth Solutions Apart"
              description="We specialize in dominating local search results for businesses across Nigeria, combining technical GBP expertise with proven local SEO strategies that drive real foot traffic."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/gbp-why-1/200/200" alt="Local SEO specialists with deep knowledge of Google Business Profile optimization for Nigerian businesses" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Local SEO Specialists</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Our team stays at the forefront of Google&apos;s local search algorithm updates, ensuring your GBP is always optimized using the latest best practices and strategies.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/gbp-why-2/200/200" alt="Proven results with clients ranking in Google's local 3-pack across Lagos and Nigerian markets" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Proven Local Results</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We have helped 40+ businesses achieve top 3 rankings in Google&apos;s local pack, with an average 150% increase in profile views and direction requests within 3 months.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/gbp-why-3/200/200" alt="Comprehensive GBP management covering optimization, reviews, posts, Q&A, and analytics" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Comprehensive Approach</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We don&apos;t just set up your profile — we manage every aspect including reviews, posts, Q&A, insights, and multi-location coordination for complete local dominance.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/gbp-why-4/200/200" alt="Transparent monthly reporting with detailed GBP performance metrics and actionable recommendations" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Transparent Reporting</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">You receive detailed monthly reports showing profile views, search impressions, customer actions, and review trends — so you always know exactly how your profile is performing.</p>
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
          title="Ready to Dominate Local Search?"
          description="Let's discuss how we can help your business grow with our expert GBP management services."
          primaryLabel="Book a Strategy Call"
          primaryHref="/contact"
          secondaryLabel="Get a Free Audit"
          secondaryHref="/free-audit"
        />
      </ScrollReveal>
    </>
  )
}
