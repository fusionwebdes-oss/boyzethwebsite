'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  {
    label: 'Services',
    dropdown: [
      { href: '/services/web-development', label: 'Web Development' },
      { href: '/services/social-media-management', label: 'Social Media Management' },
      { href: '/services/blog-writing', label: 'Blog Writing' },
      { href: '/services/google-business-profile', label: 'Google Business Profile' },
      { href: '/services/bing-business-management', label: 'Bing Business Management' },
      { href: '/services/content-creation', label: 'Content Creation' },
      { href: '/services/paid-advertising', label: 'Paid Advertising' },
      { href: '/services/community-management', label: 'Community Management' },
      { href: '/services/analytics-reporting', label: 'Analytics & Reporting' },
      { href: '/services/strategy-development', label: 'Strategy Development' },
    ],
  },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/locations', label: 'Locations' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setDropdownOpen(true)
  }

  const closeDropdownDelayed = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 150)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setMobileOpen(false)
    setDropdownOpen(false)
    setMobileDropdownOpen(false)
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [pathname])

  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current) }
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      {/* Top Bar */}
      <div className={`hidden lg:flex border-b transition-colors ${scrolled ? 'border-gray-100' : 'border-white/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-9">
            <a href="mailto:hello@boyzethsolutions.com" className={`flex items-center gap-1.5 text-xs transition-colors ${scrolled ? 'text-gray-400 hover:text-blue' : 'text-gray-400 hover:text-white'}`}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              hello@boyzethsolutions.com
            </a>
            <a href="tel:+447346071355" className={`flex items-center gap-1.5 text-xs transition-colors ${scrolled ? 'text-gray-400 hover:text-blue' : 'text-gray-400 hover:text-white'}`}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +44 7346 071355
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-48">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="Boyzeth Solutions" width={400} height={100} className="h-20 lg:h-44 w-auto" priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdownDelayed}>
                  <div className={`flex items-center rounded-lg transition-colors ${pathname.startsWith('/services') ? 'bg-blue/5' : 'hover:bg-blue/5'}`}>
                    <Link href="/services" className={`px-3 py-2 text-sm font-medium transition-colors ${pathname.startsWith('/services') ? 'text-blue' : 'text-gray-600 hover:text-blue'}`}>
                      {link.label}
                    </Link>
                    <button onClick={() => setDropdownOpen(d => !d)} className={`pr-2 py-2 transition-colors ${pathname.startsWith('/services') ? 'text-blue' : 'text-gray-400 hover:text-blue'}`} aria-label="Toggle services menu">
                      <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                  </div>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 animate-fade-in -mt-2 pt-2" onMouseEnter={openDropdown} onMouseLeave={closeDropdownDelayed}>
                      {link.dropdown.map((item) => (
                        <Link key={item.href} href={item.href} className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue hover:bg-blue-50 transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href!} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${pathname === link.href ? 'text-blue bg-blue/5' : 'text-gray-600 hover:text-blue hover:bg-blue/5'}`}>
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button href="/free-audit" size="sm">Free Audit</Button>
          </div>

          <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <div className="flex items-center justify-between w-full px-4 py-3">
                    <Link href="/services" className="text-sm font-medium text-gray-600 hover:text-blue transition-colors" onClick={() => setMobileOpen(false)}>
                      {link.label}
                    </Link>
                    <button onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} className="text-gray-400 hover:text-blue transition-colors p-1">
                      <svg className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                  </div>
                  {mobileDropdownOpen && (
                    <div className="pl-4 pb-2 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-gray-500 hover:text-blue rounded-lg transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href!} className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-blue rounded-lg hover:bg-blue-5 transition-colors">
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 space-y-3">
              <a href="tel:+447346071355" className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-blue bg-blue/5 rounded-xl hover:bg-blue/10 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +44 7346 071355
              </a>
              <Button href="/free-audit" variant="outline" className="w-full">Free Audit</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
