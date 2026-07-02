'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import CTASection from '@/components/CTASection'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ScrollReveal from '@/components/ScrollReveal'

const services = [
  'Web Development',
  'Social Media Management',
  'SEO & Content Marketing',
  'Paid Advertising',
  'Branding & Design',
  'Consulting & Strategy',
  'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="pt-24 lg:pt-60 pb-24 bg-gradient-to-br from-navy via-navy to-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Get In Touch
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to take your digital presence to the next level? We would love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Contact Us" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Contact Us", href: "/contact" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ScrollReveal className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-2">Message Sent!</h2>
                  <p className="text-gray-500">Thank you for reaching out. We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all text-navy placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all text-navy placeholder-gray-400"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all text-navy placeholder-gray-400"
                        placeholder="+44 7346 071355"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-navy mb-2">Service Interested In *</label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all text-navy bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all text-navy placeholder-gray-400 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" variant="primary" size="lg">Send Message</Button>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-8">
                <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-xl font-bold text-navy mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Email</p>
                      <a href="mailto:hello@boyzethsolutions.com" className="text-blue text-sm hover:underline">hello@boyzethsolutions.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Phone</p>
                      <a href="tel:+447346071355" className="text-blue text-sm hover:underline">+44 7346 071355</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Address</p>
                      <p className="text-gray-500 text-sm">West Midlands,<br />United Kingdom</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Working Hours</p>
                      <p className="text-gray-500 text-sm">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <img
                src="https://picsum.photos/seed/contact-office/600/400"
                alt="Boyzeth Solutions office location in the West Midlands - digital marketing agency"
                className="rounded-2xl w-full h-64 object-cover border border-gray-100"
              />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block text-blue font-semibold text-sm uppercase tracking-widest mb-4">Our Workspace</span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-6">
                  Where Ideas Become Digital Reality
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Based in the heart of the West Midlands, our workspace is where strategy meets creativity. From web development to content creation, every project is crafted with attention to detail and a deep understanding of the UK digital landscape.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Our team collaborates across disciplines to deliver integrated digital solutions that drive real business results. Whether you visit us in person or work with us remotely, you will experience the same commitment to excellence.
                </p>
              </div>
              <img
                src="https://picsum.photos/seed/contact-workspace/600/400"
                alt="Boyzeth Solutions digital agency workspace and team in the West Midlands"
                className="rounded-2xl w-full h-80 object-cover shadow-lg"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <CTASection
          title="Get a Free Digital Marketing Audit"
          description="Find out how your business is performing online with a comprehensive free audit."
          primaryLabel="Claim Your Free Audit"
          primaryHref="/free-audit"
          variant="navy"
        />
      </ScrollReveal>
    </>
  )
}
