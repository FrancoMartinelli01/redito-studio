import { useMemo, useState } from 'react'

const WHATSAPP = '5491158343790'

const problems = [
  'Consultas que llegan a la noche y nadie responde.',
  'Turnos que se cancelan y quedan vacíos.',
  'Clientes que preguntan, no compran y no vuelven.',
  'Horas por semana pasando datos a mano.',
]

const verticals = [
  {
    name: 'Inmobiliarias',
    desc: 'Para que ninguna consulta por una propiedad quede sin respuesta.',
    items: [
      { name: 'Asistente de consultas', desc: 'Responde por WhatsApp con las propiedades que coinciden con lo que busca cada interesado.' },
      { name: 'Agenda de visitas', desc: 'Coordina día y horario con el interesado y lo carga en tu calendario.' },
      { name: 'Seguimiento de interesados', desc: 'Le vuelve a escribir a quien consultó y no avanzó.' },
    ],
  },
  {
    name: 'Turnos y reservas',
    desc: 'Canchas, clubes, gimnasios y centros de estética con la agenda siempre llena.',
    items: [
      { name: 'Confirmación y recordatorio', desc: 'Confirma cada reserva y le recuerda el turno al cliente el día anterior.' },
      { name: 'Lista de espera automática', desc: 'Si alguien cancela, le ofrece el lugar al siguiente de la lista.' },
      { name: 'Reservas por WhatsApp', desc: 'El cliente consulta disponibilidad y reserva sin tener que llamar.' },
    ],
  },
  {
    name: 'E-commerce',
    desc: 'Tiendas online que venden más sin sumar horas de atención.',
    items: [
      { name: 'Recupero de carritos', desc: 'Le escribe a quien dejó la compra a mitad de camino.' },
      { name: 'Avisos de pedido', desc: 'Confirmación de pago, despacho y entrega, sin avisar a mano.' },
      { name: 'Reels del catálogo', desc: 'Videos verticales generados desde tus productos, listos para publicar.' },
    ],
  },
]

const rubros = ['Inmobiliaria', 'Turnos y reservas', 'E-commerce', 'Otro rubro']

const pains = [
  { id: 'consultas', title: 'Tardamos en responder consultas', desc: 'Mensajes fuera de horario o que se pierden en el chat.', auto: 'Asistente de WhatsApp' },
  { id: 'turnos', title: 'Se cancelan turnos o hay ausentes', desc: 'Huecos en la agenda que nadie vuelve a llenar.', auto: 'Turnos y recordatorios' },
  { id: 'ventas', title: 'Preguntan y no terminan comprando', desc: 'Interesados a los que nunca se les hizo seguimiento.', auto: 'Seguimiento de ventas' },
  { id: 'contenido', title: 'No llegamos a publicar contenido', desc: 'Redes quietas porque no hay tiempo.', auto: 'Contenido automático' },
  { id: 'reportes', title: 'No sabemos bien cómo viene el mes', desc: 'Números repartidos en planillas, chats y el banco.', auto: 'Reporte semanal' },
  { id: 'datos', title: 'Pasamos datos a mano', desc: 'Copiar y pegar entre planillas, mails y sistemas.', auto: 'Integración de datos' },
]

const channels = ['WhatsApp', 'Instagram', 'Sitio web', 'Email']
const volumes = ['Menos de 100', '100 a 500', 'Más de 500']

const label: React.CSSProperties = {
  fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--muted)', fontFamily: 'var(--serif)',
}

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" aria-pressed={active} onClick={onClick} className="auto-toggle"
      style={{
        minHeight: 44, padding: '0.6rem 1.1rem', fontSize: '0.85rem',
        border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
        background: active ? 'rgba(255,77,0,0.12)' : 'transparent',
        color: active ? 'var(--text)' : 'var(--muted)',
      }}>
      {children}
    </button>
  )
}

