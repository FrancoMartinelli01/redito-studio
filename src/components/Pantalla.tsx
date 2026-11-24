import { useEffect, useRef } from 'react'
import type { Proyecto } from '../data/projects'

/**
 * Ventana de navegador con el video del sitio real scrolleándose.
 * El video sólo se reproduce cuando `activa` es true, para no tener cuatro videos corriendo a la vez.
 */
export function Pantalla({ p, activa, inclinable = false }: { p: Proyecto; activa: boolean; inclinable?: boolean }) {
  const video = useRef<HTMLVideoElement>(null)
  const marco = useRef<HTMLDivElement>(null)
  const quieto = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const v = video.current
    if (!v || quieto) return
    if (activa) {
      v.preload = 'auto'
      v.play().catch(() => {})
    } else v.pause()
  }, [activa, quieto])

  const mover = (e: React.PointerEvent) => {
    if (!inclinable || quieto || e.pointerType !== 'mouse' || !marco.current) return
    const r = marco.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    marco.current.style.setProperty('--ry', `${(x * 7).toFixed(2)}deg`)
    marco.current.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`)
  }
  const soltar = () => {
    marco.current?.style.setProperty('--ry', '0deg')
    marco.current?.style.setProperty('--rx', '0deg')
  }

  return (
    <div ref={marco} className="pantalla" onPointerMove={mover} onPointerLeave={soltar}>
      <div className="pantalla-barra" aria-hidden="true">
        <span /><span /><span />
        <div className="pantalla-url">{p.dominio}</div>
      </div>
      <div className="pantalla-video">
        <video
          ref={video}
          src={`/projects/${p.slug}/scroll.mp4`}
          poster={`/projects/${p.slug}/poster.webp`}
          muted
          loop
          playsInline
          preload="none"
          aria-label={`Recorrido en video del sitio de ${p.nombre}`}
        />
      </div>
    </div>
  )
}
