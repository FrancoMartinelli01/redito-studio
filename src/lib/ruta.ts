import { useEffect, useState } from 'react'

/** Ruta mínima para las fichas: /proyectos/:slug abre la ficha encima de la home. */
const PREFIJO = '/proyectos/'

export function slugDeRuta(path = window.location.pathname): string | null {
  if (!path.startsWith(PREFIJO)) return null
  const slug = path.slice(PREFIJO.length).replace(/\/$/, '')
  return slug || null
}

export function useSlugActivo() {
  const [slug, setSlug] = useState(() => slugDeRuta())
  useEffect(() => {
    const alCambiar = () => setSlug(slugDeRuta())
    window.addEventListener('popstate', alCambiar)
    window.addEventListener('ruta', alCambiar)
    return () => {
      window.removeEventListener('popstate', alCambiar)
      window.removeEventListener('ruta', alCambiar)
    }
  }, [])
  return slug
}

export function abrirFicha(slug: string) {
  window.history.pushState({ ficha: true }, '', PREFIJO + slug)
  window.dispatchEvent(new Event('ruta'))
}

export function cerrarFicha() {
  // Si la ficha se abrió desde la home, volvemos atrás para no ensuciar el historial.
  if (window.history.state?.ficha) window.history.back()
  else {
    window.history.replaceState(null, '', '/#proyectos')
    window.dispatchEvent(new Event('ruta'))
    document.getElementById('proyectos')?.scrollIntoView()
  }
}

export function irAFicha(slug: string) {
  window.history.replaceState({ ficha: true }, '', PREFIJO + slug)
  window.dispatchEvent(new Event('ruta'))
}
