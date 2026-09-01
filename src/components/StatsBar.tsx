export default function StatsBar() {
  const stats = [
    { value: 'Bordeaux · 2022', label: 'Barreau de Bordeaux' },
    { value: 'IP · Numérique · Sociétés', label: 'Domaines principaux' },
    { value: '"Ones to watch" 2023', label: 'Best Lawyers — Propriété intellectuelle' },
    { value: '06 35 31 99 54', label: 'Contact direct' },
  ]

  return (
    <section style={{ background: '#1c2b3a', borderBottom: '1px solid rgba(74,136,168,0.12)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className={i < 3 ? 'stat-sep' : undefined}
              style={{ padding: '2.2rem 1.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(0.80rem, 1.8vw, 1.15rem)', color: '#4a88a8', fontWeight: 400, lineHeight: 1.2 }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.60rem', color: 'rgba(242,244,246,0.30)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.5rem' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
