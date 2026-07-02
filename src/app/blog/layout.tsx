import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Boyzeth Solutions',
  description: 'Read the latest insights, tips, and guides from Boyzeth Solutions on digital marketing, web development, and business growth.',
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
