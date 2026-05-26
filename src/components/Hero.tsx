export function Hero() {
  return (
    <section style={{
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
          Diseño y desarrollo experiencias digitales que generan resultados reales para tu negocio.
        </p>

        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <a href="#proyectos" style={{
            background: 'var(--accent)', color: '#fff',
            padding: '0.8rem 1.75rem', fontSize: '0.875rem', fontWeight: 500,
            textDecoration: 'none', letterSpacing: '0.02em',
          }}>Ver proyectos</a>
          <a href="#contacto" style={{
            color: 'var(--muted)', fontSize: '0.875rem', textDecoration: 'none',
            letterSpacing: '0.02em', display: 'flex', alignItems: 'center', gap: '0.4rem',
          }}>Hablar por WhatsApp →</a>
        </div>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        alignSelf: 'stretch', padding: '5rem 0 3rem',
        borderLeft: '1px solid var(--border)', paddingLeft: '4rem',
      }}>
        {[
          { label: 'Proyectos entregados', val: '4' },
          { label: 'Tecnología', val: 'React' },
          { label: 'Deploy', val: 'Vercel' },
          { label: 'Ubicación', val: 'Buenos Aires' },
        ].map((s, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            padding: '1.25rem 0',
            borderBottom: '1px solid var(--border)',
            borderTop: i === 0 ? '1px solid var(--border)' : undefined,
          }}>
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              {s.label}
            </span>
            <span style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 700 }}>
              {s.val}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
