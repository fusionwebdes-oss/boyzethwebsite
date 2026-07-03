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
  title: "Professional Web Development Services for Business Growth",
  description: "Custom websites, web applications, and e-commerce solutions built with modern technologies for speed, security, and scalability.",
  openGraph: {
    title: "Professional Web Development Services for Business Growth | Boyzeth Solutions",
    description: "Custom websites, web applications, and e-commerce solutions built with modern technologies for speed, security, and scalability.",
  },
}

const features = [
  { title: "Custom Website Design", description: "We craft bespoke websites that reflect your brand identity and business goals. Every design is built from the ground up to ensure uniqueness, usability, and visual appeal across all devices. Our design process includes wireframing, prototyping, and user testing to deliver a site that truly represents your brand.", image: "https://picsum.photos/seed/web-dev-design/800/500" },
  { title: "Responsive Development", description: "Our websites are built mobile-first, ensuring flawless performance across smartphones, tablets, and desktops. This approach guarantees an optimal user experience for every visitor, regardless of their device, and is a critical factor for SEO rankings in 2026.", image: "https://picsum.photos/seed/web-dev-responsive/800/500" },
  { title: "E-Commerce Solutions", description: "From product catalogs to full checkout flows, we build secure, scalable online stores using platforms like Shopify, WooCommerce, and custom solutions that drive sales and reduce cart abandonment.", image: "https://picsum.photos/seed/web-dev-ecommerce/800/500" },
  { title: "CMS Integration", description: "We integrate powerful content management systems that let you update your website effortlessly. Manage pages, blog posts, and media without any technical expertise, giving you full control over your content strategy.", image: "https://picsum.photos/seed/web-dev-cms/800/500" },
  { title: "Web Application Development", description: "Need more than a website? We build full-featured web applications with interactive dashboards, user portals, and complex backend systems using modern frameworks like Next.js, React, and Node.js.", image: "https://picsum.photos/seed/web-dev-app/800/500" },
  { title: "Performance Optimization", description: "We optimize every aspect of your site — from code and images to server response times — achieving 95+ Google PageSpeed scores and 40% faster load times. Speed directly impacts user experience, conversion rates, and search engine rankings.", image: "https://picsum.photos/seed/web-dev-speed/800/500" },
]

const faqItems = [
  { question: "What is included in your web development service?", answer: "Our web development service includes custom design, responsive development, CMS integration, performance optimization, SEO-friendly code structure, and ongoing support. Every project begins with a thorough discovery phase to understand your unique needs and goals." },
  { question: "How long does it take to build a website?", answer: "Timelines vary based on complexity. A standard business website typically takes 4–6 weeks, while custom web applications or e-commerce platforms may take 8–12 weeks. We provide a detailed timeline during the proposal phase." },
  { question: "Do you work with businesses in Lagos and across Nigeria?", answer: "Yes! We serve businesses throughout Lagos, Abuja, Port Harcourt, and across Nigeria, as well as international clients. Our remote delivery model ensures seamless collaboration regardless of location." },
  { question: "How much does your web development service cost?", answer: "Our pricing is project-based and tailored to your specific requirements. A simple business website starts at ₦350,000, while more complex projects are quoted after a free consultation. Contact us for a customized quote." },
  { question: "Can I combine web development with other services?", answer: "Absolutely. We recommend an integrated approach for maximum impact. Many clients combine web development with SEO blog writing, content creation, and paid advertising for comprehensive digital growth." },
]

const relatedServices = [
  { name: "Blog Writing", href: "/services/blog-writing" },
  { name: "Content Creation", href: "/services/content-creation" },
  { name: "Strategy Development", href: "/services/strategy-development" },
]

export default function WebDevelopmentPage() {
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
              Professional Web Development Services for Business Growth
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Custom websites, web applications, and e-commerce solutions built with modern technologies for speed, security, and scalability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Web Development" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Web Development", href: "/services/web-development" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Offer"
            title="Comprehensive Web Development Services"
            description="From brochure sites to complex web applications, we deliver tailored, high-performance solutions that align with your business objectives and drive measurable growth."
          />
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue/20 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={feature.image} alt={`${feature.title} - Boyzeth Solutions Web Development Service`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
              title="See Our Development Expertise"
              description="Every project we deliver reflects our commitment to quality, performance, and beautiful design."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/web-dev-showcase1/600/500" alt="Modern business website built by Boyzeth Solutions with responsive design and clean UI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Corporate Website</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/web-dev-showcase2/600/500" alt="E-commerce platform developed by Boyzeth Solutions with secure checkout and product management" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">E-Commerce Platform</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/web-dev-showcase3/600/500" alt="Custom web application dashboard designed and developed by Boyzeth Solutions" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold text-sm">Web Application</span>
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
        <FAQ items={faqItems} title="Web Development - FAQ" />
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="Why Choose Us"
              title="What Sets Boyzeth Solutions Apart"
              description="We combine technical expertise with strategic thinking to deliver websites that don&apos;t just look great — they drive real business results."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/web-dev-why1/200/200" alt="Proven track record of delivering high-performance websites for UK and Nigerian businesses" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Proven Track Record</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We have delivered 120+ successful web projects for businesses across the UK and Nigeria, with a 4.9 average client rating and consistent 5-star reviews.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/web-dev-why2/200/200" alt="Modern technology stack including Next.js, React, TypeScript, and Tailwind CSS" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Modern Tech Stack</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We build with the latest technologies — Next.js, React, TypeScript, and Tailwind CSS — ensuring your site is fast, secure, and future-proof.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/web-dev-why3/200/200" alt="SEO-optimized web development practices that help your site rank higher on Google" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">SEO-First Approach</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Every site we build is structured for search engines from day one — with semantic HTML, fast load times, and proper schema markup included as standard.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src="https://picsum.photos/seed/web-dev-why4/200/200" alt="Dedicated UK-based support team providing ongoing maintenance and technical assistance" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Dedicated Support</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">You get a dedicated account manager and ongoing technical support. We don&apos;t just build your site and disappear — we partner with you for the long term.</p>
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
          title="Ready to Transform Your Web Presence?"
          description="Let's discuss how we can help your business grow with our expert web development services."
          primaryLabel="Book a Strategy Call"
          primaryHref="/contact"
          secondaryLabel="Get a Free Audit"
          secondaryHref="/free-audit"
        />
      </ScrollReveal>
    </>
  )
}
