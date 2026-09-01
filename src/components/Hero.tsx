import { MonogramEP } from './Navbar'

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '640px', overflow: 'hidden', background: '#1c2b3a' }}>

      <div className="hero-img" style={{ position: 'absolute', inset: '-10%', width: '120%', height: '120%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero.png" alt="Cabinet Erwan Prély — Bordeaux"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      </div>

      {/* Dark overlay — fond sombre pour la lisibilité */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(14,21,32,0.72) 0%, rgba(14,21,32,0.60) 50%, rgba(14,21,32,0.82) 100%)',
      }} />

      <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ paddingTop: '72px', maxWidth: '700px' }}>

          {/* Monogram */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.2rem' }}>
            <MonogramEP color="rgba(242,244,246,0.82)" size={88} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '1.4rem' }}>
            <div style={{ width: '28px', height: '1px', background: '#4a88a8' }} />
            <span style={{ fontSize: '0.56rem', letterSpacing: '0.28em', color: '#4a88a8', textTransform: 'uppercase' }}>
              Barreau de Bordeaux — IP · IT · Contentieux
            </span>
            <div style={{ width: '28px', height: '1px', background: '#4a88a8' }} />
          </div>

          <h1 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
            fontWeight: 400, color: '#f2f4f6',
            lineHeight: 1.15, margin: '0 0 0.6rem',
            letterSpacing: '-0.01em',
          }}>
            Maître Erwan Prély
          </h1>

          <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', color: 'rgba(242,244,246,0.55)', textTransform: 'uppercase', margin: '0 0 1.4rem' }}>
            Avocat au Barreau de Bordeaux
          </p>

          <p style={{ fontSize: '0.85rem', color: 'rgba(242,244,246,0.60)', lineHeight: 1.65, margin: '0 0 0.6rem' }}>
            Propriété intellectuelle · Droit du numérique & IA<br />
            Droit des sociétés · Concurrence déloyale
          </p>
          <p style={{ fontSize: '0.72rem', color: 'rgba(242,244,246,0.32)', letterSpacing: '0.06em', margin: '0 0 3rem' }}>
            Cabinet situé 5 rue Duplessy — Bordeaux
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <a href="tel:+33635319954" className="hover-btn-primary" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.55rem',
              background: '#2e6a8a', color: '#f2f4f6',
              textDecoration: 'none', fontSize: '0.70rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '1rem 2.2rem',
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Appeler le cabinet
            </a>
            <a href="mailto:erwan.prely@avocat.fr" className="hover-btn-outline-light" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(242,244,246,0.30)', color: 'rgba(242,244,246,0.85)',
              textDecoration: 'none', fontSize: '0.70rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '1rem 2.2rem',
            }}>
              Écrire un email
            </a>
          </div>

        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)' }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(74,136,168,0.60), transparent)' }} />
      </div>

    </section>
  )
}
