export default function Contact() {
  return (
    <section id="contact" style={{ background: '#e5e9ed', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#2e6a8a' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#2e6a8a', textTransform: 'uppercase' }}>Contact</span>
            <div style={{ width: '24px', height: '1px', background: '#2e6a8a' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#1c2b3a', margin: 0, lineHeight: 1.20 }}>
            Prendre contact avec le cabinet
          </h2>
        </div>

        <div className="grid-2col" style={{ gap: '4rem', alignItems: 'stretch' }}>

          {/* Office photo + coordinates */}
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/office.png" alt="Cabinet Erwan Prély — 5 rue Duplessy, Bordeaux"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(14,21,32,0.45) 0%, rgba(14,21,32,0.88) 100%)' }} />
            <div style={{ position: 'relative', padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>

              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.00rem', color: '#f2f4f6', fontWeight: 400, marginBottom: '1.6rem' }}>
                Cabinet Erwan Prély — Avocat
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(74,136,168,0.80)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span style={{ fontSize: '0.80rem', color: 'rgba(242,244,246,0.70)', lineHeight: 1.50 }}>
                    5 rue Duplessy<br />33000 Bordeaux
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(74,136,168,0.80)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <a href="tel:+33635319954" style={{ fontSize: '0.80rem', color: 'rgba(242,244,246,0.70)', textDecoration: 'none' }}>06 35 31 99 54</a>
                    <a href="tel:+33535545130" style={{ fontSize: '0.75rem', color: 'rgba(242,244,246,0.40)', textDecoration: 'none' }}>05 35 54 51 30 (bureau)</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(74,136,168,0.80)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <a href="mailto:erwan.prely@avocat.fr" style={{ fontSize: '0.80rem', color: 'rgba(242,244,246,0.70)', textDecoration: 'none' }}>erwan.prely@avocat.fr</a>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(74,136,168,0.80)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span style={{ fontSize: '0.80rem', color: 'rgba(242,244,246,0.70)', lineHeight: 1.50 }}>
                    Sur rendez-vous<br />Lun – Ven : 9h – 18h
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', fontWeight: 400, color: '#1c2b3a', margin: '0 0 1rem' }}>
                Consultez le cabinet
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#4a6070', lineHeight: 1.75, margin: '0 0 2rem' }}>
                Pour toute question relative à la protection de vos marques, brevets ou droits d&apos;auteur, la conformité de vos projets numériques ou un contentieux commercial, contactez le cabinet par téléphone ou par email. Un premier entretien permettra d&apos;évaluer votre situation et de définir la meilleure approche.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="tel:+33635319954" className="hover-btn-dark" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.7rem',
                  background: '#1c2b3a', color: '#f2f4f6',
                  textDecoration: 'none', fontSize: '0.72rem',
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  padding: '1.1rem 2rem',
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  06 35 31 99 54
                </a>
                <a href="mailto:erwan.prely@avocat.fr" className="hover-btn-outline" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid rgba(28,43,58,0.22)', color: '#1c2b3a',
                  textDecoration: 'none', fontSize: '0.72rem',
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  padding: '1.1rem 2rem',
                }}>
                  erwan.prely@avocat.fr
                </a>
              </div>
            </div>

            <div style={{ border: '1px solid rgba(28,43,58,0.10)', padding: '2rem', background: '#f2f4f6' }}>
              <div style={{ fontSize: '0.56rem', letterSpacing: '0.20em', color: '#2e6a8a', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                Informations pratiques
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ fontSize: '0.80rem', color: '#4a6070', lineHeight: 1.55 }}>
                  Consultations sur rendez-vous au cabinet ou en visioconférence
                </div>
                <div style={{ fontSize: '0.80rem', color: '#4a6070', lineHeight: 1.55 }}>
                  Interventions en français et en anglais
                </div>
                <div style={{ fontSize: '0.80rem', color: '#4a6070', lineHeight: 1.55 }}>
                  Barreau de Bordeaux — Membre n° 814
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
