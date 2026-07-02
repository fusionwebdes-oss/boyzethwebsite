import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import CTASection from "@/components/CTASection"
import { blogPosts } from "@/data/blog-posts"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Boyzeth Solutions Blog`,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image || "https://www.boyzethsolutions.com/og-image.jpg",
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Boyzeth Solutions",
      url: "https://www.boyzethsolutions.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Boyzeth Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://www.boyzethsolutions.com/favicon.ico",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.boyzethsolutions.com/blog/${post.slug}`,
    },
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-blue hover:text-blue-light transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="px-3 py-1 bg-blue/10 text-blue rounded-full font-medium">{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readTime} read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">{post.title}</h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">{post.excerpt}</p>

          <div className="flex items-center gap-3 mb-10 pb-10 border-b border-gray-100">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue to-teal flex items-center justify-center text-white font-bold text-sm">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-semibold text-navy text-sm">{post.author}</p>
              <p className="text-gray-500 text-xs">Boyzeth Solutions</p>
            </div>
          </div>

          {post.image ? (
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 bg-gradient-to-br from-blue/10 to-teal/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue to-teal rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <p className="text-gray-400 text-sm font-medium">{post.category}</p>
                </div>
              </div>
            </div>
          )}

          <div className="prose prose-lg max-w-none prose-headings:text-navy prose-p:text-gray-600 prose-a:text-blue prose-strong:text-navy">
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold text-navy mt-10 mb-4">{paragraph.replace('## ', '')}</h2>
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={i} className="text-xl font-bold text-navy mt-8 mb-3">{paragraph.replace('### ', '')}</h3>
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={i} className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                    {paragraph.split('\n').map((line, j) => (
                      <li key={j}>{line.replace('- ', '')}</li>
                    ))}
                  </ul>
                )
              }
              return <p key={i} className="text-gray-600 leading-relaxed mb-4">{paragraph}</p>
            })}
          </div>

          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-blue/20 transition-all">
                  <div className="h-40 relative overflow-hidden bg-gradient-to-br from-blue/10 to-teal/10">
                    {rp.image ? (
                      <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue to-teal rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-blue bg-blue/10 px-2 py-1 rounded-full">{rp.category}</span>
                    <h3 className="font-semibold text-navy mt-2 group-hover:text-blue transition-colors">{rp.title}</h3>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">{rp.excerpt}</p>
                    <p className="text-xs text-gray-400 mt-3">{rp.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Want More Digital Marketing Insights?"
        description="Subscribe to our newsletter for the latest tips, strategies, and industry updates."
        primaryLabel="Subscribe Now"
        primaryHref="/contact"
        variant="navy"
      />
    </>
  )
}
