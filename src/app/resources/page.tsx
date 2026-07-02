'use client'

import Button from '@/components/Button'
import CTASection from '@/components/CTASection'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ScrollReveal from '@/components/ScrollReveal'

const resourceSections = [
  {
    title: 'E-books & Guides',
    subtitle: 'In-depth knowledge to level up your digital strategy with expert insights.',
    items: [
      { title: 'The Complete Guide to Digital Marketing in Nigeria', description: 'A comprehensive e-book covering SEO, social media, email marketing, and paid ads tailored specifically for the Nigerian market with local case studies and actionable strategies.', type: 'E-book' },
      { title: 'Social Media Strategy Playbook', description: 'Learn how to build a social media strategy that drives engagement and conversions for your business across Instagram, Facebook, LinkedIn, and TikTok with practical templates.', type: 'Guide' },
      { title: 'SEO Fundamentals for Small Businesses', description: 'Master on-page and off-page SEO to rank higher on Google and drive organic traffic to your website. Covers keyword research, link building, and technical SEO basics.', type: 'E-book' },
    ],
  },
  {
    title: 'Templates',
    subtitle: 'Ready-to-use templates to save you time and effort on your marketing.',
    items: [
      { title: 'Content Calendar Template', description: 'A monthly content planning template to organize your social media and blog posts effectively across all platforms, with built-in content category tracking and performance columns.', type: 'Excel/Google Sheets' },
      { title: 'Marketing Strategy Template', description: 'A one-page marketing strategy template to define your goals, audience, channels, and KPIs. Perfect for startups and SMEs planning their quarterly marketing initiatives.', type: 'PDF/Notion' },
      { title: 'Website Brief Template', description: 'A comprehensive brief template to communicate your web development requirements clearly to agencies and developers, covering scope, timeline, budget, and technical specifications.', type: 'Word/Google Docs' },
    ],
  },
  {
    title: 'Tools',
    subtitle: 'Free tools to help you analyze and improve your digital presence instantly.',
    items: [
      { title: 'Website Speed Checker', description: 'Analyze your website loading speed and get actionable recommendations for improvement. Test your site from multiple locations and identify performance bottlenecks affecting user experience and SEO rankings.', type: 'Web Tool' },
      { title: 'Social Media Audit Tool', description: 'Evaluate your social media profiles and get a score with actionable tips to improve engagement, content strategy, and audience growth across all major platforms.', type: 'Web Tool' },
      { title: 'Keyword Research Assistant', description: 'Discover high-volume, low-competition keywords for your Nigerian audience. Find the search terms your customers are using and optimise your content strategy accordingly.', type: 'Web Tool' },
    ],
  },
]

export default function ResourcesPage() {
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
              Resources
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Free e-books, templates, and tools to help you grow your business online.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Resources" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Resources", href: "/resources" }]} />

      {resourceSections.map((section, si) => (
        <ScrollReveal key={si}>
          <section className={`py-20 ${si % 2 === 0 ? '' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-12">
                <span className="inline-block text-blue font-semibold text-sm uppercase tracking-widest mb-4">{section.subtitle}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy">{section.title}</h2>
              </div>
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/resources-${si + 1}/1000/300`}
                  alt={`${section.title} - free digital marketing resources by Boyzeth Solutions`}
                  className="w-full h-40 md:h-48 object-cover rounded-2xl"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.items.map((item, ii) => (
                  <div key={ii} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:border-blue/20 transition-all duration-300 flex flex-col animate-scale-in" style={{ animationDelay: `${ii * 0.1}s`, animationFillMode: 'both' }}>
                  <span className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">{item.type}</span>
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{item.description}</p>
                  <Button href="/contact" variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      ))}

      <ScrollReveal>
        <section className="py-20 bg-gradient-to-r from-blue to-teal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Ahead with Our Newsletter</h2>
          <p className="text-white/80 text-lg mb-8">Get the latest digital marketing tips, guides, and resources delivered to your inbox monthly.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <Button type="submit" variant="primary" size="md">Subscribe</Button>
          </form>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
        <CTASection
          title="Need Personalized Help?"
          description="Our team is ready to create custom solutions tailored to your business."
          primaryLabel="Contact Us"
          primaryHref="/contact"
          variant="navy"
        />
      </ScrollReveal>
    </>
  )
}
