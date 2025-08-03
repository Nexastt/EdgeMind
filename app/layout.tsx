import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EdgeMind - Your Local Mobile RAG Assistant',
  description: 'EdgeMind is a powerful local mobile RAG app that can replace Google Assistant. Open apps, control your device, and navigate settings with simple text commands. Privacy-focused and powerful.',
  keywords: 'EdgeMind, mobile RAG, local AI, assistant, privacy, mobile app, voice commands, device control',
  authors: [{ name: 'EdgeMind Team' }],
  creator: 'EdgeMind',
  openGraph: {
    title: 'EdgeMind - Your Local Mobile RAG Assistant',
    description: 'The future of mobile assistance. Local, private, and powerful.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 