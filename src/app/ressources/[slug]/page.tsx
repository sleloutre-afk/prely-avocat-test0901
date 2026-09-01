import { articles, getArticleBySlug } from '@/lib/articles'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.titre} — Cabinet Erwan Prély Avocat`,
    description: article.extrait,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const paragraphs = article.contenu.split('\n\n').filter(Boolean)

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', background: '#f2f4f6', minHeight: '100vh' }}>

        <div style={{ background: '#1c2b3a', padding: '5rem 0 4rem' }}>
          <div className="max-w-3xl mx-auto px-6">
            <a href="/ressources" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.62rem', letterSpacing: '0.16em', color: 'rgba(74,136,168,0.70)', textTransform: 'uppercase', textDecoration: 'none', marginBottom: '2rem' }}>
              ← Retour aux ressources
            </a>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.16em', color: '#4a88a8', textTransform: 'uppercase' }}>{article.category}</span>
              <span style={{ fontSize: '0.62rem', color: 'rgba(242,244,246,0.24)' }}>{article.date}</span>
              <span style={{ fontSize: '0.62rem', color: 'rgba(242,244,246,0.24)' }}>{article.readTime} de lecture</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 400, color: '#f2f4f6', margin: 0, lineHeight: 1.25 }}>
              {article.titre}
            </h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6" style={{ padding: '4rem 1.5rem 6rem' }}>
          <p style={{ fontSize: '0.95rem', color: '#1c2b3a', lineHeight: 1.80, margin: '0 0 2.5rem', fontStyle: 'italic', borderLeft: '3px solid #2e6a8a', paddingLeft: '1.2rem' }}>
            {article.extrait}
          </p>

          {paragraphs.map((block, i) => {
            if (block.startsWith('**') && block.endsWith('**')) {
              return (
                <h2 key={i} style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.15rem', fontWeight: 400, color: '#1c2b3a', margin: '2.5rem 0 1rem' }}>
                  {block.slice(2, -2)}
                </h2>
              )
            }
            return (
              <p key={i} style={{ fontSize: '0.88rem', color: '#4a6070', lineHeight: 1.85, margin: '0 0 1.4rem' }}>
                {block}
              </p>
            )
          })}

          <div style={{ borderTop: '1px solid rgba(28,43,58,0.12)', paddingTop: '2.5rem', marginTop: '3rem' }}>
            <p style={{ fontSize: '0.80rem', color: '#4a6070', lineHeight: 1.70, marginBottom: '1.5rem' }}>
              Cet article est fourni à titre informatif et ne saurait constituer un conseil juridique personnalisé. Pour toute situation spécifique, nous vous invitons à contacter Maître Prély.
            </p>
            <a href="/#contact" className="hover-btn-dark" style={{
              display: 'inline-block', background: '#1c2b3a', color: '#f2f4f6',
              textDecoration: 'none', fontSize: '0.70rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '1rem 2.2rem',
            }}>
              Prendre contact
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
