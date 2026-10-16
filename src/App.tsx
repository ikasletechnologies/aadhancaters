import { useState, useEffect } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CateringServices, HeroSection, HomeCTA, SignatureMenu, WhyChooseUs } from '@/components/home'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { MenuPage } from '@/pages/MenuPage'
import { Seo } from '@/components/common/Seo/Seo'
import { InformationPage } from '@/pages/InformationPages/InformationPages'

type Page = 'home' | 'about' | 'services' | 'menu' | 'contact' | 'faq' | 'terms' | 'privacy'

export function App() {
  const [page, setPage] = useState<Page>(() => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/contact' || window.location.hash.toLowerCase() === '#contact') return 'contact'
      if (window.location.pathname === '/services') return 'services'
      if (window.location.pathname === '/menu') return 'menu'
      if (window.location.pathname === '/about' || window.location.hash.toLowerCase() === '#about') return 'about'
      if (window.location.pathname === '/faq') return 'faq'
      if (window.location.pathname === '/terms') return 'terms'
      if (window.location.pathname === '/privacy-policy') return 'privacy'
    }
    return 'home'
  })

  useEffect(() => {
    const handleLocationChange = () => {
      if (window.location.pathname === '/contact' || window.location.hash.toLowerCase() === '#contact') setPage('contact')
      else if (window.location.pathname === '/services') setPage('services')
      else if (window.location.pathname === '/menu') setPage('menu')
      else if (window.location.pathname === '/about' || window.location.hash.toLowerCase() === '#about') setPage('about')
      else if (window.location.pathname === '/faq') setPage('faq')
      else if (window.location.pathname === '/terms') setPage('terms')
      else if (window.location.pathname === '/privacy-policy') setPage('privacy')
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

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('main > section, main section section, footer')
    )

    elements.forEach((element, index) => {
      element.classList.add('aadhan-reveal')
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`)
    })

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -45px' }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [page])

  return (
    <div className="min-h-screen bg-[#fffaf2]">
      <Seo page={page} />
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
        ) : page === 'faq' || page === 'terms' || page === 'privacy' ? (
          <InformationPage kind={page} />
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
