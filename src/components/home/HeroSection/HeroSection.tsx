import { CalendarDays, ChefHat, Leaf, Star, Users } from 'lucide-react'
import heroImage from '@/assets/images/south-indian-hero.png'
import './HeroSection.css'

const highlights = [
  { icon: Users, value: '500+', label: 'Events Catered' },
  { icon: Star, value: '100%', label: 'Customer Satisfaction' },
  { icon: Leaf, value: 'Authentic', label: 'South Indian Cuisine' },
]

export function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <img className="hero-section__background" src={heroImage} alt="Traditional South Indian feast served on a banana leaf" />
      <div className="hero-section__content">
        <p className="hero-section__eyebrow">Tradition · Taste · Togetherness</p>
        <h1>
          Premium <span>South Indian</span> Catering
        </h1>
        <p className="hero-section__description">
          Authentic flavors. Memorable moments.<br />For all your special occasions.
        </p>

        <div className="hero-section__actions">
          <a className="hero-section__primary" href="#book-catering">
            <CalendarDays aria-hidden="true" /> Book Catering <span>→</span>
          </a>
          <a className="hero-section__secondary" href="#menu">
            <ChefHat aria-hidden="true" /> Explore Menu
          </a>
        </div>

        <div className="hero-section__highlights" aria-label="Catering highlights">
          {highlights.map(({ icon: Icon, value, label }) => (
            <div className="hero-highlight" key={value}>
              <Icon aria-hidden="true" />
              <div><strong>{value}</strong><small>{label}</small></div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-section__script" aria-hidden="true">
        Traditional<br />Flavors<br />for Life&apos;s Special<br />Occasions
      </div>

      <div className="hero-section__seal" aria-label="Crafting grand South Indian feasts">
        <span>Crafting</span><strong>Grand</strong><span>South Indian</span><strong>Feasts</strong>
      </div>
    </section>
  )
}
