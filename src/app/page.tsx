import type { Metadata } from "next"
import Button from "@/components/Button"
import ServiceCard from "@/components/ServiceCard"
import TestimonialCard from "@/components/TestimonialCard"
import StatsSection from "@/components/StatsSection"
import ProcessSection from "@/components/ProcessSection"
import CTASection from "@/components/CTASection"
import FAQ from "@/components/FAQ"
import TrustBadges from "@/components/TrustBadges"
import SectionHeader from "@/components/SectionHeader"
import ScrollReveal from "@/components/ScrollReveal"
import { PROCESS_STEPS, STATS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Boyzeth Solutions | Web Development & Digital Marketing Agency in Lagos",
  description:
    "Web development, social media management, SEO, Google Business Profile, paid ads, and digital growth strategies. We help businesses scale with custom solutions.",
  openGraph: {
    title: "Boyzeth Solutions | Web Development & Digital Marketing Agency",
    description:
      "Custom websites, social media management, SEO content, Google Business Profile management, paid ads, and strategic growth campaigns.",
  },
}

const services = [
  { icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>, title: "Web Development", description: "Custom websites, web apps, and e-commerce solutions built with modern tech for speed, security, and scalability.", href: "/services/web-development", gradient: "from-blue to-teal" },
  { icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>, title: "Social Media Management", description: "Strategic management across all platforms to build brand awareness, engagement, and conversions.", href: "/services/social-media-management", gradient: "from-orange to-pink-500" },
  { icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>, title: "Blog Writing", description: "SEO-optimized blog content that establishes authority, drives organic traffic, and generates leads.", href: "/services/blog-writing", gradient: "from-teal to-green-400" },
  { icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>, title: "Google Business Profile", description: "Complete GBP optimization and management to dominate local search results and drive foot traffic.", href: "/services/google-business-profile", gradient: "from-blue to-purple-500" },
  { icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, title: "Bing Business Management", description: "Optimize your Bing presence to capture additional search traffic and reach new audiences.", href: "/services/bing-business-management", gradient: "from-teal to-blue" },
  { icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, title: "Content Creation", description: "High-quality graphics, video, copywriting, and multimedia content that captures your brand voice.", href: "/services/content-creation", gradient: "from-orange to-red-500" },
  { icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>, title: "Paid Advertising", description: "ROI-driven ad campaigns across Google, Meta, LinkedIn, and Bing that maximize conversions.", href: "/services/paid-advertising", gradient: "from-blue to-indigo-500" },
  { icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: "Community Management", description: "Build and nurture engaged online communities that foster brand advocacy and customer loyalty.", href: "/services/community-management", gradient: "from-teal to-yellow-400" },
  { icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, title: "Analytics & Reporting", description: "Comprehensive analytics setup and custom reporting for real-time business performance insights.", href: "/services/analytics-reporting", gradient: "from-purple-500 to-pink-500" },
  { icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, title: "Strategy Development", description: "Comprehensive digital marketing strategies aligned with business goals for sustainable growth.", href: "/services/strategy-development", gradient: "from-navy to-blue" },
]

const testimonials = [
  { quote: "Boyzeth Solutions transformed our online presence. Our website traffic has tripled and we're getting consistent leads from our Google Business Profile.", name: "Adekunle Ogunlesi", role: "CEO", company: "Lagos Properties Ltd", rating: 5 },
  { quote: "The social media strategy they developed for us increased our engagement by 400% in just three months. Highly professional team.", name: "Chioma Eze", role: "Marketing Director", company: "Trendy Fashion NG", rating: 5 },
  { quote: "Their web development team built us an e-commerce platform that exceeded our expectations. Sales increased 200% in the first quarter.", name: "Segun Adeyemi", role: "Founder", company: "MarketPro NG", rating: 5 },
  { quote: "The blog writing service has been a game-changer for our SEO. We're ranking on page one for our target keywords.", name: "Folake Balogun", role: "Content Manager", company: "TechBridge Nigeria", rating: 5 },
]

