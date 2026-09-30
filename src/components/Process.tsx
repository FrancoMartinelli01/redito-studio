const steps = [
  { num: '01', name: 'Consulta inicial', desc: 'Entiendo tu negocio, objetivos y lo que necesitás del sitio.' },
  { num: '02', name: 'Propuesta', desc: 'Alcance y precio claros. Sin letra chica ni costos ocultos.' },
  { num: '03', name: 'Desarrollo', desc: 'Construcción con actualizaciones periódicas para que veas el avance.' },
  { num: '04', name: 'Lanzamiento', desc: 'Revisamos juntos, ajustamos y hacemos el deploy.' },
  { num: '05', name: 'Soporte', desc: 'Métricas, ajustes y actualizaciones cuando las necesitás.' },
]

export function Process() {
  return (
    <section id="proceso" style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
      <div className="fade-up" style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        marginBottom: '4rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)',
      }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, letterSpacing: '-0.025em' }}>
          Proceso
        </h2>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--muted)', fontFamily: 'var(--serif)' }}>— 04</span>
      </div>

      <div className="fade-up" style={{
        display: 'grid', gridTemplateColumns: 'repeat(5,1fr)',
        border: '1px solid var(--border)',
      }}>
        {steps.map((s, i) => (
          <div key={s.num} style={{
            padding: '2rem 1.5rem',
            borderRight: i < steps.length - 1 ? '1px solid var(--border)' : undefined,
            position: 'relative',
          }}>
            {i < steps.length - 1 && (
              <div style={{
                position: 'absolute', top: '2.5rem', right: -1,
                width: 1, height: 24, background: 'var(--accent)', opacity: 0.4,
              }} />
            )}
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: '1.25rem', fontFamily: 'var(--serif)' }}>
              {s.num}
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
              {s.name}
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.55 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