function Configurator() {
  const [rubro, setRubro] = useState('Turnos y reservas')
  const [selected, setSelected] = useState<string[]>(['consultas', 'turnos'])
  const [chan, setChan] = useState<string[]>(['WhatsApp'])
  const [vol, setVol] = useState('100 a 500')

  const toggle = (list: string[], set: (v: string[]) => void, id: string) =>
    set(list.includes(id) ? list.filter(x => x !== id) : [...list, id])

  const chosen = pains.filter(p => selected.includes(p.id))

  const complexity = useMemo(() => {
    if (!chosen.length) return '—'
    const score = chosen.length + (vol === 'Más de 500' ? 2 : vol === '100 a 500' ? 1 : 0) + (chan.length > 2 ? 1 : 0)
    return score <= 2 ? 'Baja' : score <= 4 ? 'Media' : 'Alta'
  }, [chosen.length, vol, chan.length])

  const message = [
    'Hola Rédito! Quiero armar una automatización.',
    `Rubro: ${rubro}`,
    `Me interesa: ${chosen.map(c => c.auto).join(', ') || 'a definir'}`,
    `Canales: ${chan.join(', ') || 'a definir'}`,
    `Consultas por mes: ${vol}`,
  ].join('\n')

  const steps = [
    {
      title: '¿A qué se dedica tu negocio?',
      body: (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {rubros.map(r => <Pill key={r} active={rubro === r} onClick={() => setRubro(r)}>{r}</Pill>)}
        </div>
      ),
    },
    {
      title: '¿Qué te quita más tiempo?',
      hint: 'Podés elegir varias.',
      body: (
        <div className="auto-grid-2" style={{ gap: '0.5rem' }}>
          {pains.map(p => {
            const on = selected.includes(p.id)
            return (
              <button key={p.id} type="button" aria-pressed={on} onClick={() => toggle(selected, setSelected, p.id)}
                className="auto-toggle"
                style={{
                  textAlign: 'left', padding: '1.1rem 1.25rem', display: 'flex', gap: '0.9rem', alignItems: 'flex-start',
                  border: `1px solid ${on ? 'var(--accent)' : 'var(--border)'}`,
                  background: on ? 'rgba(255,77,0,0.08)' : 'transparent', color: 'var(--text)',
                }}>
                <span aria-hidden="true" style={{
                  flexShrink: 0, width: 16, height: 16, marginTop: 3,
                  border: `1px solid ${on ? 'var(--accent)' : 'var(--muted)'}`,
                  background: on ? 'var(--accent)' : 'transparent',
                }} />
                <span>
                  <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.25rem' }}>{p.title}</span>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.5 }}>{p.desc}</span>
                </span>
              </button>
            )
          })}
        </div>
      ),
    },
    {
      title: '¿Por dónde te escriben tus clientes?',
      body: (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {channels.map(c => <Pill key={c} active={chan.includes(c)} onClick={() => toggle(chan, setChan, c)}>{c}</Pill>)}
        </div>
      ),
    },
    {
      title: '¿Cuántas consultas recibís por mes?',
      body: (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {volumes.map(v => <Pill key={v} active={vol === v} onClick={() => setVol(v)}>{v}</Pill>)}
        </div>
      ),
    },
  ]

  return (
    <div id="configurador" className="auto-config">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
          Armá tu automatización
        </h3>
        <p style={{ color: 'var(--muted)', fontWeight: 300, maxWidth: 440, marginBottom: '2.5rem' }}>
          Cuatro preguntas y te armo una propuesta a medida. Te lleva un minuto.
        </p>
        {steps.map((s, i) => (
          <div key={s.title} role="group" aria-labelledby={`paso-${i}`}
            style={{ borderTop: '1px solid var(--border)', padding: '1.75rem 0' }}>
            <span style={{ ...label, display: 'block', marginBottom: '0.6rem' }}>Paso {i + 1} de {steps.length}</span>
            <h4 id={`paso-${i}`} style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 700, marginBottom: s.hint ? '0.25rem' : '1rem' }}>{s.title}</h4>
            {s.hint && <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1rem' }}>{s.hint}</p>}
            {s.body}
          </div>
        ))}
      </div>

      <aside className="auto-summary" aria-live="polite" style={{
        border: '1px solid var(--border)', background: 'var(--bg2)', padding: '2rem',
        display: 'flex', flexDirection: 'column', gap: '1.5rem',
      }}>
        <span style={label}>Tu propuesta</span>
        <div>
          <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.3rem' }}>Rubro</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>{rubro}</div>
        </div>
        <div>
          <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.6rem' }}>Automatizaciones sugeridas</div>
          {chosen.length ? (
            <ul style={{ listStyle: 'none' }}>
              {chosen.map(c => (
                <li key={c.id} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0.7rem 0', borderTop: '1px solid var(--border)', fontSize: '0.92rem' }}>
                  <span aria-hidden="true" style={{ width: 6, height: 6, background: 'var(--accent)', flexShrink: 0 }} />
                  {c.auto}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Elegí al menos una opción en el paso 2 para ver qué te conviene.</p>
          )}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.2rem' }}>Complejidad</div>
            <div style={{ fontFamily: 'var(--serif)', fontWeight: 700 }}>{complexity}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.2rem' }}>Canales</div>
            <div style={{ fontFamily: 'var(--serif)', fontWeight: 700 }}>{chan.length}</div>
          </div>
        </div>
        <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer"
          className="auto-cta"
          style={{
            background: 'var(--accent)', color: '#fff', textAlign: 'center', textDecoration: 'none',
            padding: '0.95rem 1.5rem', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.02em',
          }}>
          Enviar por WhatsApp
        </a>
        <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.6 }}>
          Sin compromiso. Te respondo en menos de 24 horas con alcance y precio cerrado.
        </p>
      </aside>
    </div>
  )
}

