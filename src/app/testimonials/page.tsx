import { Metadata } from 'next'
import TestimonialCard from '@/components/TestimonialCard'
import StatsSection from '@/components/StatsSection'
import CTASection from '@/components/CTASection'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Testimonials | Boyzeth Solutions',
  description: 'Hear from our clients about their experience working with Boyzeth Solutions. Read testimonials from businesses across Lagos, Nigeria.',
}

const testimonials = [
  {
    quote: 'Boyzeth Solutions transformed our online presence completely. Our website went from outdated and slow to modern and lightning-fast. Within three months, our online sales doubled.',
    name: 'Folake Adeniyi',
    role: 'CEO',
    company: 'LuxeMart Nigeria',
    rating: 5,
    image: 'https://picsum.photos/seed/testimonial-1/100/100',
    imageAlt: 'Folake Adeniyi - CEO of LuxeMart Nigeria client testimonial',
  },
  {
    quote: 'The team at Boyzeth is incredibly professional and responsive. They took the time to understand our business and delivered a marketing strategy that exceeded our expectations.',
    name: 'Dr. Kehinde Bello',
    role: 'Founder',
    company: 'Bello Healthcare',
    rating: 5,
    image: 'https://picsum.photos/seed/testimonial-2/100/100',
    imageAlt: 'Dr. Kehinde Bello - Founder of Bello Healthcare client testimonial',
  },
  {
    quote: 'We were struggling with our Google Ads ROI. Boyzeth optimized our campaigns and reduced our cost per lead by 60% while doubling our lead volume. Exceptional work.',
    name: 'Yemi Ogunlesi',
    role: 'Marketing Director',
    company: 'ProServe Africa',
    rating: 5,
    image: 'https://picsum.photos/seed/testimonial-3/100/100',
    imageAlt: 'Yemi Ogunlesi - Marketing Director at ProServe Africa client testimonial',
  },
  {
    quote: 'Working with Boyzeth Solutions on our social media strategy was a game-changer. Our engagement rates tripled and we gained thousands of new followers in just two months.',
    name: 'Chioma Nwachukwu',
    role: 'Brand Manager',
    company: 'GreenRoots Agro',
    rating: 5,
    image: 'https://picsum.photos/seed/testimonial-4/100/100',
    imageAlt: 'Chioma Nwachukwu - Brand Manager at GreenRoots Agro client testimonial',
  },
  {
    quote: 'The web development team built us a custom platform that perfectly captures our brand. The attention to detail and user experience is outstanding. Highly recommended.',
    name: 'Segun Akintola',
    role: 'CTO',
    company: 'EduPrime Nigeria',
    rating: 5,
    image: 'https://picsum.photos/seed/testimonial-5/100/100',
    imageAlt: 'Segun Akintola - CTO of EduPrime Nigeria client testimonial',
  },
  {
    quote: 'Boyzeth helped us rebrand and launch a new website simultaneously. The project was delivered on time and within budget. Our clients constantly compliment the new design.',
    name: 'Grace Okonkwo',
    role: 'Managing Partner',
    company: 'Okonkwo & Associates',
    rating: 5,
    image: 'https://picsum.photos/seed/testimonial-6/100/100',
    imageAlt: 'Grace Okonkwo - Managing Partner at Okonkwo & Associates client testimonial',
  },
  {
    quote: 'Their content marketing strategy helped us establish thought leadership in the fintech space. Our blog traffic grew by 400% and we have been featured in several industry publications.',
    name: 'Tobi Oladipo',
    role: 'VP of Marketing',
    company: 'PayBridge Fintech',
    rating: 5,
    image: 'https://picsum.photos/seed/testimonial-7/100/100',
    imageAlt: 'Tobi Oladipo - VP of Marketing at PayBridge Fintech client testimonial',
  },
  {
    quote: 'The free audit was incredibly insightful. Boyzeth identified issues we did not even know existed and provided a clear roadmap for improvement. We signed up immediately.',
    name: 'Ngozi Eze',
    role: 'Owner',
    company: 'Ngozi Beauty Lounge',
    rating: 5,
    image: 'https://picsum.photos/seed/testimonial-8/100/100',
    imageAlt: 'Ngozi Eze - Owner of Ngozi Beauty Lounge client testimonial',
  },
]

const stats = [
  { value: '50+', label: 'Happy Clients' },
  { value: '4.9', label: 'Average Rating' },
  { value: '95%', label: 'Client Retention' },
  { value: '100%', label: 'Would Recommend' },
]

export default function TestimonialsPage() {
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
              What Our Clients Say
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Don&rsquo;t just take our word for it. Here is what businesses like yours have to say about working with us.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Testimonials" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Testimonials", href: "/testimonials" }]} />

      <ScrollReveal>
        <StatsSection stats={stats} variant="white" />
      </ScrollReveal>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="animate-scale-in" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <CTASection
          title="Join Our Happy Clients"
          description="Start your journey with Boyzeth Solutions today and experience the difference."
          primaryLabel="Get Started"
          primaryHref="/contact"
          secondaryLabel="View Our Work"
          secondaryHref="/portfolio"
        />
      </ScrollReveal>
    </>
  )
}
