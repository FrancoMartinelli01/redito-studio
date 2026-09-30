import { ChatDemo } from './ChatDemo'

const stats = [
  { label: 'Qué hago', val: 'Webs y automatizaciones' },
  { label: 'Pagos online', val: 'Mercado Pago' },
  { label: 'Respuesta', val: 'En menos de 24 h' },
  { label: 'Ubicación', val: 'Buenos Aires' },
]

export function Hero() {
  return (
    <section className="hero-wrap" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="hero">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              Disponible para nuevos proyectos
            </span>
          </div>

          <h1 className="hero-title">
            Tu sitio web es{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--muted)' }}>una inversión</em>
          </h1>

          <p style={{
            fontSize: '1.05rem', color: 'var(--text-soft)', maxWidth: 440,
            lineHeight: 1.7, fontWeight: 300, marginBottom: '2.5rem',
          }}>
            Diseño webs y automatizaciones que generan resultados reales para tu negocio:
            más consultas, más ventas y menos tareas repetitivas.
          </p>

          <div className="hero-ctas" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <a href="#proyectos" style={{
              background: 'var(--accent)', color: '#fff',
              padding: '0.9rem 1.9rem', fontSize: '0.9rem', fontWeight: 500,
              textDecoration: 'none', letterSpacing: '0.02em',
            }}>Ver proyectos</a>
            <a href="https://wa.me/5491158343790?text=Hola!%20Vi%20tu%20web%20y%20me%20interesa%20hablar%20de%20un%20proyecto"
              target="_blank" rel="noopener noreferrer" className="hero-link">
              Hablar por WhatsApp →
            </a>
          </div>
        </div>

        <ChatDemo />
      </div>

      <dl className="hero-stats">
        {stats.map(s => (
          <div key={s.label} className="hero-stat">
            <dt>{s.label}</dt>
            <dd>{s.val}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
