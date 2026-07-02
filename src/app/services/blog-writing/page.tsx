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
  title: "SEO Blog Writing Services That Rank & Convert",
  description: "Data-driven blog content optimized for search engines that establishes authority and drives organic traffic.",
  openGraph: {
    title: "SEO Blog Writing Services That Rank & Convert | Boyzeth Solutions",
    description: "Data-driven blog content optimized for search engines that establishes authority and drives organic traffic.",
  },
}

const features = [
  { title: "SEO Keyword Research", description: "We conduct in-depth keyword research to identify high-value, low-competition terms your audience is searching for, ensuring every blog post targets queries that drive qualified traffic.", image: "https://picsum.photos/seed/blog-feature-1/800/500" },
  { title: "Topic Strategy", description: "Our team develops a comprehensive topic cluster strategy that establishes topical authority, improves site architecture, and signals expertise to search engines for better rankings.", image: "https://picsum.photos/seed/blog-feature-2/800/500" },
  { title: "Long-Form Content", description: "We create comprehensive, authoritative long-form articles (1,500–3,000 words) that provide genuine value to readers while satisfying Google's E-E-A-T requirements for higher search placement.", image: "https://picsum.photos/seed/blog-feature-3/800/500" },
  { title: "Editorial Planning", description: "We manage your entire editorial calendar — from content ideation and outlining to drafting, editing, and publishing — ensuring consistent, high-quality output every week.", image: "https://picsum.photos/seed/blog-feature-4/800/500" },
  { title: "Content Optimization", description: "Every article undergoes meticulous on-page SEO optimization including meta titles, descriptions, header structure, internal linking, image alt text, and readability scoring.", image: "https://picsum.photos/seed/blog-feature-5/800/500" },
  { title: "Guest Posting", description: "We secure high-quality guest posting opportunities on authoritative sites in your industry to build backlinks, drive referral traffic, and boost your domain authority.", image: "https://picsum.photos/seed/blog-feature-6/800/500" },
]

const faqItems = [
  { question: "What is included in your blog writing service?", answer: "Our blog writing service includes SEO keyword research, topic strategy development, content creation, editorial planning, on-page optimization, and guest posting. Each post is written by experienced writers and optimized to rank on search engines." },
  { question: "How long does it take to see results from blog writing?", answer: "SEO content typically takes 3–6 months to achieve strong rankings, though some posts may see results sooner. We focus on creating high-quality, authoritative content that builds momentum over time for sustainable organic growth." },
  { question: "Do you work with businesses in Lagos and across Nigeria?", answer: "Yes! We serve businesses throughout Lagos, Nigeria, and internationally. Our writers understand both local and global search landscapes, creating content that resonates with Nigerian audiences while ranking globally." },
  { question: "How much does your blog writing service cost?", answer: "Pricing depends on article length, research depth, and volume. Individual blog posts start at ₦80,000, with discounted rates available for monthly retainers of 4–8 posts. Contact us for a customized quote." },
  { question: "Can I combine blog writing with other services?", answer: "Absolutely. Blog writing works best alongside web development, content creation, and strategy development. Many clients integrate blog content with their social media and email marketing for maximum reach." },
]

const relatedServices = [
  { name: "Content Creation", href: "/services/content-creation" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Strategy Development", href: "/services/strategy-development" },
]

export default function BlogWritingPage() {
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
              SEO Blog Writing Services That Rank & Convert
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Data-driven blog content optimized for search engines that establishes authority and drives organic traffic.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Blog Writing" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Blog Writing", href: "/services/blog-writing" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Offer"
            title="Comprehensive Blog Writing Services"
            description="Data-driven blog content that establishes topical authority, drives organic traffic, and converts readers into customers — with every post optimized to rank on Google."
          />
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue/20 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={feature.image} alt={`${feature.title} - Boyzeth Solutions Blog Writing Service`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
              title="See Our Blog Writing Expertise"
              description="Every article we produce reflects our commitment to quality, SEO best practices, and content that drives real organic traffic."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/blog-showcase-1/600/500" alt="SEO keyword research and content planning dashboard for blog writing by Boyzeth Solutions" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Keyword Research</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/blog-showcase-2/600/500" alt="Long-form blog content creation and editorial planning by experienced SEO writers" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Content Creation</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/blog-showcase-3/600/500" alt="Guest posting and backlink building strategy for improved domain authority and search rankings" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Guest Posting</span>
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
        <FAQ items={faqItems} title="Blog Writing - FAQ" />
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="Why Choose Us"
              title="What Sets Boyzeth Solutions Apart"
              description="We combine deep SEO expertise with exceptional writing talent to deliver blog content that ranks, converts, and builds lasting authority for your brand."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/blog-why-1/200/200" alt="SEO expertise and proven track record of ranking blog content on Google's first page" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Deep SEO Expertise</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Our writers are trained in advanced SEO techniques — from semantic keyword clustering to entity optimization — ensuring every post has the best chance of ranking.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/blog-why-2/200/200" alt="Experienced team of professional blog writers skilled in diverse industries and niches" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Experienced Writers</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Our team includes writers with expertise across finance, technology, healthcare, e-commerce, and more — ensuring authoritative, well-researched content for your industry.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/blog-why-3/200/200" alt="Topic cluster and topical authority strategy that builds comprehensive content ecosystems" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Topic Authority Focus</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We build content clusters around core topics to establish your site as the authoritative source in your niche, signaling expertise to Google's E-E-A-T framework.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/blog-why-4/200/200" alt="Consistent content delivery with reliable editorial calendar management and timely publishing" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Consistent Delivery</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We never miss a deadline. Our editorial system ensures consistent, high-quality content published on schedule every week, building momentum for your organic growth.</p>
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
          title="Ready to Transform Your Content Strategy?"
          description="Let's discuss how we can help your business grow with our expert blog writing services."
          primaryLabel="Book a Strategy Call"
          primaryHref="/contact"
          secondaryLabel="Get a Free Audit"
          secondaryHref="/free-audit"
        />
      </ScrollReveal>
    </>
  )
}
