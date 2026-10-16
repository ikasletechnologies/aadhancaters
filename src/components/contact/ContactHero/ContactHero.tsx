import { CalendarClock, ChefHat, Clock3, UsersRound } from 'lucide-react'
import feastImage from '@/assets/images/south-indian-hero.png'
import './ContactHero.css'

const benefits = [
  { icon: Clock3, title: 'Quick Response', text: <>We'll get back to you<br />within 24 hours</> },
  { icon: ChefHat, title: 'Customized Menus', text: <>Tailored to your<br />needs</> },
  { icon: UsersRound, title: 'Expert Team', text: <>Professional<br />guidance</> },
  { icon: CalendarClock, title: 'Hassle-Free Booking', text: <>Simple and transparent<br />process</> },
]
export function ContactHero() {
 return <section className='contact-hero' aria-labelledby='contact-title'><img className='contact-hero__image' src={feastImage} alt='A grand South Indian feast served on banana leaves' /><div className='contact-hero__mandala' aria-hidden='true' /><div className='contact-hero__inner'><div className='contact-hero__copy'><p className='contact-hero__eyebrow'>Get in touch</p><h1 id='contact-title'>Let’s Make Your<br /><span>Event Special</span></h1><p className='contact-hero__intro'>We’d love to be a part of your special occasion.<br />Get in touch with us for menus, bookings,<br />customization or any queries.</p><div className='contact-hero__benefits' aria-label='Why contact Aadhan'>{benefits.map(({ icon: Icon, title, text }) => <article className='contact-benefit' key={title}><Icon aria-hidden='true' /><strong>{title}</strong><p>{text}</p></article>)}</div></div></div><p className='contact-hero__script' aria-hidden='true'>Good<br />Food<br />Brings<br />People<br />Together <b>◆</b></p><div className='contact-hero__seal' aria-label='Crafting grand South Indian feasts'><span>Crafting</span><strong>Grand</strong><span>South Indian</span><strong>Feasts</strong><b>◆</b></div></section>
}
