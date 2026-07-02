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
  title: "Premium Content Creation Services for Digital Success",
  description: "High-quality, engaging content including graphics, video, copywriting, and multimedia that captures your brand voice.",
  openGraph: {
    title: "Premium Content Creation Services for Digital Success | Boyzeth Solutions",
    description: "High-quality, engaging content including graphics, video, copywriting, and multimedia that captures your brand voice.",
  },
}

const features = [
  { title: "Graphic Design", description: "We create stunning visuals including social media graphics, brand assets, infographics, and marketing collateral that capture attention and communicate your message effectively.", image: "https://picsum.photos/seed/cc-feature-1/800/500" },
  { title: "Video Production", description: "From concept to final cut, we produce professional videos including brand stories, product demos, testimonials, and social media shorts that drive engagement and conversions.", image: "https://picsum.photos/seed/cc-feature-2/800/500" },
  { title: "Copywriting", description: "Our skilled copywriters craft compelling copy for websites, landing pages, email campaigns, brochures, and ads that converts readers into customers with every word.", image: "https://picsum.photos/seed/cc-feature-3/800/500" },
  { title: "Infographic Creation", description: "We transform complex data and information into visually appealing infographics that are highly shareable, boosting brand visibility and establishing your authority.", image: "https://picsum.photos/seed/cc-feature-4/800/500" },
  { title: "Brand Photography", description: "We coordinate or produce professional brand photography that showcases your products, team, and workspace — giving your brand an authentic, polished visual identity.", image: "https://picsum.photos/seed/cc-feature-5/800/500" },
  { title: "Content Repurposing", description: "We maximize your content investment by repurposing existing material into multiple formats — turning blog posts into videos, infographics, social posts, and more.", image: "https://picsum.photos/seed/cc-feature-6/800/500" },
]

const faqItems = [
  { question: "What is included in your content creation service?", answer: "Our content creation service includes graphic design, video production, copywriting, infographic creation, brand photography coordination, and content repurposing. We produce content across all formats to meet your marketing needs." },
  { question: "How long does it take to produce content?", answer: "Timelines depend on the type and volume of content. Individual graphics take 1–3 days, blog posts 3–5 days, and video production 1–3 weeks. We work with your deadlines and can accommodate rush orders." },
  { question: "Do you work with businesses in Lagos and across Nigeria?", answer: "Yes! We create content for businesses across Lagos, Nigeria, and internationally. Our team understands the local market while maintaining global production standards." },
  { question: "How much does your content creation service cost?", answer: "Pricing varies by content type and complexity. Graphics start at ₦50,000, blog posts at ₦80,000, and video production at ₦250,000. We offer monthly retainer packages for consistent content needs." },
  { question: "Can I combine content creation with other services?", answer: "Absolutely. Content creation powers many other services — from social media management and blog writing to paid advertising and web development. An integrated approach ensures brand consistency." },
]

const relatedServices = [
  { name: "Blog Writing", href: "/services/blog-writing" },
  { name: "Social Media Management", href: "/services/social-media-management" },
  { name: "Web Development", href: "/services/web-development" },
]

export default function ContentCreationPage() {
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
              Premium Content Creation Services for Digital Success
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              High-quality, engaging content including graphics, video, copywriting, and multimedia that captures your brand voice.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Content Creation" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Content Creation", href: "/services/content-creation" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Offer"
            title="Comprehensive Content Creation Services"
            description="High-quality graphics, video production, copywriting, and multimedia content that captures your brand voice, engages your audience, and drives conversions across all channels."
          />
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue/20 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={feature.image} alt={`${feature.title} - Boyzeth Solutions Content Creation Service`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
              title="See Our Content Creation Expertise"
              description="Every piece of content we produce reflects our commitment to creativity, quality, and brand impact."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/cc-showcase-1/600/500" alt="Professional graphic design and brand asset creation by Boyzeth Solutions creative team" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Graphic Design</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/cc-showcase-2/600/500" alt="Professional video production setup for brand stories, product demos, and social media content" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Video Production</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/cc-showcase-3/600/500" alt="Content repurposing strategy transforming blog content into social media posts, infographics, and videos" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Content Repurposing</span>
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
        <FAQ items={faqItems} title="Content Creation - FAQ" />
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="Why Choose Us"
              title="What Sets Boyzeth Solutions Apart"
              description="We combine creative excellence with strategic thinking to produce content that doesn't just look great — it drives real engagement and conversions for your business."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/cc-why-1/200/200" alt="Creative excellence in graphic design, video production, and copywriting for diverse industries" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Creative Excellence</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Our creative team brings years of experience across graphic design, video production, and copywriting — producing content that stands out in crowded digital spaces.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/cc-why-2/200/200" alt="Multi-format content production including graphics, video, copywriting, infographics, and photography" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Multi-Format Expertise</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">From eye-catching graphics and professional videos to compelling copy and shareable infographics — we produce content in every format your audience consumes.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/cc-why-3/200/200" alt="Consistent brand identity maintained across all content formats and marketing channels" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Brand Consistency</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We maintain strict brand guidelines across every piece of content we create, ensuring your brand voice, visual identity, and messaging remain consistent everywhere.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/cc-why-4/200/200" alt="Fast content turnaround times with reliable delivery schedules and rush order capability" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Fast Turnaround</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We understand the pace of digital marketing. Our streamlined production process delivers high-quality content on tight deadlines without compromising on creativity or quality.</p>
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
          title="Ready to Elevate Your Content?"
          description="Let's discuss how we can help your business grow with our expert content creation services."
          primaryLabel="Book a Strategy Call"
          primaryHref="/contact"
          secondaryLabel="Get a Free Audit"
          secondaryHref="/free-audit"
        />
      </ScrollReveal>
    </>
  )
}
