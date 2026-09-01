const domaines = [
  {
    svg: '/pi.svg',
    titre: 'Propriété intellectuelle',
    description: "Marques, brevets, dessins et modèles, droits d'auteur — protection, exploitation et défense de vos actifs immatériels devant les juridictions compétentes.",
    tags: ['Marques', 'Brevets', 'Droits d\'auteur', 'Dessins & modèles'],
  },
  {
    svg: '/numerique.svg',
    titre: 'Droit du numérique & IA',
    description: "Contrats informatiques, logiciels, intelligence artificielle, RGPD et données personnelles — sécuriser vos projets technologiques de la conception à l'exploitation.",
    tags: ['Contrats IT', 'Intelligence artificielle', 'RGPD', 'Logiciels'],
  },
  {
    svg: '/societes.svg',
    titre: 'Droit des sociétés',
    description: "Création, gouvernance, conflits entre associés, restructurations — accompagnement des dirigeants et actionnaires à chaque étape de la vie de leur société.",
    tags: ['Création', 'Gouvernance', 'Conflits d\'associés', 'Restructuration'],
  },
  {
    svg: '/concurrence.svg',
    titre: 'Concurrence déloyale',
    description: "Contrefaçon, parasitisme, imitation, dénigrement — identification et traitement contentieux des actes de concurrence déloyale affectant votre activité.",
    tags: ['Contrefaçon', 'Parasitisme', 'Dénigrement', 'Contentieux commercial'],
  },
]

export default function Domaines() {
  return (
    <section id="domaines" style={{ background: '#e5e9ed', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#2e6a8a' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#2e6a8a', textTransform: 'uppercase' }}>
              Domaines d&apos;intervention
            </span>
            <div style={{ width: '24px', height: '1px', background: '#2e6a8a' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#1c2b3a', margin: 0, lineHeight: 1.20 }}>
            Des expertises au croisement du droit<br />et des nouvelles technologies
          </h2>
        </div>

        <div className="md:grid-cols-2" style={{ display: 'grid', gap: '1.5rem' }}>
          {domaines.map((d) => (
            <div key={d.titre} className="hover-card" style={{
              background: '#f2f4f6',
              border: '1px solid rgba(28,43,58,0.08)',
              padding: '2.5rem 2.2rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.4rem', marginBottom: '1.4rem' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.svg} alt={d.titre} style={{ width: '44px', height: '44px', flexShrink: 0, opacity: 0.75 }} />
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.10rem', fontWeight: 400, color: '#1c2b3a', margin: 0, lineHeight: 1.25 }}>
                  {d.titre}
                </h3>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#4a6070', lineHeight: 1.75, margin: '0 0 1.4rem' }}>
                {d.description}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {d.tags.map(t => (
                  <span key={t} style={{
                    fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                    border: '1px solid rgba(46,106,138,0.25)', color: '#2e6a8a',
                    padding: '0.28rem 0.70rem',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
