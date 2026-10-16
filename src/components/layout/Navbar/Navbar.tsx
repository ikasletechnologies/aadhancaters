import React, { useState } from 'react'
import { CalendarDays, Menu, X } from 'lucide-react'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
]

export interface NavbarProps {
  onToggleSidebar?: () => void
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [activeItem, setActiveItem] = useState(window.location.pathname === '/about' ? 'About' : 'Home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const selectItem = (item: string) => {
    setActiveItem(item)
    setIsMenuOpen(false)
  }

  return (
    <header className="aadhan-header">
      <div className="aadhan-header__inner">
        <a href="#home" className="aadhan-logo" aria-label="Aadhan home">
          <span className="aadhan-logo__mark">A</span>
          <span className="aadhan-logo__name">Aadhan</span>
        </a>

        <nav className="aadhan-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={activeItem === item.label ? 'aadhan-nav__link is-active' : 'aadhan-nav__link'}
              onClick={() => selectItem(item.label)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#book-catering" className="aadhan-booking">
          <CalendarDays aria-hidden="true" />
          <span>Book Catering</span>
          <span className="aadhan-booking__arrow" aria-hidden="true">→</span>
        </a>

        <button
          type="button"
          className="aadhan-menu-button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-navigation" className="aadhan-mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={activeItem === item.label ? 'is-active' : ''}
              onClick={() => selectItem(item.label)}
            >
              {item.label}
            </a>
          ))}
          <a href="#book-catering" className="aadhan-mobile-nav__booking" onClick={() => setIsMenuOpen(false)}>
            <CalendarDays aria-hidden="true" /> Book Catering →
          </a>
        </nav>
      )}
    </header>
  )
}