export function Automations() {
  return (
    <section id="automatizaciones" style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }} className="auto-section">
      <div className="fade-up" style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        marginBottom: '4rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)',
      }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, letterSpacing: '-0.025em' }}>
          Automatizaciones
        </h2>
        <span className="sec-index">— 03</span>
      </div>

      <div className="fade-up auto-intro">
        <h3 style={{
          fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem,5vw,4.2rem)', fontWeight: 800,
          lineHeight: 1.02, letterSpacing: '-0.03em',
        }}>
          Que tu negocio rinda aunque no estés mirando.
        </h3>
        <div>
          <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, marginBottom: '2rem', maxWidth: 440 }}>
            Armo automatizaciones que responden consultas, confirman turnos y recuperan ventas por WhatsApp.
            Vos seguís con tu negocio; lo repetitivo lo hace el sistema.
          </p>
          <ul style={{ listStyle: 'none' }}>
            {problems.map((p, i) => (
              <li key={p} style={{
                padding: '0.9rem 0', fontSize: '0.92rem',
                borderTop: '1px solid var(--border)',
                borderBottom: i === problems.length - 1 ? '1px solid var(--border)' : undefined,
              }}>{p}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="fade-up auto-grid-3" style={{ border: '1px solid var(--border)', marginBottom: '5rem' }}>
        {verticals.map(v => (
          <article key={v.name} className="auto-card" style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>{v.name}</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{v.desc}</p>
            <ul style={{ listStyle: 'none', marginBottom: '1.75rem' }}>
              {v.items.map(it => (
                <li key={it.name} style={{ padding: '1rem 0', borderTop: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.92rem', fontWeight: 500, marginBottom: '0.25rem' }}>{it.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.55 }}>{it.desc}</div>
                </li>
              ))}
            </ul>
            <a href="#configurador" style={{
              marginTop: 'auto', alignSelf: 'flex-start', color: 'var(--accent)', textDecoration: 'none',
              fontSize: '0.85rem', fontWeight: 500, borderBottom: '1px solid var(--accent)', paddingBottom: '1px',
            }}>Cotizar para mi negocio</a>
          </article>
        ))}
      </div>

      <div className="fade-up">
        <Configurator />
      </div>
    </section>
  )
}
