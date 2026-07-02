import type { Metadata } from "next"
import ServiceCard from "@/components/ServiceCard"
import CTASection from "@/components/CTASection"
import FAQ from "@/components/FAQ"
import Breadcrumbs from "@/components/Breadcrumbs"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Our Services | Web Development & Digital Marketing | Boyzeth Solutions",
  description:
    "Explore our full range of digital services including web development, social media management, SEO blog writing, Google Business Profile management, paid advertising, content creation, and more. Based in Lagos, serving Nigeria and beyond.",
  openGraph: {
    title: "Digital Services for Business Growth | Boyzeth Solutions",
    description:
      "From custom web development to comprehensive digital marketing strategies — we provide everything you need to scale your business online.",
  },
  alternates: { canonical: "https://www.boyzethsolutions.com/services" },
}

const services = [
  {
    icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    title: "Web Development", description: "Custom websites, web apps, and e-commerce solutions built with modern technologies for speed, security, and scalability. We use Next.js, Shopify, and WordPress to deliver high-performance digital experiences tailored to your brand.", href: "/services/web-development", gradient: "from-blue to-teal",
  },
  {
    icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>,
    title: "Social Media Management", description: "Strategic management across all platforms to build brand awareness, engagement, and conversions.", href: "/services/social-media-management", gradient: "from-orange to-pink-500",
  },
  {
    icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
    title: "Blog Writing", description: "SEO-optimized blog content that establishes authority, drives organic traffic, and generates leads.", href: "/services/blog-writing", gradient: "from-teal to-green-400",
  },
  {
    icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    title: "Google Business Profile", description: "Complete GBP optimization and management to dominate local search results and drive foot traffic.", href: "/services/google-business-profile", gradient: "from-blue to-purple-500",
  },
  {
    icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    title: "Bing Business Management", description: "Optimize your Bing presence to capture additional search traffic and reach new audiences.", href: "/services/bing-business-management", gradient: "from-teal to-blue",
  },
  {
    icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    title: "Content Creation", description: "High-quality graphics, video, copywriting, and multimedia content that captures your brand voice.", href: "/services/content-creation", gradient: "from-orange to-red-500",
  },
  {
    icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
    title: "Paid Advertising", description: "ROI-driven ad campaigns across Google, Meta, LinkedIn, and Bing that maximize conversions.", href: "/services/paid-advertising", gradient: "from-blue to-indigo-500",
  },
  {
    icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "Community Management", description: "Build and nurture engaged online communities that foster brand advocacy and customer loyalty.", href: "/services/community-management", gradient: "from-teal to-yellow-400",
  },
  {
    icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    title: "Analytics & Reporting", description: "Comprehensive analytics setup and custom reporting for real-time business performance insights.", href: "/services/analytics-reporting", gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    title: "Strategy Development", description: "Comprehensive digital marketing strategies aligned with business goals for sustainable growth.", href: "/services/strategy-development", gradient: "from-navy to-blue",
  },
]

const faqItems = [
  { question: "What digital services does Boyzeth Solutions offer?", answer: "We offer 10 core service areas: web development, social media management, SEO blog writing, Google Business Profile management, Bing business optimization, content creation, paid advertising, community management, analytics & reporting, and strategy development. Each service is tailored to your business goals." },
  { question: "Do you offer custom service packages?", answer: "Yes! We create custom service packages based on your unique business needs. Whether you need a full-service digital strategy or individual services, we design a package that fits your goals and budget." },
  { question: "Which services are best for local Lagos businesses?", answer: "For Lagos-based businesses, we recommend starting with Google Business Profile management, local SEO, and web development. These three services create a strong foundation for local search visibility and customer acquisition." },
  { question: "How do I know which services I need?", answer: "We offer a free digital audit that analyzes your current online presence and provides personalized recommendations. This helps you understand exactly which services will deliver the most impact for your business." },
  { question: "Can I combine multiple services?", answer: "Absolutely! We recommend an integrated approach for maximum results. Many clients start with 2-3 services and expand as they see results. Our strategy development service can help you plan the perfect combination." },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      url: `https://www.boyzethsolutions.com${s.href}`,
      provider: {
        "@type": "Organization",
        name: "Boyzeth Solutions",
      },
      areaServed: ["Lagos", "Nigeria"],
    },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="pt-24 lg:pt-60 pb-24 bg-gradient-to-br from-navy via-navy to-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-80 h-80 bg-teal rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Our Digital Services
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              From custom web development to comprehensive digital marketing strategies, we provide
              everything you need to grow your business online. Every service is tailored to your
              unique goals and market.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Services" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden mb-16">
              <img src="https://picsum.photos/seed/services-banner/1200/400" alt="Boyzeth Solutions digital services - web development, social media, SEO, and paid advertising" className="w-full h-48 md:h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-blue/40 flex items-center">
                <div className="px-8 md:px-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Comprehensive Digital Services</h2>
                  <p className="text-white/80 text-sm md:text-base max-w-xl">From web development to paid advertising, every service is designed to work together for maximum impact on your business growth.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <div key={i} className="animate-scale-in" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-16 bg-blue/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8">
                <div className="text-4xl font-bold text-blue mb-2">50+</div>
                <div className="text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="p-8">
                <div className="text-4xl font-bold text-blue mb-2">95%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="p-8">
                <div className="text-4xl font-bold text-blue mb-2">3x</div>
                <div className="text-gray-600 font-medium">Average ROI Increase</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <FAQ items={faqItems} title="Service FAQs" />
      </ScrollReveal>

      <ScrollReveal>
        <CTASection
          title="Not Sure Which Service You Need?"
          description="Get a free digital audit and personalized recommendations from our team."
          primaryLabel="Get a Free Audit"
          primaryHref="/free-audit"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
        />
      </ScrollReveal>
    </>
  )
}
