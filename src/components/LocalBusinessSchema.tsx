export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Boyzeth Solutions",
    description: "Web development and digital marketing agency helping businesses grow through custom websites, social media management, SEO, and strategic digital marketing.",
    url: "https://www.boyzethsolutions.com",
    telephone: "+44-7346-071355",
    email: "hello@boyzethsolutions.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "West Midlands",
      addressCountry: "GB",
    },
    priceRange: "$$",
    image: "https://www.boyzethsolutions.com/favicon.ico",
    sameAs: [
      "https://facebook.com/boyzethsolutions",
      "https://twitter.com/boyzethsolutions",
      "https://linkedin.com/company/boyzethsolutions",
      "https://instagram.com/boyzethsolutions",
    ],
    areaServed: [
      { "@type": "City", name: "West Midlands" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Blog Writing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Business Profile Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paid Advertising" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Creation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analytics & Reporting" } },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
