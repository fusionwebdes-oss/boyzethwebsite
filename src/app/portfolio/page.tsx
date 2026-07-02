'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import CTASection from '@/components/CTASection'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ScrollReveal from '@/components/ScrollReveal'

type Category = 'All' | 'Web Dev' | 'Social Media' | 'Content' | 'Ads'

const categories: Category[] = ['All', 'Web Dev', 'Social Media', 'Content', 'Ads']

interface Project {
  title: string
  category: Category
  description: string
  image: string
  seed: string
  alt: string
  localImage?: string
}

const projects: Project[] = [
  {
    title: 'LuxeMart E-commerce Platform',
    category: 'Web Dev' as Category,
    description: 'A modern Shopify store with custom theme development, integrated payment gateways, and optimized checkout flow for a Lagos-based fashion retailer.',
    image: 'LM',
    seed: 'portfolio-1',
    alt: 'LuxeMart e-commerce website development project by Boyzeth Solutions',
  },
  {
    title: 'ProServe Africa Corporate Site',
    category: 'Web Dev' as Category,
    description: 'A professional corporate website with lead generation forms, case study showcases, and blog integration for a business consulting firm.',
    image: 'PA',
    seed: 'portfolio-2',
    alt: 'ProServe Africa corporate website design project by Boyzeth Solutions',
  },
  {
    title: 'GreenRoots Agro Brand Campaign',
    category: 'Social Media' as Category,
    description: 'A multi-platform social media campaign showcasing farm-to-table stories, driving 450% follower growth and 15,000+ platform sign-ups.',
    image: 'GA',
    seed: 'portfolio-3',
    alt: 'GreenRoots Agro social media brand campaign by Boyzeth Solutions',
  },
  {
    title: 'PayBridge Fintech Content Strategy',
    category: 'Content' as Category,
    description: 'A content marketing strategy including blog posts, whitepapers, and video content that established thought leadership and grew organic traffic by 400%.',
    image: 'PB',
    seed: 'portfolio-4',
    alt: 'PayBridge fintech content marketing strategy project by Boyzeth Solutions',
  },
  {
    title: 'Bello Healthcare Google Ads',
    category: 'Ads' as Category,
    description: 'Targeted Google Ads campaigns for a healthcare provider, reducing cost per lead by 60% while doubling lead volume within 8 weeks.',
    image: 'BH',
    seed: 'portfolio-5',
    alt: 'Bello Healthcare Google Ads campaign management by Boyzeth Solutions',
  },
  {
    title: 'EduPrime Learning Management System',
    category: 'Web Dev' as Category,
    description: 'A custom-built LMS platform with course management, student portals, and payment integration for an ed-tech startup in Lagos.',
    image: 'EP',
    seed: 'portfolio-6',
    alt: 'EduPrime learning management system LMS development project by Boyzeth Solutions',
  },
  {
    title: 'OnPoint Mobile Mechanic',
    category: 'Web Dev' as Category,
    description: 'A custom website build for a West Midlands-based mobile vehicle repair and diagnostic service. We delivered a clean, mobile-responsive site with service listings, contact forms, and local SEO optimisation to help customers find them for diagnostics, servicing, brake repairs, and breakdown assistance across Walsall and the surrounding area.',
    image: 'OP',
    seed: 'onpoint',
    alt: 'OnPoint Mobile Mechanic website build by Boyzeth Solutions',
    localImage: '/images/Portolio/Onpoint/website screenshot.png',
  },
  {
    title: 'JV Autos Bloxwich',
    category: 'Web Dev' as Category,
    description: 'A professional website for a 24/7 mobile mechanic and roadside assistance service operating across the West Midlands. We built a clean, fast-loading site showcasing their full mechanical repair services — from engine diagnostics to MOT repairs — with prominent call-to-action and mobile-first design to capture emergency repair enquiries.',
    image: 'JV',
    seed: 'jvautos',
    alt: 'JV Autos mobile mechanic website design by Boyzeth Solutions',
    localImage: '/images/Portolio/JV Autos/JV Autos Screen shot.png',
  },
  {
    title: 'TRD Motors',
    category: 'Web Dev' as Category,
    description: 'A brand-new website build for a car parts and car repair platform. We delivered a clean, professional site that presents their parts catalogue and repair services clearly, helping customers find the parts and mechanical expertise they need.',
    image: 'TR',
    seed: 'trdmotors',
    alt: 'TRD Motors car parts and repair website by Boyzeth Solutions',
    localImage: '/images/Portolio/TRD Motors/trd motor screenshot .png',
  },
  {
    title: 'UK Trucks and Vans',
    category: 'Web Dev' as Category,
    description: 'A full website build and ongoing digital presence for a Willenhall-based commercial vehicle repair, maintenance, and sales garage. Beyond the website, we manage their complete online presence — keeping their inventory updated, managing social media, and ensuring local customers across Willenhall, Walsall, and Wolverhampton can easily find them for diagnostics, transmission work, and used van sales.',
    image: 'UK',
    seed: 'uktrucks',
    alt: 'UK Trucks and Vans commercial vehicle garage website by Boyzeth Solutions',
    localImage: '/images/Portolio/UK Trucks and Vans/uk trucks and vans screenshot.png',
  },
  {
    title: 'VIP House Movers',
    category: 'Web Dev' as Category,
    description: 'A complete website build and ongoing full-service digital partnership for a Wolverhampton-based removal and relocation company. We handle their entire online presence — professional website showcasing their home removals, student relocations, and commercial moving services, plus social media management and local SEO to help them dominate search results across the West Midlands.',
    image: 'VM',
    seed: 'viphousemovers',
    alt: 'VIP House Movers removal company website by Boyzeth Solutions',
    localImage: '/images/Portolio/VIP House Movers/screenshot of website.png',
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <section className="pt-24 lg:pt-60 pb-24 bg-gradient-to-br from-navy via-navy to-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-80 h-80 bg-teal rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Our Work
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Real projects we have delivered for businesses across the UK.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Portfolio" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Portfolio", href: "/portfolio" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-blue text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-blue/20 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                <div className="overflow-hidden">
                  <img
                    src={project.localImage || `https://picsum.photos/seed/${project.seed}/600/400`}
                    alt={project.alt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-lg font-bold text-navy mt-1 mb-2 group-hover:text-blue transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                  <Button href="/contact" variant="ghost" size="sm">
                    Inquire About This Project
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-12">No projects in this category yet.</p>
          )}
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <CTASection
          title="Have a Project in Mind?"
          description="Let&rsquo;s create something great together. Tell us about your project and we will bring it to life."
          primaryLabel="Start Your Project"
          primaryHref="/contact"
          secondaryLabel="Get a Free Audit"
          secondaryHref="/free-audit"
        />
      </ScrollReveal>
    </>
  )
}
