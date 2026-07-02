'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import TrustBadges from '@/components/TrustBadges'
import CTASection from '@/components/CTASection'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ScrollReveal from '@/components/ScrollReveal'

type Phase = 'scan' | 'results' | 'form' | 'done'

interface ScanResult {
  score: number
  seo: number
  speed: number
  mobile: number
  security: number
  issues: { severity: 'critical' | 'warning' | 'good'; text: string }[]
}

async function realScan(url: string): Promise<ScanResult> {
  const res = await fetch(`/api/audit?url=${encodeURIComponent(url)}`)
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error || "Scan failed")
  }
  return res.json()
}

export default function FreeAuditPage() {
  const [phase, setPhase] = useState<Phase>('scan')
  const [url, setUrl] = useState('')
  const [scanning, setScanning] = useState(false)
  const [scanError, setScanError] = useState('')
  const [scanResult, setScanResult] = useState<ScanResult | null>(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', business: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [formError, setFormError] = useState('')

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url.trim()) return
    setScanning(true)
    setScanError('')
    try {
      const result = await realScan(url.trim())
      setScanResult(result)
      setPhase('results')
    } catch {
      setScanError('Could not scan this URL. Make sure the website is accessible and try again.')
    } finally {
      setScanning(false)
    }
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setFormError('')
    try {
      const res = await fetch('/api/audit-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, url: url.trim() }),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
      setPhase('done')
    } catch {
      setFormError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
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
              Get Your Free Digital Marketing Audit
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Scan your website for free. Get a detailed report with actionable insights on SEO, speed, mobile performance, and security — then claim your full audit report.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Free Audit" }]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Free Audit", href: "/free-audit" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              {/* Progress Steps */}
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12">
                {[
                  { key: 'scan', label: 'Scan Website' },
                  { key: 'results', label: 'View Results' },
                  { key: 'form', label: 'Get Report' },
                ].map((step, i) => {
                  const idx = ['scan', 'results', 'form'].indexOf(phase === 'done' ? 'form' : phase)
                  const active = i <= idx
                  return (
                    <div key={step.key} className="flex items-center gap-2 sm:gap-4">
                      <div className={`flex items-center gap-2 ${i < 2 ? 'after:content-[""] after:h-0.5 after:w-8 sm:after:w-16 after:hidden sm:after:block' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${active ? 'bg-blue text-white' : 'bg-gray-200 text-gray-400'}`}>
                          {i + 1}
                        </div>
                        <span className={`text-sm font-medium hidden sm:inline ${active ? 'text-blue' : 'text-gray-400'}`}>{step.label}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Phase: Scan */}
              {phase === 'scan' && (
                <div className="bg-white rounded-2xl border border-gray-100 p-8 lg:p-12 shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue to-teal flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-3">Scan Your Website</h2>
                  <p className="text-gray-500 mb-8 max-w-lg mx-auto">
                    Enter your website URL below and we will analyse your SEO, page speed, mobile responsiveness, and security posture — instantly.
                  </p>
                  <form onSubmit={handleScan} className="max-w-xl mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://yourwebsite.com"
                        required
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all text-navy placeholder-gray-400"
                      />
                      <Button type="submit" size="lg" disabled={scanning}>
                        {scanning ? 'Scanning...' : 'Scan Now'}
                      </Button>
                    </div>
                  </form>

                  {scanError && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                      {scanError}
                    </div>
                  )}

                  {scanning && (
                    <div className="mt-10">
                      <div className="max-w-md mx-auto bg-gray-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-5 h-5 border-2 border-blue border-t-transparent rounded-full animate-spin" />
                          <span className="text-sm font-medium text-navy">Analysing your website...</span>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue rounded-full animate-pulse" style={{ width: '60%' }} />
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-teal rounded-full animate-pulse" style={{ width: '40%' }} />
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue rounded-full animate-pulse" style={{ width: '80%' }} />
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-teal rounded-full animate-pulse" style={{ width: '30%' }} />
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-4">Checking SEO, speed, mobile, and security factors...</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Phase: Results */}
              {phase === 'results' && scanResult && (
                <div className="bg-white rounded-2xl border border-gray-100 p-8 lg:p-12 shadow-sm">
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold ${scanResult.score >= 70 ? 'bg-green-100 text-green-600' : scanResult.score >= 50 ? 'bg-orange/10 text-orange' : 'bg-red-100 text-red-600'}`}>
                      {scanResult.score}
                    </div>
                    <h2 className="text-2xl font-bold text-navy">Your Website Score</h2>
                    <p className="text-gray-500 text-sm mt-1">Based on our analysis of <span className="font-medium text-navy">{url}</span></p>
                    {scanResult.score < 70 && (
                      <p className="text-gray-500 text-sm mt-4 max-w-md mx-auto">
                        There is room for improvement. Enter your details below to receive a full audit report with step-by-step recommendations.
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: 'SEO', value: scanResult.seo, color: scanResult.seo >= 65 ? 'text-green-600' : scanResult.seo >= 45 ? 'text-orange' : 'text-red-600', bg: scanResult.seo >= 65 ? 'bg-green-100' : scanResult.seo >= 45 ? 'bg-orange/10' : 'bg-red-100' },
                      { label: 'Speed', value: scanResult.speed, color: scanResult.speed >= 65 ? 'text-green-600' : scanResult.speed >= 45 ? 'text-orange' : 'text-red-600', bg: scanResult.speed >= 65 ? 'bg-green-100' : scanResult.speed >= 45 ? 'bg-orange/10' : 'bg-red-100' },
                      { label: 'Mobile', value: scanResult.mobile, color: scanResult.mobile >= 65 ? 'text-green-600' : scanResult.mobile >= 45 ? 'text-orange' : 'text-red-600', bg: scanResult.mobile >= 65 ? 'bg-green-100' : scanResult.mobile >= 45 ? 'bg-orange/10' : 'bg-red-100' },
                      { label: 'Security', value: scanResult.security, color: scanResult.security >= 65 ? 'text-green-600' : scanResult.security >= 45 ? 'text-orange' : 'text-red-600', bg: scanResult.security >= 65 ? 'bg-green-100' : scanResult.security >= 45 ? 'bg-orange/10' : 'bg-red-100' },
                    ].map((m) => (
                      <div key={m.label} className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className={`w-10 h-10 mx-auto mb-2 rounded-full ${m.bg} flex items-center justify-center`}>
                          <span className={`text-lg font-bold ${m.color}`}>{m.value}</span>
                        </div>
                        <p className="text-xs font-medium text-gray-500">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-8">
                    <h3 className="font-semibold text-navy text-sm">Key Findings</h3>
                    {scanResult.issues.map((issue, i) => (
                      <div key={i} className={`flex items-start gap-3 p-3 rounded-xl text-sm ${
                        issue.severity === 'critical' ? 'bg-red-50 text-red-700' :
                        issue.severity === 'warning' ? 'bg-orange/5 text-orange-dark' :
                        'bg-green-50 text-green-700'
                      }`}>
                        {issue.severity === 'critical' ? (
                          <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                        ) : issue.severity === 'warning' ? (
                          <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        ) : (
                          <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        )}
                        <span>{issue.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <Button onClick={() => setPhase('form')} size="lg">
                      Get My Full Report
                    </Button>
                  </div>
                </div>
              )}

              {/* Phase: Form */}
              {phase === 'form' && (
                <div className="bg-white rounded-2xl border border-gray-100 p-8 lg:p-10 shadow-sm">
                  <div className="text-center mb-8">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue to-teal flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-navy mb-2">Get Your Full Audit Report</h2>
                    <p className="text-gray-500 text-sm max-w-md mx-auto">
                      Enter your details below and we will send your comprehensive audit report with personalised recommendations.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">Full Name *</label>
                      <input type="text" id="name" name="name" required value={form.name} onChange={handleFormChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all text-navy placeholder-gray-400"
                        placeholder="Your full name" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">Email Address *</label>
                        <input type="email" id="email" name="email" required value={form.email} onChange={handleFormChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all text-navy placeholder-gray-400"
                          placeholder="you@example.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" required value={form.phone} onChange={handleFormChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all text-navy placeholder-gray-400"
                          placeholder="+44 7346 071355" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-sm font-semibold text-navy mb-2">Business Description *</label>
                      <textarea id="business" name="business" required rows={4} value={form.business} onChange={handleFormChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all text-navy placeholder-gray-400 resize-none"
                        placeholder="Tell us about your business, what you offer, and your target audience..." />
                    </div>
                    {formError && <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{formError}</p>}
                    <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={sending}>
                      {sending ? 'Sending...' : 'Send Me My Report'}
                    </Button>
                  </form>
                </div>
              )}

              {/* Phase: Done */}
              {phase === 'done' && (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 lg:p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-2">Report on Its Way!</h2>
                  <p className="text-gray-500 mb-2">
                    Thank you, <strong>{form.name}</strong>. We have scanned <strong>{url}</strong> and are preparing your personalised audit report.
                  </p>
                  <p className="text-gray-500 mb-6">
                    Your report will be sent to <strong>{form.email}</strong> within 48 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button href="/" variant="primary">Back to Home</Button>
                    <Button href="/services" variant="outline">View Our Services</Button>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-3xl mx-auto mt-16">
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
                <h3 className="text-xl font-bold text-navy mb-6 text-center">What&rsquo;s Included in Your Full Report</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue/10 flex items-center justify-center shrink-0"><svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                    <div><p className="font-semibold text-navy text-sm">SEO Analysis</p><p className="text-gray-500 text-xs">Keyword gaps, meta tags, backlinks</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center shrink-0"><svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
                    <div><p className="font-semibold text-navy text-sm">Speed Optimisation</p><p className="text-gray-500 text-xs">Load times, Core Web Vitals, fixes</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center shrink-0"><svg className="w-4 h-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></div>
                    <div><p className="font-semibold text-navy text-sm">Mobile Experience</p><p className="text-gray-500 text-xs">Responsiveness, tap targets, UX</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center shrink-0"><svg className="w-4 h-4 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                    <div><p className="font-semibold text-navy text-sm">Competitor Insights</p><p className="text-gray-500 text-xs">Top competitors, gaps, opportunities</p></div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <TrustBadges />
      </ScrollReveal>

      <ScrollReveal>
        <CTASection
          title="Prefer to Talk to Us Directly?"
          description="Schedule a free consultation call and let us discuss how we can help your business grow."
          primaryLabel="Contact Us"
          primaryHref="/contact"
          variant="navy"
        />
      </ScrollReveal>
    </>
  )
}
