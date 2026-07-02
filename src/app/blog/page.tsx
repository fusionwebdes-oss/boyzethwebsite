'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Button from '@/components/Button'
import CTASection from '@/components/CTASection'
import { blogPosts } from '@/data/blog-posts'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ScrollReveal from '@/components/ScrollReveal'

const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))]

const ITEMS_PER_PAGE = 12

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visible, setVisible] = useState(ITEMS_PER_PAGE)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSent, setNewsletterSent] = useState(false)
  const [newsletterSending, setNewsletterSending] = useState(false)

  const featured = blogPosts[0]

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? blogPosts.slice(1)
        : blogPosts.slice(1).filter((p) => p.category === activeCategory),
    [activeCategory]
  )

  const displayed = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  const loadMore = () => setVisible((v) => v + ITEMS_PER_PAGE)

  return (
    <>
      <section className="pt-24 lg:pt-60 pb-24 bg-gradient-to-br from-navy via-navy to-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-80 h-80 bg-teal rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Our Blog</h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Insights, tips, and guides to help your business grow online.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Blog" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]} />

      {featured && (
        <ScrollReveal>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link href={`/blog/${featured.slug}`} className="group block bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-full relative overflow-hidden">
                  {featured.image ? (
                    <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue to-teal flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-blue uppercase tracking-widest">{featured.category}</span>
                    <span className="text-xs text-gray-400">{featured.date}</span>
                    <span className="text-xs text-gray-400">{featured.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 group-hover:text-blue transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-2 text-blue font-semibold text-sm">
                    Read More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
        </ScrollReveal>
      )}

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setVisible(ITEMS_PER_PAGE) }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat ? 'bg-blue text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayed.map((post) => (
                <div key={post.slug} className="animate-scale-in" style={{ animationDelay: `${displayed.indexOf(post) * 0.1}s`, animationFillMode: 'both' }}>
                  <Link href={`/blog/${post.slug}`} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-blue/20 transition-all duration-300">
                    <div className="h-48 relative overflow-hidden">
                      {post.image ? (
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue/10 to-teal/10 flex items-center justify-center">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue to-teal rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-blue uppercase tracking-widest">{post.category}</span>
                        <span className="text-xs text-gray-400">{post.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-blue transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                      <span className="text-xs text-gray-400">{post.readTime} read</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {displayed.length === 0 && (
            <p className="text-center text-gray-400 py-12">No posts in this category yet.</p>
          )}

          {hasMore && (
            <div className="text-center mt-12">
              <Button onClick={loadMore} variant="outline" size="md">Load More Posts</Button>
            </div>
          )}
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-500 text-lg mb-8">Get the latest articles, guides, and resources delivered straight to your inbox every month.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue"
              required
            />
            <Button type="submit" variant="primary" size="md">Subscribe</Button>
          </form>
        </div>
      </section>

      </ScrollReveal>

      <ScrollReveal>
        <CTASection
          title="Need Expert Help?"
          description="Let our team handle your digital marketing while you focus on running your business."
          primaryLabel="Contact Us"
          primaryHref="/contact"
          variant="navy"
        />
      </ScrollReveal>
    </>
  )
}
