export default function Honoraires() {
  const tarifs = [
    { type: 'Consultation au cabinet ou en visioconférence', duree: '45 min', prix: '150 €' },
    { type: 'Consultation téléphonique', duree: '30 min', prix: '90 €' },
  ]

  const modes = [
    {
      titre: 'Honoraires au forfait',
      description: "Pour les missions délimitées — dépôt de marque, rédaction de conditions générales, consultation ponctuelle —, un forfait est convenu avant toute intervention afin de garantir une totale transparence sur le coût de la prestation.",
    },
    {
      titre: 'Honoraires au temps passé',
      description: "Pour les missions complexes ou contentieuses, les honoraires sont calculés au taux horaire sur la base d'un devis estimatif préalable, avec un suivi régulier de l'avancement du dossier.",
    },
    {
      titre: "Convention d'honoraires",
      description: "Conformément aux règles professionnelles, une convention d'honoraires est systématiquement établie par écrit avant toute intervention. Elle précise la nature de la mission, le mode de calcul et les conditions de règlement.",
    },
  ]

  return (
    <section id="honoraires" style={{ background: '#2e6a8a', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(242,244,246,0.35)' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: 'rgba(242,244,246,0.55)', textTransform: 'uppercase' }}>Honoraires</span>
            <div style={{ width: '24px', height: '1px', background: 'rgba(242,244,246,0.35)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#f2f4f6', margin: 0, lineHeight: 1.20 }}>
            Transparence des honoraires
          </h2>
        </div>

        <div style={{ maxWidth: '560px', margin: '0 auto 4rem', borderTop: '1px solid rgba(242,244,246,0.15)' }}>
          {tarifs.map((t, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '1.4rem 0',
              borderBottom: '1px solid rgba(242,244,246,0.10)',
              gap: '1rem', flexWrap: 'wrap',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.95rem', color: '#f2f4f6', fontWeight: 400 }}>{t.type}</div>
                <div style={{ fontSize: '0.62rem', color: 'rgba(242,244,246,0.35)', letterSpacing: '0.10em', textTransform: 'uppercase', marginTop: '0.2rem' }}>{t.duree}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.20rem', color: 'rgba(242,244,246,0.85)', fontWeight: 400, flexShrink: 0 }}>
                {t.prix} <span style={{ fontSize: '0.62rem', color: 'rgba(242,244,246,0.30)', letterSpacing: '0.06em' }}>TTC</span>
              </div>
            </div>
          ))}
        </div>

        <div className="md:grid-cols-3" style={{ display: 'grid', gap: '1.5rem', marginBottom: '3.5rem' }}>
          {modes.map((m, i) => (
            <div key={i} style={{ border: '1px solid rgba(242,244,246,0.14)', padding: '2rem 1.8rem' }}>
              <div style={{ width: '28px', height: '1px', background: 'rgba(242,244,246,0.30)', marginBottom: '1.2rem' }} />
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.95rem', fontWeight: 400, color: '#f2f4f6', margin: '0 0 0.8rem', lineHeight: 1.30 }}>{m.titre}</h3>
              <p style={{ fontSize: '0.78rem', color: 'rgba(242,244,246,0.42)', lineHeight: 1.75, margin: 0 }}>{m.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="#contact" className="hover-btn-primary" style={{
            display: 'inline-block',
            background: '#1c2b3a', color: '#f2f4f6',
            textDecoration: 'none', fontSize: '0.70rem',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '1.1rem 2.8rem',
          }}>
            Prendre rendez-vous
          </a>
        </div>

      </div>
    </section>
  )
}
