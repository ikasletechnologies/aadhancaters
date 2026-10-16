import { ArrowRight } from 'lucide-react'
import menuImage from '@/assets/images/signature-menu.png'
import './SignatureMenu.css'

const menuItems = [
  { name: 'Masala Dosa', description: 'Crispy, golden and irresistible.', badge: 'Popular' },
  { name: 'Idli & Vada', description: 'Soft, fluffy, and a timeless favorite.', badge: 'Classic' },
  { name: 'South Indian Meals', description: 'A traditional feast on a banana leaf.', badge: 'Signature' },
  { name: 'Hyderabadi Biryani', description: 'Aromatic, flavorful and unforgettable.', badge: "Chef's Special" },
  { name: 'Tiffin Varieties', description: 'A wide range of traditional tiffin items.', badge: 'All Time Favorite' },
  { name: 'Traditional Sweets', description: 'End your meal on a sweet note.', badge: 'Must Try' },
]

export function SignatureMenu() {
  return (
    <section id="menu" className="signature-menu">
      <div className="signature-menu__pattern" aria-hidden="true">✥</div>
      <div className="signature-menu__inner">
        <div className="signature-menu__heading">
          <div>
            <h2>Our Signature Menu</h2>
            <span aria-hidden="true">◆</span>
            <p>A delightful range of authentic South Indian delicacies, prepared with tradition and the finest ingredients.</p>
          </div>
          <a href="/menu" className="signature-menu__button">View Full Menu <ArrowRight aria-hidden="true" /></a>
        </div>

        <div className="signature-menu__grid">
          {menuItems.map((item, index) => (
            <article className="menu-card" key={item.name}>
              <div
                className="menu-card__photo"
                style={{ backgroundImage: `url(${menuImage})`, backgroundPosition: `${index * 20}% center` }}
                role="img"
                aria-label={item.name}
              >
                <span>{item.badge}</span>
              </div>
              <div className="menu-card__content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
