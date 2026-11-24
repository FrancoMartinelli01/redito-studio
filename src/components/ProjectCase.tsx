import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { proyectos, type Proyecto } from '../data/projects'
import { cerrarFicha, irAFicha, useSlugActivo } from '../lib/ruta'
import { Pantalla } from './Pantalla'

const WHATSAPP = '5491158343790'
const TITULO_BASE = 'Rédito Studio — Webs y automatizaciones para tu negocio'
const dos = (n: number) => String(n).padStart(2, '0')

/*
 * Apertura: el botón que abrió la ficha se cierra hasta quedar como una línea en su centro
 * y desde esa línea la ficha se abre a pantalla completa. Al cerrar, la ficha se levanta desde arriba.
 * (La misma idea que usamos en las historias de la carta de Fuego Nómade.)
 */
let origen: DOMRect | null = null
export function marcarOrigen(r: DOMRect) {
  origen = r
}

const EASE_APERTURA = 'cubic-bezier(.625,.05,0,1)'

function recorte(r: { top: number; left: number; width: number; height: number }) {
  const W = window.innerWidth
  const H = window.innerHeight
  const px = (n: number) => `${Math.max(0, n).toFixed(1)}px`
  return `inset(${px(r.top)} ${px(W - r.left - r.width)} ${px(H - r.top - r.height)} ${px(r.left)})`
}

export function ProjectCase() {
  const slug = useSlugActivo()
  const pedido = proyectos.find(p => p.slug === slug) ?? null
  const [p, setP] = useState<Proyecto | null>(pedido)
  const panel = useRef<HTMLDivElement>(null)
  const scroll = useRef<HTMLDivElement>(null)
  const cerrarBtn = useRef<HTMLButtonElement>(null)
  const abierto = useRef(false)
  const quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Montar / cambiar de proyecto / cerrar según la URL.
  useEffect(() => {
    if (pedido) {
      setP(pedido)
      scroll.current?.scrollTo({ top: 0 })
      return
    }
    if (!p) return
    const el = panel.current
    if (!el || quieto) {
      setP(null)
      return
    }
    const anim = el.animate(
      [{ clipPath: 'inset(0 0 0 0)' }, { clipPath: 'inset(100% 0 0 0)' }],
      { duration: 750, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'forwards' },
    )
    anim.onfinish = () => setP(null)
    return () => anim.cancel()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  // Animación de apertura la primera vez que aparece la ficha.
  useLayoutEffect(() => {
    if (!p) {
      abierto.current = false
      document.documentElement.classList.remove('ficha-abierta')
      document.title = TITULO_BASE
      return
    }
    document.title = `${p.nombre} — Rédito Studio`
    if (abierto.current) return
    abierto.current = true
    document.documentElement.classList.add('ficha-abierta')
    const el = panel.current
    const desdeClick = origen !== null
    if (el && !quieto) {
      const W = window.innerWidth
      const H = window.innerHeight
      const r = origen ?? { top: H / 2 - 1, left: 0, width: W, height: 2 }
      const linea = { top: r.top + r.height / 2 - 0.5, left: r.left, width: r.width, height: 1 }
      el.animate(
        [
          { clipPath: recorte(r), offset: 0 },
          { clipPath: recorte(linea), offset: 0.28, easing: EASE_APERTURA },
          { clipPath: 'inset(0px 0px 0px 0px)', offset: 1 },
        ],
        { duration: 1250, easing: 'cubic-bezier(.65,0,.35,1)' },
      )
    }
    origen = null
    // Si se abrió desde la página, llevamos el foco a la ficha (sirve para teclado y lectores de pantalla).
    if (desdeClick) cerrarBtn.current?.focus({ preventScroll: true })
  }, [p, quieto])

  useEffect(() => {
    if (!p) return
    const tecla = (e: KeyboardEvent) => { if (e.key === 'Escape') cerrarFicha() }
    window.addEventListener('keydown', tecla)
    return () => window.removeEventListener('keydown', tecla)
  }, [p])

  if (!p) return null

  const i = proyectos.findIndex(x => x.slug === p.slug)
  const siguiente = proyectos[(i + 1) % proyectos.length]
  const mensaje = encodeURIComponent(`Hola! Vi el caso de ${p.nombre} en tu web y quiero hacer algo parecido para mi negocio.`)

  return (
    <div
      ref={panel}
      className="caso"
      role="dialog"
      aria-modal="true"
      aria-label={`Caso: ${p.nombre}`}
      style={{ '--fondo': p.color.fondo, '--acento': p.color.acento, '--tinta': p.color.tinta } as React.CSSProperties}
    >
      <div ref={scroll} className="caso-scroll">
        <header className="caso-top">
          <button ref={cerrarBtn} type="button" className="caso-volver" onClick={cerrarFicha}>
            <span aria-hidden="true">←</span> Volver a proyectos
          </button>
          <span className="caso-cuenta">{dos(i + 1)} / {dos(proyectos.length)}</span>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="caso-sitio">
            Visitar sitio <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div key={p.slug} className="caso-cuerpo">
          <section className="caso-hero">
            <p className="caso-kicker">{dos(i + 1)} — {p.tipo}</p>
            <h2 className="caso-titulo">{p.nombre}</h2>
            <p className="caso-lead">{p.resumen}</p>
            <dl className="caso-meta">
              <div><dt>Tipo</dt><dd>{p.tipo}</dd></div>
              <div><dt>Hecho con</dt><dd>{p.stack.join(' · ')}</dd></div>
              <div><dt>Sitio</dt><dd><a href={p.url} target="_blank" rel="noopener noreferrer">{p.dominio} ↗</a></dd></div>
            </dl>
          </section>

          <div className="caso-pantalla">
            <Pantalla p={p} activa />
          </div>

          <section className="caso-grid">
            <div>
              <h3 className="caso-h3">El desafío</h3>
              <p className="caso-desafio">{p.desafio}</p>
            </div>
            <div>
              <h3 className="caso-h3">Qué hicimos</h3>
              <ol className="caso-lista">
                {p.hicimos.map((h, k) => (
                  <li key={h.titulo}>
                    <span className="caso-lista-n">{dos(k + 1)}</span>
                    <div>
                      <strong>{h.titulo}</strong>
                      <p>{h.texto}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="caso-capturas" aria-label="Capturas del sitio">
            {p.capturas.map(c => (
              <figure key={c.src}>
                <img src={c.src} alt={c.texto} loading="lazy" width={1280} height={800} />
                <figcaption>{c.texto}</figcaption>
              </figure>
            ))}
          </section>

          <section className="caso-cierre">
            <div>
              <p className="caso-cierre-t">¿Tenés un negocio que necesita algo así?</p>
              <a
                className="caso-wa"
                href={`https://wa.me/${WHATSAPP}?text=${mensaje}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablemos por WhatsApp →
              </a>
            </div>
            <a
              href={`/proyectos/${siguiente.slug}`}
              className="caso-siguiente"
              onClick={e => {
                if (e.metaKey || e.ctrlKey) return
                e.preventDefault()
                irAFicha(siguiente.slug)
              }}
            >
              <span>Siguiente proyecto</span>
              <strong>{siguiente.nombre} →</strong>
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}
