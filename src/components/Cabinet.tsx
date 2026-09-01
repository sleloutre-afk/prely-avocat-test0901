export default function Cabinet() {
  return (
    <section id="cabinet" style={{ background: '#f2f4f6', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid-2col" style={{ gap: '5rem', alignItems: 'flex-start' }}>

          {/* Colonne gauche : photo + formation + expérience */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {/* Photo */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
              <div style={{
                position: 'absolute', top: '-14px', left: '-14px', zIndex: 0,
                width: '72px', height: '72px',
                borderTop: '1px solid rgba(46,106,138,0.40)',
                borderLeft: '1px solid rgba(46,106,138,0.40)',
              }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/prely.png" alt="Maître Erwan Prély — Avocat à Bordeaux"
                style={{ position: 'relative', zIndex: 1, width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: '-14px', right: '-14px', zIndex: 0,
                width: '72px', height: '72px',
                borderBottom: '1px solid rgba(46,106,138,0.40)',
                borderRight: '1px solid rgba(46,106,138,0.40)',
              }} />
              <div style={{
                position: 'absolute', bottom: '-1px', left: 0, zIndex: 2,
                background: '#2e6a8a', color: '#f2f4f6',
                padding: '0.55rem 1.1rem',
                fontFamily: 'var(--font-playfair)', fontSize: '0.70rem', letterSpacing: '0.10em',
              }}>
                Serment 2020
              </div>
            </div>

            {/* Formation */}
            <div style={{ borderTop: '1px solid rgba(28,43,58,0.10)', paddingTop: '2rem' }}>
              <div style={{ fontSize: '0.56rem', letterSpacing: '0.22em', color: '#2e6a8a', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
                Formation
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {[
                  { date: '2012–2015', titre: "Licence Histoire de l'Art", lieu: 'Université Paris-Sorbonne' },
                  { date: '2015–2016', titre: 'Master I Droit privé général', lieu: 'Paris II Panthéon-Assas' },
                  { date: '2016–2017', titre: 'Master II DPLA', lieu: 'Paris II Panthéon-Assas · Pr P.-Y. Gautier' },
                  { date: '2019–2020', titre: 'EFB — Promo Jacques Toubon', lieu: 'Droit des Affaires · Propriété Intellectuelle' },
                  { date: 'Juin 2020', titre: 'Serment', lieu: 'Barreau de Paris' },
                  { date: '2022', titre: 'Transfert', lieu: 'Barreau de Bordeaux' },
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ fontSize: '0.60rem', color: '#2e6a8a', letterSpacing: '0.06em', minWidth: '58px', paddingTop: '1px', flexShrink: 0 }}>{f.date}</span>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#1c2b3a', lineHeight: 1.3 }}>{f.titre}</div>
                      <div style={{ fontSize: '0.65rem', color: 'rgba(28,43,58,0.45)', lineHeight: 1.4 }}>{f.lieu}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expérience */}
            <div style={{ borderTop: '1px solid rgba(28,43,58,0.10)', paddingTop: '2rem' }}>
              <div style={{ fontSize: '0.56rem', letterSpacing: '0.22em', color: '#2e6a8a', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
                Expérience professionnelle
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {[
                  { date: '2019', titre: 'Direction juridique', lieu: "L'Oréal · Groupe Renault" },
                  { date: '2020', titre: 'Élève-avocat IP-IT', lieu: 'Gide Loyrette Nouel' },
                  { date: '2020–2022', titre: 'Avocat', lieu: "Franklin société d'avocats · Paris" },
                  { date: '2022–2024', titre: 'Avocat', lieu: 'EY Société d\'Avocats · Bordeaux' },
                  { date: '2023 –', titre: 'Expert Commercial-IP-Data', lieu: 'Incubateur HEC Paris (pro bono)' },
                  { date: '2024 –', titre: 'Avocat collaborateur', lieu: 'Lexymore · Bordeaux' },
                ].map((e, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ fontSize: '0.60rem', color: '#2e6a8a', letterSpacing: '0.06em', minWidth: '58px', paddingTop: '1px', flexShrink: 0 }}>{e.date}</span>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#1c2b3a', lineHeight: 1.3 }}>{e.titre}</div>
                      <div style={{ fontSize: '0.65rem', color: 'rgba(28,43,58,0.45)', lineHeight: 1.4 }}>{e.lieu}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '28px', height: '1px', background: '#2e6a8a' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#2e6a8a', textTransform: 'uppercase' }}>Le cabinet</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 400, color: '#1c2b3a',
              margin: '0 0 2rem', lineHeight: 1.18, letterSpacing: '-0.01em',
            }}>
              La rigueur des grands cabinets<br />
              <em style={{ color: '#2e6a8a', fontStyle: 'italic' }}>au service de votre innovation</em>
            </h2>

            <p style={{ fontSize: '0.88rem', color: '#4a6070', lineHeight: 1.80, margin: '0 0 1.2rem' }}>
              Erwan Prély est avocat au Barreau de Bordeaux, spécialisé en propriété intellectuelle, droit du numérique et contentieux des affaires. Son parcours est singulier : titulaire d&apos;une licence en Histoire de l&apos;Art de Paris-Sorbonne, il oriente ensuite sa formation vers le droit de la propriété littéraire, artistique et industrielle à Paris II Panthéon-Assas — une double sensibilité culturelle et juridique qui nourrit son approche des droits créatifs.
            </p>

            <p style={{ fontSize: '0.88rem', color: '#4a6070', lineHeight: 1.80, margin: '0 0 1.2rem' }}>
              Après des stages au sein des directions juridiques de L&apos;Oréal et du Groupe Renault, puis un passage chez Gide Loyrette Nouel en IP-IT, il prête serment au Barreau de Paris en 2020 et intègre le cabinet Franklin, référence du contentieux des affaires. Il rejoint Bordeaux en 2022 au sein d&apos;EY Société d&apos;Avocats, puis collabore avec Lexymore à partir de 2024.
            </p>

            <p style={{ fontSize: '0.88rem', color: '#4a6070', lineHeight: 1.80, margin: '0 0 1.2rem' }}>
              En parallèle, il intervient à titre pro bono auprès des start-ups de l&apos;Incubateur HEC Paris sur les enjeux commerciaux, de propriété intellectuelle et de données. Reconnu <em>«&nbsp;Ones to watch&nbsp;»</em> en propriété intellectuelle par le classement Best Lawyers depuis 2023, il conjugue l&apos;exigence technique des grandes structures et la proximité d&apos;un cabinet à taille humaine.
            </p>

            <p style={{ fontSize: '0.88rem', color: '#4a6070', lineHeight: 1.80, margin: '0 0 2rem' }}>
              Bilingue français-anglais, il accompagne également des clients internationaux dans la protection de leurs actifs intellectuels et leur développement sur le marché français.
            </p>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {['Propriété intellectuelle', 'Droit du numérique', 'Droit des sociétés', 'Bilingue FR/EN'].map(d => (
                <span key={d} style={{
                  fontSize: '0.60rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                  border: '1px solid rgba(28,43,58,0.18)', color: '#4a6070',
                  padding: '0.35rem 0.85rem',
                }}>{d}</span>
              ))}
              <span style={{
                fontSize: '0.60rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                border: '1px solid rgba(46,106,138,0.40)', color: '#2e6a8a',
                padding: '0.35rem 0.85rem',
              }}>Best Lawyers 2023</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
