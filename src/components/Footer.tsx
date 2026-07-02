import Link from 'next/link'

const services = [
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
]

const siteMap = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'All Services' },
  { href: '/locations', label: 'Locations' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/industries', label: 'Industries' },
  { href: '/resources', label: 'Resources' },
  { href: '/blog', label: 'Blog' },
  { href: '/free-audit', label: 'Free Audit' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3 animate-slide-up">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue to-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-bold text-xl">Boyzeth Solutions</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Web development, digital marketing, and growth solutions that help businesses scale. 
              Custom strategies, measurable results.
            </p>
            <div className="flex gap-3">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a key={social} href={`https://${social.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-light rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue hover:text-white transition-all duration-300 text-xs font-medium">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={s.href} className="animate-fade-in" style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}>
                  <Link href={s.href} className="text-gray-400 hover:text-teal transition-colors text-sm">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Site Map</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {siteMap.map((c, i) => (
                <li key={c.href} className="animate-fade-in" style={{ animationDelay: `${i * 0.04}s`, animationFillMode: 'both' }}>
                  <Link href={c.href} className="text-gray-400 hover:text-teal transition-colors text-sm">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:hello@boyzethsolutions.com" className="hover:text-teal transition-colors">hello@boyzethsolutions.com</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+447346071355" className="hover:text-teal transition-colors">+44 7346 071355</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>West Midlands, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-xs uppercase tracking-wider mb-4">Secure &amp; Trusted Checkout</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://trustlock.co" target="_blank" rel="noopener noreferrer">
              <img alt="Trust Badges" style={{ border: 0 }} src="https://trustlock.co/wp-content/uploads/2019/01/guaranteed-safe-checkout-5.png" width="238" height="44" />
            </a>
            <a href="https://trustlock.co" target="_blank" rel="noopener noreferrer">
              <img alt="Trust Badges" style={{ border: 0 }} src="https://trustlock.co/wp-content/uploads/2019/01/ssl-checkout-trust-seal.png" width="238" height="44" />
            </a>
            <a href="https://trustlock.co" target="_blank" rel="noopener noreferrer">
              <img alt="Trust Badges" style={{ border: 0 }} src="https://trustlock.co/wp-content/uploads/2019/01/trust-seals-aes-256-bit-ssl.png" width="238" height="44" />
            </a>
            <a href="https://trustlock.co" target="_blank" rel="noopener noreferrer">
              <img alt="Trust Badges" style={{ border: 0 }} src="https://trustlock.co/wp-content/uploads/2019/01/old-credit-card-logo-icons-free.png" width="148" height="65" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Boyzeth Solutions. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-gray-500 hover:text-teal transition-colors">Privacy Policy</Link>
            <Link href="/" className="text-gray-500 hover:text-teal transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
