import { useEffect } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </>
  )
}
