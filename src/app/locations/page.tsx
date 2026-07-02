import type { Metadata } from "next"
import Link from "next/link"
import { towns } from "@/data/towns"
import SectionHeader from "@/components/SectionHeader"
import CTASection from "@/components/CTASection"
import Breadcrumbs from "@/components/Breadcrumbs"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Digital Marketing Services by Location | Boyzeth Solutions",
  description: "Browse our locations. Boyzeth Solutions provides web development, SEO, social media management, and digital marketing services to businesses across the UK.",
  openGraph: {
    title: "Digital Marketing Services by Location | Boyzeth Solutions",
    description: "Professional digital marketing and web development services available across the UK. Find your location and get started today.",
  },
}

const regionLabels: Record<string, string> = {
  "north-west": "North West England",
  "north-east": "North East England",
  "yorkshire-and-the-humber": "Yorkshire and the Humber",
  "east-midlands": "East Midlands",
  "west-midlands": "West Midlands",
  "east-of-england": "East of England",
  "south-east": "South East England",
  "south-west": "South West England",
  "greater-london": "Greater London",
}

const regionOrder = [
  "north-west", "north-east", "yorkshire-and-the-humber",
  "east-midlands", "west-midlands", "east-of-england",
  "south-east", "south-west", "greater-london",
]

const regionImages: Record<string, string> = {
  "north-west": "https://picsum.photos/seed/nw-england/1200/600",
  "north-east": "https://picsum.photos/seed/ne-england/1200/600",
  "yorkshire-and-the-humber": "https://picsum.photos/seed/yorkshire/1200/600",
  "east-midlands": "https://picsum.photos/seed/east-midlands/1200/600",
  "west-midlands": "https://picsum.photos/seed/west-midlands/1200/600",
  "east-of-england": "https://picsum.photos/seed/east-england/1200/600",
  "south-east": "https://picsum.photos/seed/se-england/1200/600",
  "south-west": "https://picsum.photos/seed/sw-england/1200/600",
  "greater-london": "https://picsum.photos/seed/greater-london/1200/600",
}

export default function LocationsPage() {
  const townsByRegion = regionOrder.reduce<Record<string, typeof towns>>((acc, region) => {
    acc[region] = towns.filter((t) => t.region === region).sort((a, b) => a.name.localeCompare(b.name))
    return acc
  }, {})

  const totalCount = towns.length

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
              Digital Marketing Services Across the UK
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Professional web development, SEO, social media management, and digital marketing services
              available in {totalCount} towns and cities across England. Find your location below.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Locations" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="All Locations"
            title="Digital Marketing Services Across England"
            description={`We serve businesses in ${totalCount} towns and cities across all regions of England. Select your location to learn how Boyzeth Solutions can help your business grow online.`}
            center
          />

          <div className="space-y-20 mt-16">
            {regionOrder.map((region) => {
              const townsInRegion = townsByRegion[region]
              if (!townsInRegion?.length) return null

              return (
                <ScrollReveal key={region}>
                  <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                      <div className="lg:col-span-1">
                        <div className="relative h-48 lg:h-full min-h-[12rem] rounded-2xl overflow-hidden">
                          <img src={regionImages[region]} alt={`${regionLabels[region]} - digital marketing services by Boyzeth Solutions`} className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="lg:col-span-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">{regionLabels[region]}</h2>
                        <p className="text-gray-500 mb-6">
                          We provide professional web development, SEO, social media management, and digital marketing services to businesses in {townsInRegion.length} towns across {regionLabels[region]}.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2">
                          {townsInRegion.map((town) => (
                            <Link
                              key={town.slug}
                              href={`/locations/${town.slug}`}
                              className="text-sm text-gray-600 hover:text-blue transition-colors"
                            >
                              {town.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeader
              subtitle="Not Sure Where to Start?"
              title="Get a Free Digital Marketing Audit"
              description="Find out how your business is performing online with a comprehensive free audit. We will assess your website, SEO, social media, and overall digital presence."
              center
            />
            <Link href="/free-audit" className="inline-block px-8 py-4 bg-orange text-white rounded-xl font-semibold hover:bg-orange-dark transition-colors text-lg mt-4">
              Claim Your Free Audit
            </Link>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <CTASection
          title="Ready to Grow Your Business?"
          description="Contact us today to discuss how we can help your business succeed online with our digital marketing services."
          primaryLabel="Contact Us"
          primaryHref="/contact"
          variant="navy"
        />
      </ScrollReveal>
    </>
  )
}
