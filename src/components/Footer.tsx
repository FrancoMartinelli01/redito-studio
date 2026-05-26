import { Logo } from './Logo'

export function Footer() {
  return (
    <footer style={{
      padding: '2rem 3rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      borderTop: '1px solid var(--border)',
    }}>
      <Logo width={120} />
      <p style={{ fontSize: '0.8rem', color: 'var(--muted)', letterSpacing: '0.02em' }}>
        © 2025 · Buenos Aires, Argentina
      </p>
    </footer>
  )
}
