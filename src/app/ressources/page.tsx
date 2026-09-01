import { articles } from '@/lib/articles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Ressources juridiques — Cabinet Erwan Prély Avocat",
  description: "Articles juridiques en propriété intellectuelle, droit du numérique, droit des sociétés et concurrence déloyale — Cabinet Erwan Prély, Bordeaux.",
}

export default function RessourcesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', background: '#f2f4f6', minHeight: '100vh' }}>
        <div style={{ background: '#1c2b3a', padding: '5rem 0 4rem' }}>
          <div className="max-w-6xl mx-auto px-6" style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
              <div style={{ width: '24px', height: '1px', background: '#4a88a8' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#4a88a8', textTransform: 'uppercase' }}>Ressources juridiques</span>
              <div style={{ width: '24px', height: '1px', background: '#4a88a8' }} />
            </div>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400, color: '#f2f4f6', margin: '0 0 1rem', lineHeight: 1.18 }}>
              Articles & éclairages juridiques
            </h1>
            <p style={{ fontSize: '0.84rem', color: 'rgba(242,244,246,0.35)', margin: 0 }}>
              Propriété intellectuelle · Numérique · Droit des sociétés · Concurrence
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6" style={{ padding: '5rem 1.5rem 7rem' }}>
          <div className="md:grid-cols-3" style={{ display: 'grid', gap: '1.5rem' }}>
            {articles.map(article => (
              <a key={article.slug} href={`/ressources/${article.slug}`}
                className="hover-article"
                style={{ textDecoration: 'none', background: '#fff', border: '1px solid rgba(28,43,58,0.07)' }}>
                <div style={{ padding: '2rem 1.8rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                    <span style={{ fontSize: '0.56rem', letterSpacing: '0.16em', color: '#2e6a8a', textTransform: 'uppercase' }}>{article.category}</span>
                    <span style={{ fontSize: '0.60rem', color: 'rgba(28,43,58,0.28)', letterSpacing: '0.06em' }}>{article.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.95rem', fontWeight: 400, color: '#1c2b3a', margin: '0 0 0.9rem', lineHeight: 1.40 }}>
                    {article.titre}
                  </h2>
                  <p style={{ fontSize: '0.75rem', color: '#4a6070', lineHeight: 1.70, margin: '0 0 1.2rem' }}>
                    {article.extrait.slice(0, 120)}…
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.60rem', letterSpacing: '0.14em', color: '#2e6a8a', textTransform: 'uppercase' }}>
                      Lire l&apos;article →
                    </span>
                    <span style={{ fontSize: '0.60rem', color: 'rgba(28,43,58,0.25)' }}>{article.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
