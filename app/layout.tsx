import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BinarysignalsIA',
  description: 'Plataforma de sinais binários com IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-primary text-white">
        {children}
      </body>
    </html>
  )
}
