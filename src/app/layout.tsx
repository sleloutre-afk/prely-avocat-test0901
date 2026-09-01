import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Maître Erwan Prély — Avocat à Bordeaux | Propriété intellectuelle · Droit du numérique · Droit des sociétés",
  description: "Cabinet Erwan Prély — Avocat au Barreau de Bordeaux. Spécialiste en propriété intellectuelle, droit du numérique, IA et droit des sociétés. 5 rue Duplessy, 33000 Bordeaux.",
  keywords: ["avocat propriété intellectuelle Bordeaux", "droit du numérique Bordeaux", "marques brevets droits auteur", "Erwan Prely avocat", "concurrence déloyale Bordeaux"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter)', background: '#f2f4f6', color: '#1c2b3a', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
