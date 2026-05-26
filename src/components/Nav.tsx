import { Logo } from './Logo'

export function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1.5rem 3rem',
      background: 'rgba(12,12,12,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <a href="#" aria-label="Rédito Studio">
        <Logo width={160} />
      </a>
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center' }}>
        {[
          { label: 'Proyectos', href: '#proyectos' },
          { label: 'Servicios', href: '#servicios' },
          { label: 'Proceso', href: '#proceso' },
        ].map(item => (
          <li key={item.href}>
            <a href={item.href} style={{
              color: 'var(--muted)', textDecoration: 'none',
              fontSize: '0.85rem', letterSpacing: '0.02em',
              transition: 'color .2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >{item.label}</a>
          </li>
        ))}
        <li>
          <a href="#contacto" style={{
            color: 'var(--accent)', textDecoration: 'none',
            fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.02em',
            borderBottom: '1px solid var(--accent)', paddingBottom: '1px',
          }}>Hablemos →</a>
        </li>
      </ul>
    </nav>
  )
}
