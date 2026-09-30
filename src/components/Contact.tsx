const contacts = [
  {
    label: 'WhatsApp',
    val: '+54 9 11 5834-3790',
    href: 'https://wa.me/5491158343790?text=Hola!%20Vi%20tu%20portfolio%20y%20me%20interesa%20hablar%20de%20un%20proyecto',
  },
  {
    label: 'Email',
    val: 'reditostudio@gmail.com',
    href: 'mailto:reditostudio@gmail.com',
  },
]

export function Contact() {
  return (
    <section id="contacto" className="sec contact-grid" style={{
      padding: '6rem 3rem',
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center',
    }}>
      <div className="fade-up">
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: '1rem' }}>
          ¿Tenés un proyecto en mente?
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.7, maxWidth: 380 }}>
          Contame de qué se trata y te respondo en menos de 24 horas. Sin formularios, sin vueltas.
        </p>
      </div>

      <div className="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {contacts.map(c => (
          <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1.25rem 1.5rem', border: '1px solid var(--border)',
              textDecoration: 'none', color: 'var(--text)', transition: 'border-color .2s, background .2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.background = 'var(--bg2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            <div>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.2rem' }}>
                {c.label}
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', fontWeight: 700 }}>{c.val}</div>
            </div>
            <span style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
