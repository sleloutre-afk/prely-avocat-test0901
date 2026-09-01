'use client'
import { useEffect, useState } from 'react'

export function MonogramEP({ color = '#2e6a8a', size = 56 }: { color?: string; size?: number }) {
  const r = size / 2
  const stroke = size * 0.025
  const fsMain = size * 0.215
  const fsSub = size * 0.105
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden="true">
      <circle cx={r} cy={r} r={r - stroke} stroke={color} strokeWidth={stroke} fill="none" />
      <circle cx={r} cy={r} r={r - stroke * 4} stroke={color} strokeWidth={stroke * 0.4} fill="none" opacity="0.35" />
      <text x={r} y={r - fsSub * 0.6} textAnchor="middle"
        fontFamily="var(--font-playfair), Georgia, serif"
        fontSize={fsMain} fontWeight="400" letterSpacing="0.04em" fill={color}>
        E.P.
      </text>
      <text x={r} y={r + fsMain * 0.55} textAnchor="middle"
        fontFamily="var(--font-playfair), Georgia, serif"
        fontSize={fsSub} fontWeight="400" letterSpacing="0.16em" fill={color} opacity="0.75">
        AVOCAT
      </text>
    </svg>
  )
}

const LINKS = [
  { label: 'Cabinet', href: '#cabinet' },
  { label: 'Domaines', href: '#domaines' },
  { label: 'Honoraires', href: '#honoraires' },
  { label: 'Ressources', href: '/ressources' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const bg = scrolled ? 'rgba(242,244,246,0.96)' : 'transparent'
  const linkColor = scrolled ? 'rgba(28,43,58,0.68)' : 'rgba(242,244,246,0.80)'
  const nameColor = scrolled ? '#1c2b3a' : '#f2f4f6'
  const subtitleColor = scrolled ? '#2e6a8a' : 'rgba(74,136,168,0.80)'
  const burgerColor = scrolled ? '#1c2b3a' : 'rgba(242,244,246,0.85)'
  const monoColor = scrolled ? '#2e6a8a' : 'rgba(242,244,246,0.80)'

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: bg,
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(28,43,58,0.08)' : '1px solid transparent',
      transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
    }}>
      <div className="max-w-6xl mx-auto px-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
          <MonogramEP color={monoColor} size={42} />
          <div>
            <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.88rem', color: nameColor, fontWeight: 400, lineHeight: 1.1, transition: 'color 0.3s' }}>
              Maître Erwan Prély
            </div>
            <div style={{ fontSize: '0.50rem', color: subtitleColor, letterSpacing: '0.16em', textTransform: 'uppercase', transition: 'color 0.3s' }}>
              Avocat au Barreau de Bordeaux
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="nav-desktop" style={{ gap: '2.0rem' }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: linkColor, textDecoration: 'none', transition: 'color 0.3s' }}>
              {l.label}
            </a>
          ))}
          <a href="tel:+33635319954" style={{
            fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            border: scrolled ? '1px solid rgba(46,106,138,0.45)' : '1px solid rgba(242,244,246,0.35)',
            color: scrolled ? '#2e6a8a' : 'rgba(242,244,246,0.85)',
            padding: '0.55rem 1.2rem', textDecoration: 'none',
            transition: 'border-color 0.3s, color 0.3s',
          }}>
            06 35 31 99 54
          </a>
        </nav>

        {/* Burger button */}
        <button className="nav-burger" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', flexDirection: 'column', gap: '5px' }}
          aria-label="Menu">
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: 'block', width: '22px', height: '1.5px', background: burgerColor, transition: 'transform 0.2s, opacity 0.2s',
              transform: i === 0 && menuOpen ? 'rotate(45deg) translate(4px,4px)' : i === 2 && menuOpen ? 'rotate(-45deg) translate(4px,-4px)' : 'none',
              opacity: i === 1 && menuOpen ? 0 : 1,
            }} />
          ))}
        </button>

      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{ background: 'rgba(242,244,246,0.97)', padding: '8px 24px 24px', borderTop: '1px solid rgba(28,43,58,0.08)' }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '12px 0', color: '#1c2b3a', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', borderBottom: '1px solid rgba(28,43,58,0.07)', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
          <a href="tel:+33635319954" onClick={() => setMenuOpen(false)}
            style={{ display: 'block', marginTop: '1rem', padding: '0.8rem 1.2rem', background: '#1c2b3a', color: '#f2f4f6', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center' }}>
            06 35 31 99 54
          </a>
        </div>
      )}
    </header>
  )
}
