import type { MetadataRoute } from "next"
import { blogPosts } from "@/data/blog-posts"
import { towns } from "@/data/towns"

const BASE_URL = "https://www.boyzethsolutions.com"
const OG_IMAGE = `${BASE_URL}/opengraph-image`

const staticRoutes: { path: string; priority: number; changeFreq: "weekly" | "daily" | "monthly" }[] = [
  { path: "", priority: 1.0, changeFreq: "weekly" },
  { path: "services", priority: 0.9, changeFreq: "weekly" },
  { path: "services/web-development", priority: 0.8, changeFreq: "monthly" },
  { path: "services/social-media-management", priority: 0.8, changeFreq: "monthly" },
  { path: "services/blog-writing", priority: 0.8, changeFreq: "monthly" },
  { path: "services/google-business-profile", priority: 0.8, changeFreq: "monthly" },
  { path: "services/bing-business-management", priority: 0.8, changeFreq: "monthly" },
  { path: "services/content-creation", priority: 0.8, changeFreq: "monthly" },
  { path: "services/paid-advertising", priority: 0.8, changeFreq: "monthly" },
  { path: "services/community-management", priority: 0.8, changeFreq: "monthly" },
  { path: "services/analytics-reporting", priority: 0.8, changeFreq: "monthly" },
  { path: "services/strategy-development", priority: 0.8, changeFreq: "monthly" },
  { path: "about", priority: 0.8, changeFreq: "monthly" },
  { path: "portfolio", priority: 0.7, changeFreq: "monthly" },
  { path: "case-studies", priority: 0.8, changeFreq: "monthly" },
  { path: "pricing", priority: 0.7, changeFreq: "monthly" },
  { path: "testimonials", priority: 0.6, changeFreq: "monthly" },
  { path: "industries", priority: 0.7, changeFreq: "monthly" },
  { path: "resources", priority: 0.6, changeFreq: "monthly" },
  { path: "blog", priority: 0.9, changeFreq: "weekly" },
  { path: "free-audit", priority: 0.8, changeFreq: "weekly" },
  { path: "contact", priority: 0.8, changeFreq: "monthly" },
]

const pageImages: Record<string, string> = {
  "": `${BASE_URL}/opengraph-image`,
  "services": "https://picsum.photos/seed/web-dev-design/800/500",
  "services/web-development": "https://picsum.photos/seed/web-dev-design/800/500",
  "services/social-media-management": "https://picsum.photos/seed/sm-feature-1/800/500",
  "services/blog-writing": "https://picsum.photos/seed/blog-feature-1/800/500",
  "services/google-business-profile": "https://picsum.photos/seed/gbp-feature-1/800/500",
  "services/bing-business-management": "https://picsum.photos/seed/bing-feature-1/800/500",
  "services/content-creation": "https://picsum.photos/seed/cc-feature-1/800/500",
  "services/paid-advertising": "https://picsum.photos/seed/pa-feature-1/800/500",
  "services/community-management": "https://picsum.photos/seed/cm-feature-1/800/500",
  "services/analytics-reporting": "https://picsum.photos/seed/ar-feature-1/800/500",
  "services/strategy-development": "https://picsum.photos/seed/sd-feature-1/800/500",
  "about": "https://picsum.photos/seed/about-office/800/600",
  "portfolio": "https://picsum.photos/seed/portfolio-1/600/400",
  "case-studies": "https://picsum.photos/seed/case-study-1/800/600",
  "pricing": `${BASE_URL}/opengraph-image`,
  "testimonials": `${BASE_URL}/opengraph-image`,
  "industries": "https://picsum.photos/seed/industry-1/800/500",
  "resources": `${BASE_URL}/opengraph-image`,
  "blog": "https://picsum.photos/seed/73/800/400",
  "free-audit": `${BASE_URL}/opengraph-image`,
  "contact": "https://picsum.photos/seed/contact-office/600/400",
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((r) => ({
    url: `${BASE_URL}/${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFreq,
    priority: r.priority,
    images: [pageImages[r.path] || OG_IMAGE],
  }))

  const blogEntries = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
    images: post.image ? [post.image] : [OG_IMAGE],
  }))

  const locationEntries = towns.map((town) => ({
    url: `${BASE_URL}/locations/${town.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
    images: ["https://picsum.photos/seed/location-hero-1/1200/600"],
  }))

  return [...staticEntries, ...blogEntries, ...locationEntries]
}
