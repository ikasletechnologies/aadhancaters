import { ArrowRight, ChefHat, ClipboardList, Leaf, UtensilsCrossed, UsersRound } from 'lucide-react'
import feastImage from '@/assets/images/menu-hero-v2.png'
import './MenuHero.css'
const features=[
 {icon:Leaf,label:<>Authentic<br/>Taste</>},
 {icon:ChefHat,label:<>Hygienic<br/>Preparation</>},
 {icon:UtensilsCrossed,label:<>Wide Variety<br/>(90+ Dishes)</>},
 {icon:UsersRound,label:<>Perfect for<br/>Every Occasion</>},
]
export function MenuHero(){return <section className='menu-hero' aria-labelledby='menu-hero-title'><img className='menu-hero__image' src={feastImage} alt='Grand South Indian feast arranged on banana leaves'/><div className='menu-hero__content'><p className='menu-hero__eyebrow'>Tradition · Taste · Togetherness</p><h1 id='menu-hero-title'><span>Our</span> Menu</h1><p className='menu-hero__description'>A delightful range of 90+ authentic<br/>South Indian delicacies, prepared with<br/>tradition and the finest ingredients.</p><div className='menu-hero__features'>{features.map(({icon:Icon,label})=><div className='menu-feature' key={String(label)}><Icon/><strong>{label}</strong></div>)}</div><div className='menu-hero__actions'><a className='menu-hero__primary' href='#menu'><UtensilsCrossed/>Explore Our Menu <ArrowRight/></a><a className='menu-hero__secondary' href='/contact#enquiry'><ClipboardList/>Request Custom Menu</a></div></div><div className='menu-hero__script' aria-hidden='true'><b>90+</b><span>Delicious<br/>South Indian<br/>Dishes ♡</span></div></section>}
