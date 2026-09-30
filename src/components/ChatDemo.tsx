import { useEffect, useState } from 'react'

type Msg = { from: 'client' | 'bot' | 'system'; text: string; time?: string }

const script: Msg[] = [
  { from: 'client', text: 'Hola! ¿Tienen cancha mañana a las 20?', time: '22:47' },
  { from: 'bot', text: 'Hola Martín! Mañana a las 20 están libres la cancha 2 y la 4. ¿Cuál te reservo?', time: '22:47' },
  { from: 'client', text: 'La 2, porfa', time: '22:48' },
  { from: 'bot', text: 'Listo, cancha 2 mañana a las 20:00. Te mando un recordatorio dos horas antes.', time: '22:48' },
  { from: 'system', text: 'Reserva cargada en la agenda' },
]

// Tiempo antes de mostrar cada mensaje (ms). El bot "escribe" antes de responder.
const delays = [700, 1500, 1400, 1600, 900]
const RESTART_AFTER = 4500

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

export function ChatDemo() {
  const reduced = prefersReducedMotion()
  const [shown, setShown] = useState(reduced ? script.length : 0)

  useEffect(() => {
    if (reduced) return
    const done = shown >= script.length
    const t = setTimeout(
      () => setShown(done ? 0 : shown + 1),
      done ? RESTART_AFTER : delays[shown],
    )
    return () => clearTimeout(t)
  }, [shown, reduced])

  const next = script[shown]
  const botTyping = !reduced && next?.from === 'bot'

  return (
    <figure className="chat-demo" aria-label="Ejemplo de un bot de reservas respondiendo por WhatsApp">
      <div className="chat-head">
        <span className="chat-avatar" aria-hidden="true">CN</span>
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
          <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>Club Norte</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Responde automáticamente</span>
        </span>
      </div>

      <div className="chat-body" aria-live="polite">
        {script.slice(0, shown).map((m, i) =>
          m.from === 'system' ? (
            <div key={i} className="chat-system">
              <span aria-hidden="true" className="chat-check" />
              {m.text}
            </div>
          ) : (
            <div key={i} className={`chat-msg chat-${m.from}`}>
              <span>{m.text}</span>
              <span className="chat-time">{m.time}</span>
            </div>
          ),
        )}
        {botTyping && (
          <div className="chat-msg chat-bot chat-typing" aria-label="Escribiendo">
            <span /><span /><span />
          </div>
        )}
      </div>

      <figcaption className="chat-caption">
        Un cliente escribe a la noche, el bot responde y reserva solo.
      </figcaption>
    </figure>
  )
}
