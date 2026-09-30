import { useState } from 'react'
import { Logo } from './Logo'

const links = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Automatizaciones', href: '#automatizaciones' },
  { label: 'Proceso', href: '#proceso' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="site-nav" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1.5rem 3rem',
      background: 'rgba(12,12,12,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <a href="#" aria-label="Rédito Studio" onClick={close}>
        <Logo width={160} />
      </a>

      <button type="button" className="nav-toggle" aria-expanded={open} aria-controls="nav-links"
        onClick={() => setOpen(o => !o)}>
        {open ? 'Cerrar' : 'Menú'}
      </button>

      <ul id="nav-links" className={`nav-links${open ? ' is-open' : ''}`}
        style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center' }}>
        {links.map(item => (
          <li key={item.href}>
            <a href={item.href} onClick={close} className="nav-link" style={{
              color: 'var(--muted)', textDecoration: 'none',
              fontSize: '0.85rem', letterSpacing: '0.02em',
              transition: 'color .2s',
            }}>{item.label}</a>
          </li>
        ))}
        <li>
          <a href="#contacto" onClick={close} style={{
            color: 'var(--accent)', textDecoration: 'none',
            fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.02em',
            borderBottom: '1px solid var(--accent)', paddingBottom: '1px',
          }}>Hablemos →</a>
        </li>
      </ul>
    </nav>
  )
}
