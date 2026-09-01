import { articles } from '@/lib/articles'

export default function Ressources() {
  const preview = articles.slice(0, 6)

  return (
    <section id="ressources" style={{ background: '#f2f4f6', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#2e6a8a' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#2e6a8a', textTransform: 'uppercase' }}>
              Ressources juridiques
            </span>
            <div style={{ width: '24px', height: '1px', background: '#2e6a8a' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#1c2b3a', margin: '0 0 1rem', lineHeight: 1.20 }}>
            Articles & éclairages juridiques
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#4a6070', margin: 0 }}>
            Propriété intellectuelle · Numérique · Droit des sociétés
          </p>
        </div>

        <div className="md:grid-cols-3" style={{ display: 'grid', gap: '1.5rem', marginBottom: '3.5rem' }}>
          {preview.map(article => (
            <a key={article.slug} href={`/ressources/${article.slug}`}
              className="hover-article"
              style={{ textDecoration: 'none', background: '#fff', border: '1px solid rgba(28,43,58,0.07)' }}>
              <div style={{ padding: '2rem 1.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <span style={{ fontSize: '0.56rem', letterSpacing: '0.16em', color: '#2e6a8a', textTransform: 'uppercase' }}>{article.category}</span>
                  <span style={{ fontSize: '0.60rem', color: 'rgba(28,43,58,0.28)', letterSpacing: '0.06em' }}>{article.readTime}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.95rem', fontWeight: 400, color: '#1c2b3a', margin: '0 0 0.9rem', lineHeight: 1.40 }}>
                  {article.titre}
                </h3>
                <p style={{ fontSize: '0.75rem', color: '#4a6070', lineHeight: 1.70, margin: '0 0 1.2rem' }}>
                  {article.extrait.slice(0, 120)}…
                </p>
                <div style={{ fontSize: '0.60rem', letterSpacing: '0.14em', color: '#2e6a8a', textTransform: 'uppercase' }}>
                  Lire l&apos;article →
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/ressources" className="hover-btn-outline" style={{
            display: 'inline-block',
            border: '1px solid rgba(28,43,58,0.22)', color: '#1c2b3a',
            textDecoration: 'none', fontSize: '0.70rem',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '1rem 2.4rem',
          }}>
            Toutes les ressources
          </a>
        </div>

      </div>
    </section>
  )
}
