import { useState } from 'react'

const projects = [
  {
    name: 'Importados MC',
    type: 'E-commerce',
    desc: 'Tienda online con pagos reales via Mercado Pago, carrito, búsqueda predictiva y notificaciones por WhatsApp.',
    url: 'https://importadosmc.com.ar',
    image: '/projects/importados-mc.jpg',
    live: true,
  },
  {
    name: 'DigiWines',
    type: 'E-commerce',
    desc: 'Tienda online de vinos con catálogo premium y sistema de pedidos pensado para el canal digital.',
    url: 'https://digiwines-premium.franmrt01.workers.dev/',
    image: '/projects/digiwines.jpg',
    live: true,
  },
  {
    name: 'Spirits & Co',
    type: 'Catálogo',
    desc: 'Catálogo de bebidas alcohólicas con diseño premium y experiencia de navegación fluida.',
    url: 'https://spirits-co-collection.vercel.app/',
    image: '/projects/spirits-co.jpg',
    live: true,
  },
  {
    name: 'Fuego Nómade',
    type: 'Landing page',
    desc: 'Página de presentación para un servicio de asador a domicilio con experiencia gastronómica premium.',
    url: 'https://ember-landing-seven.vercel.app/',
    image: '/projects/fuego-nomade.jpg',
    live: true,
  },
]

function Thumb({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="proj-thumb">
      {failed ? (
        <span className="proj-thumb-empty">{name}</span>
      ) : (
        <img src={src} alt={`Captura del sitio de ${name}`} loading="lazy" onError={() => setFailed(true)} />
      )}
    </div>
  )
}

export function Projects() {
  return (
    <section id="proyectos" className="sec" style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
      <div className="fade-up" style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)',
      }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, letterSpacing: '-0.025em' }}>
          Proyectos
        </h2>
        <span className="sec-index">— 01</span>
      </div>

      <div>
        {projects.map((p) => (
          <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="fade-up proj-row">
            <Thumb src={p.image} name={p.name} />
            <div>
              <div className="proj-name">{p.name}</div>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.25rem' }}>
                {p.type}
              </div>
            </div>
            <div className="proj-desc">{p.desc}</div>
            <div className="proj-meta">
              <span className="proj-badge">{p.live ? 'Online' : 'En desarrollo'}</span>
              <span className="proj-arrow" aria-hidden="true">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
