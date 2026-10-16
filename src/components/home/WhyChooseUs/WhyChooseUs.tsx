import { BookOpenText, ChefHat, Clock3, CookingPot, Leaf, UsersRound } from 'lucide-react'
import './WhyChooseUs.css'

const benefits = [
  { title: 'Hygiene & Quality', description: 'Strict hygiene standards and premium ingredients.', icon: Leaf },
  { title: 'Authentic Taste', description: 'Traditional recipes with rich flavors.', icon: ChefHat },
  { title: 'Live Counters', description: 'Freshly prepared dishes at your event.', icon: CookingPot },
  { title: 'Custom Menus', description: 'Tailored menus for your unique needs.', icon: BookOpenText },
  { title: 'Experienced Chefs', description: 'Skilled chefs with years of expertise.', icon: UsersRound },
  { title: 'On-Time Service', description: 'Punctual and professional service.', icon: Clock3 },
]

export function WhyChooseUs() {
  return (
    <section className="why-choose-us" aria-labelledby="why-choose-us-title">
      <div className="why-choose-us__leaf why-choose-us__leaf--left" aria-hidden="true" />
      <div className="why-choose-us__leaf why-choose-us__leaf--right" aria-hidden="true" />
      <div className="why-choose-us__mandala why-choose-us__mandala--left" aria-hidden="true">✺</div>
      <div className="why-choose-us__mandala why-choose-us__mandala--right" aria-hidden="true">✺</div>

      <div className="why-choose-us__inner">
        <h2 id="why-choose-us-title">Why Choose Aadhan Caterers?</h2>
        <span className="why-choose-us__flourish" aria-hidden="true">◆</span>
        <p className="why-choose-us__intro">We go beyond just food. We create memorable culinary experiences with tradition, quality and care.</p>

        <div className="why-choose-us__grid">
          {benefits.map(({ title, description, icon: Icon }) => (
            <article className="benefit-card" key={title}>
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
