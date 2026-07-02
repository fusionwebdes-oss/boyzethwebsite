import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources | Boyzeth Solutions',
  description: 'Access free e-books, templates, and tools from Boyzeth Solutions to help grow your business. Digital marketing resources for Nigerian businesses.',
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
