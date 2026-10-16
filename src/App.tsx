import { useState, useEffect } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CateringServices, HeroSection, HomeCTA, SignatureMenu, WhyChooseUs } from '@/components/home'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { MenuPage } from '@/pages/MenuPage'

export function App() {
  const [page, setPage] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/contact' || window.location.hash.toLowerCase() === '#contact') return 'contact'
      if (window.location.pathname === '/services') return 'services'
      if (window.location.pathname === '/menu') return 'menu'
      if (window.location.pathname === '/about' || window.location.hash.toLowerCase() === '#about') return 'about'
    }
    return 'home'
  })

  useEffect(() => {
    const handleLocationChange = () => {
      if (window.location.pathname === '/contact' || window.location.hash.toLowerCase() === '#contact') setPage('contact')
      else if (window.location.pathname === '/services') setPage('services')
      else if (window.location.pathname === '/menu') setPage('menu')
      else if (window.location.pathname === '/about' || window.location.hash.toLowerCase() === '#about') setPage('about')
      else setPage('home')
    }

    window.addEventListener('hashchange', handleLocationChange)
    window.addEventListener('popstate', handleLocationChange)

    return () => {
      window.removeEventListener('hashchange', handleLocationChange)
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const targetId = window.location.hash.slice(1)
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [page])

  return (
    <div className="min-h-screen bg-[#fffaf2]">
      <Navbar />
      <main aria-label="Aadhan website content">
        {page === 'about' ? (
          <AboutPage />
        ) : page === 'contact' ? (
          <ContactPage />
        ) : page === 'services' ? (
          <ServicesPage />
        ) : page === 'menu' ? (
          <MenuPage />
        ) : (
          <>
            <HeroSection />
            <CateringServices />
            <SignatureMenu />
            <WhyChooseUs />
            <HomeCTA />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
