import { ArrowRight } from 'lucide-react'
import heroImage from '@/assets/images/south-indian-hero.png'
import './AboutHero.css'

export function AboutHero() {
  return (
    <section className="about-hero" aria-labelledby="about-hero-title">
      <img className="about-hero__image" src={heroImage} alt="A traditional South Indian feast with brass lamps" />
      <div className="about-hero__ornament" aria-hidden="true">✺</div>
      <div className="about-hero__content">
        <p className="about-hero__eyebrow">About Aadhan Caterers</p>
        <h1 id="about-hero-title">A Journey of <span>Tradition, Taste</span> and Togetherness</h1>
        <p className="about-hero__description">
          At Aadhan Caterers, we believe food is more than a meal — it&apos;s an emotion that brings people together. With a passion for authentic South Indian cuisine, we create memorable dining experiences for weddings, corporate events, house warming ceremonies and all special occasions.
        </p>
        <a href="/#services" className="about-hero__button">Our Services <ArrowRight aria-hidden="true" /></a>
      </div>
      <p className="about-hero__script" aria-hidden="true">Good<br />Food<br />Brings<br />People<br />Together ♡</p>
    </section>
  )
}
