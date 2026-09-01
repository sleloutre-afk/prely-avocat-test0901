export default function Citation() {
  return (
    <section style={{ background: '#1c2b3a', padding: '7rem 0' }}>
      <div className="max-w-4xl mx-auto px-6" style={{ textAlign: 'center' }}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '3rem' }}>
          <div style={{ width: '24px', height: '1px', background: 'rgba(74,136,168,0.50)' }} />
          <span style={{ fontSize: '0.56rem', letterSpacing: '0.28em', color: 'rgba(74,136,168,0.60)', textTransform: 'uppercase' }}>Philosophie du cabinet</span>
          <div style={{ width: '24px', height: '1px', background: 'rgba(74,136,168,0.50)' }} />
        </div>

        <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.10rem, 2.4vw, 1.65rem)', fontWeight: 400, color: '#f2f4f6', lineHeight: 1.60, fontStyle: 'italic', marginBottom: '2.5rem' }}>
          &laquo;&nbsp;Dans un monde où la valeur réside de plus en plus dans les idées et les données, la propriété intellectuelle n&apos;est plus un accessoire juridique&nbsp;— c&apos;est le cœur stratégique de l&apos;entreprise.&nbsp;&raquo;
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(74,136,168,0.30)' }} />
          <span style={{ fontSize: '0.62rem', letterSpacing: '0.16em', color: 'rgba(242,244,246,0.35)', textTransform: 'uppercase' }}>
            Maître Erwan Prély — Avocat
          </span>
          <div style={{ width: '32px', height: '1px', background: 'rgba(74,136,168,0.30)' }} />
        </div>

      </div>
    </section>
  )
}
