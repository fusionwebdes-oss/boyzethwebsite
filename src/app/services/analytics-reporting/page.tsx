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
  title: "Data Analytics & Reporting Services for Informed Decisions",
  description: "Comprehensive analytics setup, tracking, and custom reporting that gives you real-time insights into your business performance.",
  openGraph: {
    title: "Data Analytics & Reporting Services for Informed Decisions | Boyzeth Solutions",
    description: "Comprehensive analytics setup, tracking, and custom reporting that gives you real-time insights into your business performance.",
  },
}

const features = [
  { title: "GA4 Setup & Management", description: "We set up Google Analytics 4 with proper event tracking, enhanced measurement, and custom dimensions to capture every meaningful interaction on your digital platforms.", image: "https://picsum.photos/seed/ar-feature-1/800/500" },
  { title: "Custom Dashboard Creation", description: "We build tailored dashboards in Looker Studio and other tools that display your most important KPIs in clear, actionable visualizations for stakeholders at every level.", image: "https://picsum.photos/seed/ar-feature-2/800/500" },
  { title: "Conversion Tracking", description: "We implement robust conversion tracking across websites, ads, and funnels — ensuring every lead, sale, and micro-conversion is accurately attributed to its source.", image: "https://picsum.photos/seed/ar-feature-3/800/500" },
  { title: "ROI Attribution", description: "We set up multi-touch attribution models that reveal which marketing channels and touchpoints contribute most to conversions, enabling smarter budget allocation.", image: "https://picsum.photos/seed/ar-feature-4/800/500" },
  { title: "Competitor Analysis", description: "We analyze your competitors' digital performance — traffic sources, keywords, ad strategies, and social engagement — to identify gaps and opportunities in your market.", image: "https://picsum.photos/seed/ar-feature-5/800/500" },
  { title: "Actionable Insights", description: "We don't just deliver data — we provide clear, actionable recommendations based on your analytics that directly inform your marketing strategy and business decisions.", image: "https://picsum.photos/seed/ar-feature-6/800/500" },
]

const faqItems = [
  { question: "What is included in your analytics and reporting service?", answer: "Our service includes GA4 setup and management, custom dashboard creation, conversion tracking, ROI attribution modeling, competitor analysis, and monthly insight reports with actionable recommendations." },
  { question: "How long does it take to set up analytics properly?", answer: "A standard analytics setup takes 1–2 weeks. More complex implementations with custom event tracking, multi-platform attribution, and historical data import may take 3–4 weeks." },
  { question: "Do you work with businesses in Lagos and across Nigeria?", answer: "Yes! We help businesses across Lagos, Nigeria, and internationally set up and interpret their analytics. Our insights are tailored to the Nigerian market context." },
  { question: "How much does your analytics and reporting service cost?", answer: "Our pricing starts at ₦180,000 per month for setup and ongoing reporting. One-time analytics audits and setup projects are also available starting at ₦350,000." },
  { question: "Can I combine analytics with other services?", answer: "Absolutely. Analytics and reporting is the backbone of effective digital marketing. We recommend combining it with paid advertising, strategy development, and web development for data-driven decision making." },
]

const relatedServices = [
  { name: "Paid Advertising", href: "/services/paid-advertising" },
  { name: "Strategy Development", href: "/services/strategy-development" },
  { name: "Web Development", href: "/services/web-development" },
]

export default function AnalyticsReportingPage() {
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
              Data Analytics & Reporting Services for Informed Decisions
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive analytics setup, tracking, and custom reporting that gives you real-time insights into your business performance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Analytics & Reporting" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Analytics & Reporting", href: "/services/analytics-reporting" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Offer"
            title="Comprehensive Analytics & Reporting Services"
            description="Comprehensive analytics setup and custom reporting dashboards that give you real-time visibility into your digital performance and actionable insights for growth."
          />
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue/20 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={feature.image} alt={`${feature.title} - Boyzeth Solutions Analytics and Reporting Service`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
              title="See Our Analytics & Reporting Expertise"
              description="Every dashboard and report we build reflects our commitment to clarity, actionable insights, and data-driven decision making."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/ar-showcase-1/600/500" alt="Google Analytics 4 setup and configuration with custom event tracking by Boyzeth Solutions" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">GA4 Setup</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/ar-showcase-2/600/500" alt="Custom Looker Studio dashboard with real-time KPI visualizations and performance metrics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Custom Dashboards</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/ar-showcase-3/600/500" alt="Multi-touch attribution model showing marketing channel performance and ROI contribution" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">ROI Attribution</span>
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
        <FAQ items={faqItems} title="Analytics & Reporting - FAQ" />
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="Why Choose Us"
              title="What Sets Boyzeth Solutions Apart"
              description="We turn raw data into clear, actionable intelligence that empowers you to make better marketing decisions and drive measurable business growth."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/ar-why-1/200/200" alt="Data analytics expertise with GA4 certification and advanced analytics implementation experience" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Deep Data Expertise</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Our team holds advanced certifications in Google Analytics, Looker Studio, and tag management — ensuring your analytics infrastructure is built to enterprise standards.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/ar-why-2/200/200" alt="Custom analytics solutions tailored to each client's unique business goals and KPIs" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Custom Solutions</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Every dashboard and tracking setup is built from scratch for your specific business. No templates, no one-size-fits-all — just analytics that answer your exact questions.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/ar-why-3/200/200" alt="Actionable insights and recommendations that translate data into clear marketing strategy decisions" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Actionable Insights</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We don&apos;t just give you numbers — we tell you what they mean and exactly what to do about it. Every report includes prioritized recommendations for improving performance.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/ar-why-4/200/200" alt="Timely monthly and weekly reporting with real-time dashboard access for stakeholders" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Timely Reporting</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">You get monthly reports delivered on the same date every month, plus real-time dashboard access so you can check your KPIs anytime, anywhere, on any device.</p>
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
          title="Ready to Make Data-Driven Decisions?"
          description="Let's discuss how we can help your business grow with our expert analytics and reporting services."
          primaryLabel="Book a Strategy Call"
          primaryHref="/contact"
          secondaryLabel="Get a Free Audit"
          secondaryHref="/free-audit"
        />
      </ScrollReveal>
    </>
  )
}
