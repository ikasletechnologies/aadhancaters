import { ArrowRight } from 'lucide-react'
import teamImage from '@/assets/images/aadhan-chefs.png'
import './OurTeam.css'

export function OurTeam() {
  return (
    <section className="our-team" aria-labelledby="our-team-title">
      <img className="our-team__image" src={teamImage} alt="Aadhan chefs preparing South Indian dishes" />
      <div className="our-team__content">
        <p className="our-team__eyebrow"><span>✤</span> Our Team</p>
        <h2 id="our-team-title">Passionate People<br />Behind Every Feast</h2>
        <p>Our experienced chefs and dedicated team work together to ensure every dish is prepared with care, served with warmth and leaves a lasting impression on your guests.</p>
        <a href="/services">Meet Our Services <ArrowRight aria-hidden="true" /></a>
      </div>
      <div className="our-team__temple" aria-hidden="true">
        <span>△</span><span>▱</span><span>▥</span><span>▥</span><span>▥</span>
      </div>
    </section>
  )
}
