import { ArrowRight, BriefcaseBusiness, CakeSlice, HeartHandshake, House, Leaf, Trees } from 'lucide-react'
import servicesImage from '@/assets/images/catering-services.png'
import './CateringServices.css'

const services = [
  { title: 'Wedding Catering', description: 'Traditional elegance with authentic flavors for your big day.', icon: HeartHandshake },
  { title: 'Corporate Events', description: 'Impress your guests with exceptional catering experiences.', icon: BriefcaseBusiness },
  { title: 'Birthday Parties', description: 'Delicious menus for memorable celebrations.', icon: CakeSlice },
  { title: 'Housewarming', description: 'Auspicious meals to make your new beginning special.', icon: House },
  { title: 'Outdoor Events', description: 'Flawless catering for events at any location.', icon: Trees },
  { title: 'Traditional South Indian Feasts', description: 'Authentic, traditional menus for a true cultural experience.', icon: Leaf },
]

export function CateringServices() {
  return (
    <section id="services" className="catering-services">
      <div className="catering-services__ornament catering-services__ornament--left" aria-hidden="true">❧</div>
      <div className="catering-services__ornament catering-services__ornament--right" aria-hidden="true">❧</div>
      <div className="catering-services__inner">
        <h2>Our Catering Services</h2>
        <span className="catering-services__flourish" aria-hidden="true">◆</span>
        <p className="catering-services__intro">From intimate gatherings to grand celebrations, we bring the authentic taste of South India to your special moments.</p>

        <div className="catering-services__grid">
          {services.map(({ title, description, icon: Icon }, index) => (
            <article className="service-card" key={title}>
              <div
                className="service-card__photo"
                style={{ backgroundImage: `url(${servicesImage})`, backgroundPosition: `${index * 20}% center` }}
                role="img"
                aria-label={title}
              />
              <div className="service-card__body">
                <div className="service-card__icon"><Icon aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="/contact#enquiry" aria-label={`Enquire about ${title}`}>
                  <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
