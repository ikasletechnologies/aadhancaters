import { ArrowRight, CalendarDays, Headphones, SlidersHorizontal, UsersRound } from 'lucide-react'
import heroImage from '@/assets/images/south-indian-hero.png'
import './HomeCTA.css'

const features = [
  { label: 'Customizable Menus', icon: SlidersHorizontal },
  { label: 'For All Event Sizes', icon: UsersRound },
  { label: 'Professional Support', icon: Headphones },
]

export function HomeCTA() {
  return (
    <section className="home-cta" aria-labelledby="home-cta-title">
      <div className="home-cta__copy">
        <p>Let&apos;s Make Your Event Special</p>
        <h2 id="home-cta-title">Book Aadhan Caterers<br />for Your Next Celebration</h2>
        <span>Authentic food. Exceptional service. Unforgettable experiences.</span>
      </div>

      <div className="home-cta__visual" aria-hidden="true">
        <img src={heroImage} alt="" />
      </div>

      <div className="home-cta__panel">
        <ul>
          {features.map(({ label, icon: Icon }) => (
            <li key={label}><Icon aria-hidden="true" /><span>{label}</span></li>
          ))}
        </ul>
        <a href="#enquire-now">
          <CalendarDays aria-hidden="true" /> Enquire Now <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
