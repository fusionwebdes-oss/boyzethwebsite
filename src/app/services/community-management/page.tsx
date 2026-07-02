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
  title: "Professional Community Management for Brand Loyalty",
  description: "Build and nurture engaged online communities that foster brand advocacy and long-term customer relationships.",
  openGraph: {
    title: "Professional Community Management for Brand Loyalty | Boyzeth Solutions",
    description: "Build and nurture engaged online communities that foster brand advocacy and long-term customer relationships.",
  },
}

const features = [
  { title: "Daily Moderation", description: "We monitor your community channels daily to ensure conversations remain respectful, on-topic, and aligned with your brand values while promptly addressing any issues that arise.", image: "https://picsum.photos/seed/cm-feature-1/800/500" },
  { title: "Engagement Strategy", description: "We develop strategies to spark meaningful conversations, encourage user participation, and build a sense of belonging that keeps members coming back.", image: "https://picsum.photos/seed/cm-feature-2/800/500" },
  { title: "Crisis Management", description: "Our team is trained to handle sensitive situations, negative feedback, and PR challenges with tact and professionalism, protecting your brand reputation.", image: "https://picsum.photos/seed/cm-feature-3/800/500" },
  { title: "User-Generated Content", description: "We encourage and curate user-generated content from your community, turning your most engaged members into brand advocates and content creators.", image: "https://picsum.photos/seed/cm-feature-4/800/500" },
  { title: "Community Analytics", description: "We track key community metrics including engagement rates, member growth, sentiment analysis, and response times to continuously improve your community strategy.", image: "https://picsum.photos/seed/cm-feature-5/800/500" },
  { title: "Brand Advocacy Programs", description: "We identify and nurture your most passionate community members, creating structured advocacy programs that turn loyal customers into vocal brand ambassadors.", image: "https://picsum.photos/seed/cm-feature-6/800/500" },
]

const faqItems = [
  { question: "What is included in your community management service?", answer: "Our community management service includes daily moderation, engagement strategy, crisis management, user-generated content curation, community analytics, and brand advocacy programs. We manage communities across social platforms, forums, and private groups." },
  { question: "How long does it take to build an engaged community?", answer: "Building an active, engaged community typically takes 3–6 months of consistent effort. However, our strategies are designed to show measurable engagement improvements within the first 4–6 weeks." },
  { question: "Do you work with businesses in Lagos and across Nigeria?", answer: "Yes! We build and manage communities for businesses throughout Lagos, Nigeria, and internationally. Our team understands the cultural nuances of Nigerian online communities." },
  { question: "How much does your community management service cost?", answer: "Our pricing starts at ₦200,000 per month for management of up to two platforms, with additional platforms and volume-based pricing for larger communities. Contact us for a tailored quote." },
  { question: "Can I combine community management with other services?", answer: "Absolutely. Community management and social media management go hand in hand. Many clients also combine this with content creation for community assets and strategy development for long-term planning." },
]

const relatedServices = [
  { name: "Social Media Management", href: "/services/social-media-management" },
  { name: "Content Creation", href: "/services/content-creation" },
  { name: "Strategy Development", href: "/services/strategy-development" },
]

export default function CommunityManagementPage() {
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
              Professional Community Management for Brand Loyalty
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Build and nurture engaged online communities that foster brand advocacy and long-term customer relationships.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Community Management" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Community Management", href: "/services/community-management" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Offer"
            title="Comprehensive Community Management Services"
            description="Build and nurture engaged online communities that foster brand advocacy, customer loyalty, and organic word-of-mouth growth across all your social platforms."
          />
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue/20 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={feature.image} alt={`${feature.title} - Boyzeth Solutions Community Management Service`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
              title="See Our Community Management Expertise"
              description="Every community we nurture reflects our commitment to authentic engagement, brand loyalty, and meaningful member connections."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/cm-showcase-1/600/500" alt="Active online community management with daily moderation and member engagement by Boyzeth Solutions" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Community Moderation</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/cm-showcase-2/600/500" alt="User-generated content strategy turning community members into brand advocates and content creators" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">User-Generated Content</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/cm-showcase-3/600/500" alt="Community analytics dashboard tracking engagement rates, member growth, and sentiment analysis" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Community Analytics</span>
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
        <FAQ items={faqItems} title="Community Management - FAQ" />
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="Why Choose Us"
              title="What Sets Boyzeth Solutions Apart"
              description="We build genuine, engaged communities that become your most powerful marketing asset — driving brand advocacy, customer retention, and organic growth."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/cm-why-1/200/200" alt="Community building expertise with proven strategies for growing engaged online communities" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Community Building Experts</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Our team has built and scaled communities from 0 to 50,000+ members across industries, using proven growth and engagement strategies that create lasting brand loyalty.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/cm-why-2/200/200" alt="Professional crisis management handling sensitive situations and protecting brand reputation" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Crisis Management Ready</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We're trained to handle PR challenges, negative feedback, and sensitive situations with professionalism and tact — protecting your brand's reputation at all times.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/cm-why-3/200/200" alt="Brand advocacy programs that turn loyal customers into passionate brand ambassadors" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Brand Advocacy Focus</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We don't just manage conversations — we build structured advocacy programs that transform your most engaged members into brand ambassadors who amplify your message organically.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/cm-why-4/200/200" alt="Data-driven community engagement strategy with detailed analytics and performance tracking" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Data-Driven Engagement</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Every engagement strategy is backed by data on member behavior, sentiment analysis, and response patterns — ensuring our community efforts deliver measurable results.</p>
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
          title="Ready to Build a Thriving Community?"
          description="Let's discuss how we can help your business grow with our expert community management services."
          primaryLabel="Book a Strategy Call"
          primaryHref="/contact"
          secondaryLabel="Get a Free Audit"
          secondaryHref="/free-audit"
        />
      </ScrollReveal>
    </>
  )
}
