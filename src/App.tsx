import { useState, useEffect } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CateringServices, HeroSection, HomeCTA, SignatureMenu, WhyChooseUs } from '@/components/home'
import { AboutPage } from '@/pages/AboutPage'

export function App() {
  const [isAboutPage, setIsAboutPage] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        window.location.pathname === '/about' ||
        window.location.hash.toLowerCase() === '#about'
      )
    }
    return false
  })

  useEffect(() => {
    const handleLocationChange = () => {
      setIsAboutPage(
        window.location.pathname === '/about' ||
        window.location.hash.toLowerCase() === '#about'
      )
    }

    window.addEventListener('hashchange', handleLocationChange)
    window.addEventListener('popstate', handleLocationChange)

    return () => {
      window.removeEventListener('hashchange', handleLocationChange)
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#fffaf2]">
      <Navbar />
      <main aria-label="Aadhan website content">
        {isAboutPage ? (
          <AboutPage />
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
