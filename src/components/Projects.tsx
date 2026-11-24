import { useEffect, useMemo, useRef, useState } from 'react'
import { categorias, proyectos, type Categoria } from '../data/projects'
import { abrirFicha, useSlugActivo } from '../lib/ruta'
import { marcarOrigen } from './ProjectCase'
import { Pantalla } from './Pantalla'

const dos = (n: number) => String(n).padStart(2, '0')

export function Projects() {
  const [filtro, setFiltro] = useState<Categoria | 'todos'>('todos')
  const lista = useMemo(
    () => (filtro === 'todos' ? proyectos : proyectos.filter(p => p.categoria === filtro)),
    [filtro],
  )
  const [activo, setActivo] = useState(0)
  const fichaAbierta = useSlugActivo() !== null
  const [enVista, setEnVista] = useState(false)
  const escenario = useRef<HTMLDivElement>(null)
  const escenas = useRef<(HTMLElement | null)[]>([])

  // Qué proyecto está en el centro de la pantalla.
  useEffect(() => {
    setActivo(0)
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) setActivo(Number((e.target as HTMLElement).dataset.i))
      }),
      { rootMargin: '-50% 0px -50% 0px' },
    )
    escenas.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [lista])

  // El color de marca sólo se aplica mientras el escenario ocupa la pantalla.
  useEffect(() => {
    const el = escenario.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => setEnVista(e.isIntersecting), { rootMargin: '-35% 0px -35% 0px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const actual = lista[Math.min(activo, lista.length - 1)]

  const abrir = (e: React.MouseEvent<HTMLElement>, slug: string) => {
    // Cmd/Ctrl + click abre la ficha en otra pestaña, como cualquier link.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    e.preventDefault()
    marcarOrigen(e.currentTarget.getBoundingClientRect())
    abrirFicha(slug)
  }

  const irA = (i: number) => escenas.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })

  const elegirFiltro = (id: Categoria | 'todos') => {
    setFiltro(id)
    requestAnimationFrame(() => escenario.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }

  return (
    <section id="proyectos" className="pf">
      <div className="pf-head sec">
        <div className="fade-up pf-titulo">
          <h2>Proyectos</h2>
          <span className="sec-index">— 01</span>
        </div>
        <div className="fade-up pf-intro">
          <p>
            Sitios reales, en vivo y vendiendo. Scrolleá para recorrerlos o abrí cada caso para ver qué
            necesitaba el cliente y cómo lo resolvimos.
          </p>
          <div className="pf-filtros" role="group" aria-label="Filtrar proyectos">
            {categorias.map(c => {
              const n = c.id === 'todos' ? proyectos.length : proyectos.filter(p => p.categoria === c.id).length
              if (!n) return null
              return (
                <button key={c.id} type="button" aria-pressed={filtro === c.id} onClick={() => elegirFiltro(c.id)}>
                  {c.label}<sup>{n}</sup>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div
        ref={escenario}
        className={`pf-escenario${enVista ? ' tenido' : ''}`}
        style={{
          '--fondo': actual.color.fondo,
          '--acento': actual.color.acento,
        } as React.CSSProperties}
      >
        <nav className="pf-riel" aria-label="Proyectos">
          <ol>
            {lista.map((p, i) => (
              <li key={p.slug}>
                <button type="button" aria-current={i === activo} onClick={() => irA(i)}>
                  <span>{dos(i + 1)}</span>{p.nombre}
                </button>
              </li>
            ))}
          </ol>
          <div className="pf-progreso" aria-hidden="true">
            <span style={{ transform: `scaleY(${(activo + 1) / lista.length})` }} />
          </div>
        </nav>

        <div className="pf-escenas">
          {lista.map((p, i) => (
            <article
              key={p.slug}
              ref={el => { escenas.current[i] = el }}
              data-i={i}
              className={`pf-escena${i === activo ? ' on' : ''}`}
              style={{ '--acento-p': p.color.acento } as React.CSSProperties}
            >
              <div className="pf-info">
                <div className="pf-num">{dos(i + 1)}<span>/{dos(lista.length)}</span></div>
                <h3 className="pf-nombre">{p.nombre}</h3>
                <div className="pf-tipo">{p.tipo}</div>
                <p className="pf-resumen">{p.resumen}</p>
                <ul className="pf-chips">
                  {p.chips.map(c => <li key={c}>{c}</li>)}
                </ul>
                <div className="pf-acciones">
                  <a href={`/proyectos/${p.slug}`} className="pf-caso" onClick={e => abrir(e, p.slug)}>
                    Ver el caso
                  </a>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="pf-link">
                    Visitar sitio <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <a
                href={`/proyectos/${p.slug}`}
                className="pf-device"
                aria-label={`Abrir el caso de ${p.nombre}`}
                onClick={e => abrir(e, p.slug)}
              >
                <Pantalla p={p} activa={i === activo && enVista && !fichaAbierta} inclinable />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
