import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Boyzeth Solutions',
  description: 'Explore our portfolio of web development, social media, content, and advertising projects.',
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
