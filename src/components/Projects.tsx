const projects = [
  {
    name: 'Importados MC',
    type: 'E-commerce',
    desc: 'Tienda online con pagos reales via Mercado Pago, carrito, búsqueda predictiva y notificaciones por WhatsApp.',
    url: 'https://importadosmc.com.ar',
    live: true,
  },
  {
    name: 'DigiWines',
    type: 'E-commerce',
    desc: 'Tienda online de vinos con catálogo premium y sistema de pedidos pensado para el canal digital.',
    url: 'https://digiwines-premium.franmrt01.workers.dev/',
    live: true,
  },
  {
    name: 'Spirits & Co',
    type: 'Catálogo',
    desc: 'Catálogo de bebidas alcohólicas con diseño premium y experiencia de navegación fluida.',
    url: 'https://spirits-co-collection.vercel.app/',
    live: true,
  },
  {
    name: 'Fuego Nómade',
    type: 'Landing page',
    desc: 'Página de presentación para un servicio de asador a domicilio con experiencia gastronómica premium.',
    url: 'https://ember-landing-seven.vercel.app/',
    live: true,
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="sec" style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
      <div className="fade-up" style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        marginBottom: '4rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)',
      }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, letterSpacing: '-0.025em' }}>
          Proyectos
        </h2>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--muted)', fontFamily: 'var(--serif)' }}>— 01</span>
      </div>

      <div>
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="fade-up proj-row"
            style={{
              display: 'grid', gridTemplateColumns: '2fr 3fr 1fr',
              alignItems: 'center', gap: '2rem',
              padding: '2rem 0', borderBottom: '1px solid var(--border)',
              textDecoration: 'none', color: 'inherit', cursor: 'pointer',
            }}
            onMouseEnter={e => {
              const name = e.currentTarget.querySelector<HTMLElement>('.proj-name')
              const arrow = e.currentTarget.querySelector<HTMLElement>('.proj-arrow')
              if (name) name.style.color = 'var(--accent)'
              if (arrow) arrow.style.transform = 'translateX(4px) translateY(-4px)'
            }}
            onMouseLeave={e => {
              const name = e.currentTarget.querySelector<HTMLElement>('.proj-name')
              const arrow = e.currentTarget.querySelector<HTMLElement>('.proj-arrow')
              if (name) name.style.color = 'var(--text)'
              if (arrow) arrow.style.transform = 'none'
            }}
          >
            <div>
              <div className="proj-name" style={{
                fontFamily: 'var(--serif)', fontSize: '1.3rem', fontWeight: 700,
                letterSpacing: '-0.02em', transition: 'color .2s', color: 'var(--text)',
              }}>{p.name}</div>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.25rem' }}>
                {p.type}
              </div>
            </div>
            <div className="proj-desc" style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6, fontWeight: 300 }}>
              {p.desc}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
              <span style={{
                fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '0.25rem 0.65rem',
                border: p.live ? '1px solid rgba(29,158,117,0.4)' : '1px solid var(--border)',
                color: p.live ? '#1D9E75' : 'var(--muted)',
              }}>
                {p.live ? 'Live' : 'En desarrollo'}
              </span>
              <span className="proj-arrow" style={{ fontSize: '1rem', color: 'var(--muted)', transition: 'transform .25s', marginTop: '0.5rem' }}>↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
