const services = [
  { num: '01', name: 'E-commerce', desc: 'Tiendas online con carrito, pagos reales, gestión de stock y notificaciones automáticas.' },
  { num: '02', name: 'Landing pages', desc: 'Páginas de presentación optimizadas para conversión y posicionamiento en Google.' },
  { num: '03', name: 'SEO técnico', desc: 'Google Search Console, sitemap, metadatos y optimización de performance.' },
  { num: '04', name: 'Mantenimiento', desc: 'Actualizaciones, métricas y soporte continuo post-lanzamiento.' },
]

export function Services() {
  return (
    <section id="servicios" style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
      <div className="fade-up" style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        marginBottom: '4rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)',
      }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, letterSpacing: '-0.025em' }}>
          Servicios
        </h2>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--muted)', fontFamily: 'var(--serif)' }}>— 02</span>
      </div>

      <div className="fade-up" style={{
        display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
        border: '1px solid var(--border)',
      }}>
        {services.map((s, i) => (
          <div key={s.num}
            style={{
              padding: '2rem 1.75rem',
              borderRight: i < services.length - 1 ? '1px solid var(--border)' : undefined,
              transition: 'background .2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '1.5rem', fontFamily: 'var(--serif)' }}>
              {s.num}
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
              {s.name}
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
