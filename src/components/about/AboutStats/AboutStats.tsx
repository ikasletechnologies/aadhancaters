import { Award, CalendarDays, UsersRound, Utensils } from 'lucide-react'
import './AboutStats.css'

const stats = [
  { value: '500+', label: 'Happy Clients', icon: UsersRound },
  { value: '1000+', label: 'Events Catered', icon: CalendarDays },
  { value: '50+', label: 'Authentic Dishes', icon: Utensils },
  { value: '10+', label: 'Years of Experience', icon: Award },
]

export function AboutStats() {
  return (
    <section className="about-stats" aria-label="Aadhan Caterers achievements">
      <div className="about-stats__leaf about-stats__leaf--left" aria-hidden="true" />
      <div className="about-stats__leaf about-stats__leaf--right" aria-hidden="true" />
      <div className="about-stats__pattern about-stats__pattern--left" aria-hidden="true">✺</div>
      <div className="about-stats__pattern about-stats__pattern--right" aria-hidden="true">✺</div>
      <div className="about-stats__inner">
        {stats.map(({ value, label, icon: Icon }) => (
          <div className="about-stat" key={label}>
            <Icon aria-hidden="true" />
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
