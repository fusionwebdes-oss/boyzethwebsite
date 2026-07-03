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
  title: "Social Media Management Services That Drive Engagement",
  description: "Strategic social media management across all major platforms to build brand awareness, engagement, and conversions.",
  openGraph: {
    title: "Social Media Management Services That Drive Engagement | Boyzeth Solutions",
    description: "Strategic social media management across all major platforms to build brand awareness, engagement, and conversions.",
  },
}

const features = [
  { title: "Content Strategy", description: "We develop a data-driven content calendar aligned with your brand voice and business goals. Every post is crafted to resonate with your target audience and drive meaningful engagement.", image: "https://picsum.photos/seed/sm-feature-1/800/500" },
  { title: "Platform Management", description: "We manage your presence across Instagram, Facebook, LinkedIn, Twitter, and TikTok — handling posting, scheduling, and optimization so you can focus on running your business.", image: "https://picsum.photos/seed/sm-feature-2/800/500" },
  { title: "Community Engagement", description: "Our team responds to comments, messages, and mentions promptly, fostering genuine connections with your audience and building a loyal community around your brand.", image: "https://picsum.photos/seed/sm-feature-3/800/500" },
  { title: "Paid Social Campaigns", description: "We design and manage targeted ad campaigns on social platforms to expand your reach, generate leads, and drive conversions with optimized ad spend.", image: "https://picsum.photos/seed/sm-feature-4/800/500" },
  { title: "Analytics & Reporting", description: "Monthly performance reports with actionable insights on engagement rates, follower growth, reach, and conversion metrics to continuously refine your strategy.", image: "https://picsum.photos/seed/sm-feature-5/800/500" },
  { title: "Influencer Partnerships", description: "We identify and connect with relevant influencers in your niche to amplify your brand message and tap into established, engaged audiences.", image: "https://picsum.photos/seed/sm-feature-6/800/500" },
]

const faqItems = [
  { question: "What is included in your social media management service?", answer: "Our service includes content strategy development, platform management, community engagement, paid social campaigns, analytics reporting, and influencer partnership coordination. We tailor our approach based on your industry, goals, and target audience." },
  { question: "How long does it take to see results from social media management?", answer: "Most clients begin seeing meaningful engagement growth within 4–6 weeks. Significant follower growth and conversion improvements typically become visible after 3 months of consistent, optimized posting and community engagement." },
  { question: "Do you work with businesses in Lagos and across Nigeria?", answer: "Yes! We serve businesses throughout Lagos, Nigeria, and internationally. Our team understands the Nigerian social media landscape and crafts content that resonates with local audiences while maintaining global best practices." },
  { question: "How much does your social media management service cost?", answer: "Our pricing is customized based on the number of platforms, posting frequency, and additional services like paid advertising. Packages start at ₦250,000 per month. Contact us for a free consultation and tailored quote." },
  { question: "Can I combine social media management with other services?", answer: "Absolutely. Social media works best when integrated with other digital efforts. Many clients combine this with content creation, blog writing, and paid advertising for a comprehensive digital presence." },
]

const relatedServices = [
  { name: "Content Creation", href: "/services/content-creation" },
  { name: "Community Management", href: "/services/community-management" },
  { name: "Paid Advertising", href: "/services/paid-advertising" },
]

export default function SocialMediaManagementPage() {
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
              Social Media Management Services That Drive Engagement
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Strategic social media management across all major platforms to build brand awareness, engagement, and conversions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Social Media Management" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Social Media Management", href: "/services/social-media-management" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Offer"
            title="Comprehensive Social Media Management Services"
            description="From content strategy to platform management and paid social campaigns, we deliver end-to-end social media solutions that build brand awareness, drive engagement, and generate measurable returns."
          />
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue/20 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={feature.image} alt={`${feature.title} - Boyzeth Solutions Social Media Management Service`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
              title="See Our Social Media Expertise"
              description="Every campaign we manage reflects our commitment to engagement, brand growth, and measurable social media results."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/sm-showcase-1/600/500" alt="Social media content calendar and strategy planning dashboard by Boyzeth Solutions" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Content Strategy</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/sm-showcase-2/600/500" alt="Multi-platform social media management dashboard showing Instagram, Facebook, and LinkedIn analytics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Platform Management</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/sm-showcase-3/600/500" alt="Paid social campaign performance dashboard with engagement and conversion metrics by Boyzeth Solutions" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Paid Campaigns</span>
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
        <FAQ items={faqItems} title="Social Media Management - FAQ" />
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="Why Choose Us"
              title="What Sets Boyzeth Solutions Apart"
              description="We combine creative strategy with data-driven execution to deliver social media management that doesn&apos;t just build followers — it builds your business."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/sm-why-1/200/200" alt="Proven social media results with measurable engagement growth for businesses across Nigeria and UK" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Proven Social Media Results</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We have helped 50+ businesses grow their social media presence with an average 200% increase in engagement rates and 3x follower growth within six months.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/sm-why-2/200/200" alt="Multi-platform social media expertise across Instagram, Facebook, LinkedIn, Twitter, and TikTok" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Multi-Platform Expertise</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We master every major platform — Instagram, Facebook, LinkedIn, Twitter, TikTok, and more — tailoring content and strategy to each platform&apos;s unique algorithm and audience.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/sm-why-3/200/200" alt="Data-driven social media strategy with comprehensive analytics and performance tracking" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Data-Driven Strategy</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Every post, campaign, and engagement is guided by real performance data. We continuously analyze what works and refine our approach to maximize your ROI.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/sm-why-4/200/200" alt="Dedicated social media account manager providing personalized support and strategy guidance" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Dedicated Account Manager</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">You get a dedicated account manager who knows your brand inside out, provides regular updates, and is always available to discuss strategy and performance.</p>
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
          title="Ready to Transform Your Social Media Presence?"
          description="Let's discuss how we can help your business grow with our expert social media management services."
          primaryLabel="Book a Strategy Call"
          primaryHref="/contact"
          secondaryLabel="Get a Free Audit"
          secondaryHref="/free-audit"
        />
      </ScrollReveal>
    </>
  )
}
