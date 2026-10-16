import { ArrowRight, Leaf, Quote } from 'lucide-react'
import heroImage from '@/assets/images/south-indian-hero.png'
import './OurStory.css'

export function OurStory() {
  return (
    <section className="our-story" aria-labelledby="our-story-title">
      <div className="our-story__leaf our-story__leaf--top" aria-hidden="true" />
      <div className="our-story__leaf our-story__leaf--bottom" aria-hidden="true" />
      <div className="our-story__ornament" aria-hidden="true">✺</div>

      <div className="our-story__inner">
        <div className="our-story__copy">
          <div className="our-story__eyebrow"><span>Our Story</span><i>✤</i></div>
          <h2 id="our-story-title">Rooted in Tradition,<br />Inspired by People</h2>
          <p>Aadhan Caterers was born from a simple idea — to share the richness of South Indian flavours with every celebration. What started as a humble effort has now grown into a trusted catering service, known for authentic taste, hygiene and exceptional service.</p>
          <a href="/services">Our Services <ArrowRight aria-hidden="true" /></a>
        </div>

        <div className="our-story__gallery">
          <div className="our-story__main-photo"><img src={heroImage} alt="Traditional South Indian catering feast" /></div>
          <blockquote className="our-story__quote">
            <Quote aria-hidden="true" />
            <p>Crafting<br /><strong>Grand</strong><br />South Indian<br /><strong>Feasts</strong></p>
            <Leaf aria-hidden="true" />
          </blockquote>
          <div className="our-story__memory">
            <img src={heroImage} alt="A timeless South Indian food tradition" />
            <p>Our<br />Tradition<br />Continues <Leaf aria-hidden="true" /></p>
          </div>
        </div>
      </div>
    </section>
  )
}
