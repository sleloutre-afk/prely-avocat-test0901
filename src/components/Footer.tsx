import { MonogramEP } from './Navbar'

export default function Footer() {
  return (
    <footer style={{ background: '#0e1520', borderTop: '1px solid rgba(74,136,168,0.08)', padding: '4.5rem 0 2.5rem' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid-footer" style={{ marginBottom: '3.5rem' }}>

          <div>
            <div style={{ marginBottom: '1.4rem' }}>
              <MonogramEP color="rgba(242,244,246,0.35)" size={48} />
            </div>
            <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', color: '#f2f4f6', margin: '0 0 0.4rem', fontWeight: 400 }}>
              Maître Erwan Prély
            </div>
            <div style={{ fontSize: '0.62rem', color: 'rgba(242,244,246,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              Avocat au Barreau de Bordeaux
            </div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(242,244,246,0.28)', lineHeight: 1.70, margin: 0 }}>
              Propriété intellectuelle · Droit du numérique<br />Droit des sociétés · Concurrence déloyale
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: '#4a88a8', textTransform: 'uppercase', marginBottom: '1.4rem' }}>
              Navigation
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.70rem' }}>
              {[
                { label: 'Le cabinet', href: '#cabinet' },
                { label: "Domaines d'intervention", href: '#domaines' },
                { label: 'Honoraires', href: '#honoraires' },
                { label: 'Ressources', href: '/ressources' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <a key={link.href} href={link.href}
                  style={{ fontSize: '0.78rem', color: 'rgba(242,244,246,0.38)', textDecoration: 'none', lineHeight: 1 }}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <div style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: '#4a88a8', textTransform: 'uppercase', marginBottom: '1.4rem' }}>
              Coordonnées
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div style={{ fontSize: '0.78rem', color: 'rgba(242,244,246,0.38)', lineHeight: 1.55 }}>
                5 rue Duplessy<br />33000 Bordeaux
              </div>
              <a href="tel:+33635319954" style={{ fontSize: '0.78rem', color: 'rgba(242,244,246,0.38)', textDecoration: 'none' }}>
                06 35 31 99 54
              </a>
              <a href="mailto:erwan.prely@avocat.fr" style={{ fontSize: '0.78rem', color: 'rgba(242,244,246,0.38)', textDecoration: 'none' }}>
                erwan.prely@avocat.fr
              </a>
              <div style={{ fontSize: '0.72rem', color: 'rgba(242,244,246,0.20)', marginTop: '0.4rem', lineHeight: 1.55 }}>
                Serment juin 2020 — Barreau de Paris<br />
                Transfert 2022 — Barreau de Bordeaux
              </div>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(74,136,168,0.06)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.8rem' }}>
          <span style={{ fontSize: '0.60rem', color: 'rgba(242,244,246,0.16)', letterSpacing: '0.06em' }}>
            © {new Date().getFullYear()} Cabinet Erwan Prély Avocat — Tous droits réservés
          </span>
          <div style={{ display: 'flex', gap: '1.8rem' }}>
            {[{ label: 'Mentions légales', href: '/mentions-legales' }, { label: 'CGV', href: '/cgv' }].map(link => (
              <a key={link.href} href={link.href} style={{ fontSize: '0.60rem', color: 'rgba(242,244,246,0.16)', textDecoration: 'none', letterSpacing: '0.06em' }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
