export function Hero() {
  return (
    <section className="hero" style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      padding: '0 3rem',
      paddingTop: '5rem',
      borderBottom: '1px solid var(--border)',
      gap: '4rem',
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
          <span style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            Disponible para nuevos proyectos
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--serif)', fontSize: 'clamp(3rem, 5.5vw, 5rem)',
          fontWeight: 800, lineHeight: 1.02, letterSpacing: '-0.03em', marginBottom: '2rem',
        }}>
          Tu sitio web<br />es{' '}
          <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--muted)' }}>
            una<br />inversión
          </em>
        </h1>

        <p style={{
          fontSize: '1rem', color: 'var(--muted)', maxWidth: 380,
          lineHeight: 1.7, fontWeight: 300, marginBottom: '3rem',
          borderLeft: '2px solid var(--border)', paddingLeft: '1.25rem',
        }}>
          Diseño webs y automatizaciones que generan resultados reales para tu negocio: más consultas, más ventas y menos tareas repetitivas.
        </p>

        <div className="hero-ctas" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <a href="#proyectos" style={{
            background: 'var(--accent)', color: '#fff',
            padding: '0.8rem 1.75rem', fontSize: '0.875rem', fontWeight: 500,
            textDecoration: 'none', letterSpacing: '0.02em',
          }}>Ver proyectos</a>
          <a href="https://wa.me/5491158343790?text=Hola!%20Vi%20tu%20web%20y%20me%20interesa%20hablar%20de%20un%20proyecto" target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--muted)', fontSize: '0.875rem', textDecoration: 'none',
            letterSpacing: '0.02em', display: 'flex', alignItems: 'center', gap: '0.4rem',
          }}>Hablar por WhatsApp →</a>
        </div>
      </div>

      <div className="hero-stats" style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        alignSelf: 'stretch', padding: '5rem 0 3rem',
        borderLeft: '1px solid var(--border)', paddingLeft: '4rem',
      }}>
        {[
          { label: 'Qué hago', val: 'Webs y automatizaciones' },
          { label: 'Pagos online', val: 'Mercado Pago' },
          { label: 'Respuesta', val: 'En menos de 24 h' },
          { label: 'Ubicación', val: 'Buenos Aires' },
        ].map((s, i) => (
          <div key={i} className="hero-stat" style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1.5rem',
            padding: '1.25rem 0',
            borderBottom: '1px solid var(--border)',
            borderTop: i === 0 ? '1px solid var(--border)' : undefined,
          }}>
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              {s.label}
            </span>
            <span style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 700, textAlign: 'right' }}>
              {s.val}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