const faqItems = [
  { question: "What services does Boyzeth Solutions offer?", answer: "We offer a full suite of digital services including web development, social media management, SEO blog writing, Google Business Profile management, Bing business optimization, content creation, paid advertising, community management, analytics & reporting, and strategy development." },
  { question: "How long does it take to build a website?", answer: "Typical website projects take 4-8 weeks depending on complexity. Simple brochure sites can be delivered in 2-3 weeks, while custom web applications may take 8-12 weeks." },
  { question: "Do you work with businesses outside Lagos?", answer: "Yes! We serve clients throughout Nigeria and internationally. Our remote collaboration tools ensure seamless communication regardless of location." },
  { question: "What is your pricing model?", answer: "We offer project-based and retainer pricing depending on the service. Every engagement begins with a free consultation to understand your needs and provide a custom quote." },
  { question: "How do you measure success?", answer: "We establish clear KPIs at the start of every engagement and provide regular reports tracking progress against goals. Our focus is on measurable ROI." },
]

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Boyzeth Solutions",
  url: "https://www.boyzethsolutions.com",
  logo: "https://www.boyzethsolutions.com/favicon.ico",
  description: "Web development and digital marketing agency helping businesses grow through custom websites, social media management, SEO, and strategic digital marketing.",
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  contactPoint: { "@type": "ContactPoint", telephone: "+44-7346-071355", contactType: "sales", email: "hello@boyzethsolutions.com" },
  sameAs: ["https://facebook.com/boyzethsolutions", "https://twitter.com/boyzethsolutions", "https://linkedin.com/company/boyzethsolutions"],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 lg:pt-60">
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-teal/5 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue/10 text-blue rounded-full text-sm font-semibold mb-6 animate-slide-down">
              <span className="w-2 h-2 bg-blue rounded-full animate-pulse"></span>
              Trusted Digital Agency
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-[1.1] tracking-tight mb-6 animate-slide-up">
              Web Development & Digital Growth{" "}
              <span className="text-gradient">Solutions That Scale</span> Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              We help businesses grow through custom websites, social media management, SEO content,
              Google Business Profile management, Bing Business optimization, paid ads, and strategic
              growth campaigns. Based in Lagos with expertise across Nigerian and UK markets, we craft
              digital strategies that drive measurable results and long-term success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <Button href="/contact" size="lg">Get Started</Button>
              <Button href="/free-audit" variant="outline" size="lg">Book a Strategy Call</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-gray-400 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                50+ Projects Delivered
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                95% Client Satisfaction
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                3x Avg. ROI Increase
              </span>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="Our Work in Action"
              title="Digital Solutions Across Every Channel"
              description="From brand strategy to website development and paid advertising, we create integrated digital experiences that help businesses grow and thrive in competitive markets."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <img src="https://picsum.photos/seed/home-showcase-1/600/400" alt="Web development and design projects by Boyzeth Solutions digital agency in Lagos" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-5 bg-white border border-t-0 border-gray-100 rounded-b-2xl">
                  <h3 className="font-bold text-navy">Web Development</h3>
                  <p className="text-gray-500 text-sm">Custom-built websites and web applications using modern frameworks</p>
                </div>
              </div>
              <div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <img src="https://picsum.photos/seed/home-showcase-2/600/400" alt="Social media management and content marketing by Boyzeth Solutions" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-5 bg-white border border-t-0 border-gray-100 rounded-b-2xl">
                  <h3 className="font-bold text-navy">Social Media & Content</h3>
                  <p className="text-gray-500 text-sm">Strategic content creation and community management across platforms</p>
                </div>
              </div>
              <div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <img src="https://picsum.photos/seed/home-showcase-3/600/400" alt="SEO and paid advertising campaigns by Boyzeth Solutions" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-5 bg-white border border-t-0 border-gray-100 rounded-b-2xl">
                  <h3 className="font-bold text-navy">SEO & Paid Ads</h3>
                  <p className="text-gray-500 text-sm">Data-driven advertising and search optimisation for measurable ROI</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal><TrustBadges /></ScrollReveal>

      {/* Services */}
      <ScrollReveal><section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Do"
            title="Full-Service Digital Growth Solutions"
            description="From custom web development to comprehensive digital marketing strategies, we provide everything you need to scale your business online. Each service is tailored to your industry, audience, and growth objectives."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/services/web-development" variant="outline" size="md">View All Services</Button>
          </div>
        </div>
      </section></ScrollReveal>

      <ScrollReveal><StatsSection stats={STATS} variant="navy" /></ScrollReveal>

      <ScrollReveal><ProcessSection steps={PROCESS_STEPS} /></ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal><section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Hear from businesses that have grown with Boyzeth Solutions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/testimonials" variant="ghost" size="md">View All Testimonials</Button>
          </div>
        </div>
      </section></ScrollReveal>

      {/* FAQ */}
      <ScrollReveal><FAQ items={faqItems} title="Frequently Asked Questions" /></ScrollReveal>

      <ScrollReveal><CTASection
        title="Ready to Scale Your Business?"
        description="Let's create a custom digital strategy that drives real results. Book your free consultation today."
        primaryLabel="Get Started"
        primaryHref="/contact"
        secondaryLabel="Get a Free Audit"
        secondaryHref="/free-audit"
      /></ScrollReveal>
    </>
  )
}
