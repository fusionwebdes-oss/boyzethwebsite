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
  title: "Bing Business Management Services to Expand Your Reach",
  description: "Optimize your Bing presence to capture additional search traffic and reach users on Microsoft-powered platforms.",
  openGraph: {
    title: "Bing Business Management Services to Expand Your Reach | Boyzeth Solutions",
    description: "Optimize your Bing presence to capture additional search traffic and reach users on Microsoft-powered platforms.",
  },
}

const features = [
  { title: "Bing Places Optimization", description: "We fully optimize your Bing Places for Business listing with accurate details, categories, photos, and attributes to maximize visibility on Bing search and maps.", image: "https://picsum.photos/seed/bing-feature-1/800/500" },
  { title: "Bing Webmaster Tools", description: "We set up and manage your Bing Webmaster Tools account, submit sitemaps, monitor crawl status, and identify optimization opportunities for better Bing rankings.", image: "https://picsum.photos/seed/bing-feature-2/800/500" },
  { title: "Listing Management", description: "We ensure your business information is consistent and accurate across Bing, Yahoo, and all Microsoft-powered search platforms to build trust and improve local rankings.", image: "https://picsum.photos/seed/bing-feature-3/800/500" },
  { title: "Review Monitoring", description: "We track and respond to reviews on Bing platforms, helping you maintain a positive reputation and showing Bing's algorithm that your business is actively engaged.", image: "https://picsum.photos/seed/bing-feature-4/800/500" },
  { title: "Analytics Tracking", description: "We monitor your Bing performance metrics including impressions, clicks, and search queries to understand how users find your business and refine your strategy.", image: "https://picsum.photos/seed/bing-feature-5/800/500" },
  { title: "Multi-Platform Sync", description: "We synchronize your business data across Bing, Google, and other major directories to ensure consistent NAP (Name, Address, Phone) information everywhere.", image: "https://picsum.photos/seed/bing-feature-6/800/500" },
]

const faqItems = [
  { question: "What is included in your Bing business management service?", answer: "Our service includes Bing Places optimization, Webmaster Tools setup, listing management, review monitoring, analytics tracking, and multi-platform synchronization. We ensure your business is fully visible across Microsoft's search ecosystem." },
  { question: "How long does it take to see results from Bing management?", answer: "Initial optimizations take effect within 1–2 weeks of profile verification. Significant improvements in Bing search visibility and traffic typically become apparent within 4–8 weeks." },
  { question: "Do you work with businesses in Lagos and across Nigeria?", answer: "Yes! We help Nigerian businesses optimize their Bing presence to capture the significant traffic coming from Bing, Yahoo, and Microsoft Edge users across Lagos and the entire country." },
  { question: "How much does your Bing business management service cost?", answer: "Our pricing starts at ₦120,000 per month for single-location businesses. Multi-location and enterprise plans are quoted based on your specific needs and scope." },
  { question: "Can I combine Bing management with other services?", answer: "Absolutely. Bing management works best alongside Google Business Profile management, analytics and reporting, and paid advertising for complete search visibility across all platforms." },
]

const relatedServices = [
  { name: "Google Business Profile", href: "/services/google-business-profile" },
  { name: "Analytics & Reporting", href: "/services/analytics-reporting" },
  { name: "Strategy Development", href: "/services/strategy-development" },
]

export default function BingBusinessManagementPage() {
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
              Bing Business Management Services to Expand Your Reach
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Optimize your Bing presence to capture additional search traffic and reach users on Microsoft-powered platforms.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Bing Business Management" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Bing Business Management", href: "/services/bing-business-management" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Offer"
            title="Comprehensive Bing Business Management Services"
            description="Unlock the untapped potential of Bing's search audience with comprehensive profile optimization, ad management, and listing management tailored to your business."
          />
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue/20 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={feature.image} alt={`${feature.title} - Boyzeth Solutions Bing Business Management Service`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
              title="See Our Bing Management Expertise"
              description="Every Bing profile we optimize reflects our commitment to expanding your search reach and capturing untapped traffic."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/bing-showcase-1/600/500" alt="Optimized Bing Places for Business listing with complete profile information by Boyzeth Solutions" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Bing Places Setup</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/bing-showcase-2/600/500" alt="Bing Webmaster Tools dashboard showing site performance and crawl statistics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Webmaster Tools</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/bing-showcase-3/600/500" alt="Multi-platform business listing synchronization across Bing, Google, and Yahoo directories" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Listing Sync</span>
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
        <FAQ items={faqItems} title="Bing Business Management - FAQ" />
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="Why Choose Us"
              title="What Sets Boyzeth Solutions Apart"
              description="We help Nigerian businesses unlock the massive untapped potential of Bing's search network with specialized optimization strategies that drive real results."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/bing-why-1/200/200" alt="Bing search optimization expertise with knowledge of Microsoft's ranking algorithms and best practices" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Bing Expertise</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Our team has deep knowledge of Bing&apos;s unique ranking factors, Webmaster Tools, and advertising platform — giving you a specialized advantage most agencies can&apos;t offer.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/bing-why-2/200/200" alt="Untapped search traffic potential on Bing, Yahoo, and Microsoft Edge delivering additional customers" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Untapped Opportunity</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">While most businesses focus solely on Google, Bing drives 15% of global search traffic. Our clients gain a competitive edge by capturing this overlooked audience before their competitors do.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/bing-why-3/200/200" alt="Cross-platform business data synchronization ensuring consistent NAP information everywhere" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Cross-Platform Sync</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We ensure your business data is consistent across Bing, Google, Yahoo, Apple Maps, and 20+ other directories — eliminating confusion and building trust with both users and algorithms.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/bing-why-4/200/200" alt="Dedicated support team providing ongoing Bing profile management and optimization assistance" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Dedicated Support</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">You get a dedicated account manager who monitors your Bing presence daily and provides regular updates on performance, opportunities, and recommendations for improvement.</p>
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
          title="Ready to Expand Your Search Reach?"
          description="Let's discuss how we can help your business grow with our expert Bing management services."
          primaryLabel="Book a Strategy Call"
          primaryHref="/contact"
          secondaryLabel="Get a Free Audit"
          secondaryHref="/free-audit"
        />
      </ScrollReveal>
    </>
  )
}
