import { ChefHat, Clock3, Leaf, SlidersHorizontal, UsersRound } from 'lucide-react'
import menuImage from '@/assets/images/signature-menu.png'
import './AboutWhyChooseUs.css'

const reasons = [
  { title: 'Authentic Taste', description: 'Traditional recipes with original flavours', icon: Leaf },
  { title: 'Hygienic Preparation', description: 'Clean and safe cooking environment', icon: ChefHat },
  { title: 'Customizable Menus', description: 'Tailored to your needs and preferences', icon: SlidersHorizontal },
  { title: 'Experienced Team', description: 'Friendly and professional service staff', icon: UsersRound },
  { title: 'On-Time Service', description: 'We value your time and never compromise', icon: Clock3 },
]

export function AboutWhyChooseUs() {
  return (
    <section className="about-why" aria-labelledby="about-why-title">
      <div className="about-why__leaf about-why__leaf--left" aria-hidden="true" />
      <div className="about-why__leaf about-why__leaf--right" aria-hidden="true" />
      <div className="about-why__food" aria-hidden="true">
        <img src={menuImage} alt="" />
      </div>
      <div className="about-why__inner">
        <p className="about-why__eyebrow">Why Choose Us</p>
        <h2 id="about-why-title">More Than Just Food,<br />We Create Experiences <Leaf aria-hidden="true" /></h2>
        <div className="about-why__grid">
          {reasons.map(({ title, description, icon: Icon }) => (
            <article className="about-why__card" key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
