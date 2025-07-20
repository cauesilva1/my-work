import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Seu Nome — Landing Pages Freelancer',
  description: 'Criação de landing pages que geram leads reais com diagnóstico grátis via WhatsApp.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans bg-gray-50 text-gray-800">{children}</body>
    </html>
  )
}
