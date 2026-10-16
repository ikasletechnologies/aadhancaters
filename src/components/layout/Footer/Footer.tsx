import logo from '@/assets/images/Aadhan footer.svg'
import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import './Footer.css'

const quickLinks = ['Home', 'About', 'Services', 'Contact']
const services = ['Wedding Catering', 'Corporate Events', 'Birthday Parties', 'House Warming', 'Outdoor Events', 'Traditional Feasts']
const CURRENT_YEAR = new Date().getFullYear()
const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/', path: 'M14 8h3V4h-3c-3.3 0-5 2-1 5v3H9v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1Z' },
  { label: 'Instagram', href: 'https://www.instagram.com/', path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z' },
  { label: 'YouTube', href: 'https://www.youtube.com/', path: 'M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .6 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.6-4.8ZM9.7 15.3V8.7L15.5 12l-5.8 3.3Z' },
  { label: 'WhatsApp', href: 'https://wa.me/919043000223', path: 'M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1-1.5-.7-2.5-1.3-3.5-3-.3-.5.3-.5.8-1.3.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.8.8-1.2 1.7-1.2 2.8 0 1.7 1.2 3.3 1.4 3.5.2.2 2.4 3.7 5.9 5.1.8.4 1.5.5 2 .7.9.3 1.7.2 2.3.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.3Z' },
]

export function Footer() {
  return <footer className='site-footer'>
    <div className='site-footer__main'>
      <div className='site-footer__brand'><a href='/' className='site-footer__logo' aria-label='Aadhan Caterers home'><img src={logo} alt='Aadhan Caterers' /></a><p>Crafting Grand South Indian Feasts</p></div>
      <div className='site-footer__column'><h3>Quick Links</h3><nav aria-label='Footer navigation'>{quickLinks.map(link => <a key={link} href={`/${link === 'Home' ? '' : link.toLowerCase()}`}>{link}</a>)}</nav></div>
      <div className='site-footer__column'><h3>Our Services</h3><nav aria-label='Catering services'>{services.map(service => <a key={service} href='/services'>{service}</a>)}</nav></div>
      <div className='site-footer__column site-footer__contact'><h3>Contact Us</h3><a href='tel:+919043000223'><Phone /> +91 90430 00223</a><a href='mailto:info@aadhancaterers.in'><Mail /> info@aadhancaterers.in</a><span><MapPin /> Chennai, Tamil Nadu, India</span></div>
      <div className='site-footer__follow'><h3>Follow Us</h3><div className='site-footer__socials'>{socialLinks.map(social => <a key={social.label} href={social.href} target='_blank' rel='noreferrer' aria-label={social.label}><svg viewBox='0 0 24 24' aria-hidden='true'><path d={social.path} /></svg></a>)}</div><p>Good Food<br />Happy People <Heart aria-hidden='true' /></p></div>
    </div>
    <div className='site-footer__bottom'>
      <span>© {CURRENT_YEAR} Aadhan Caterers. All rights reserved.</span>
      <nav aria-label='Legal links'><a href='/faq'>FAQ</a><a href='/terms'>Terms &amp; Conditions</a><a href='/privacy-policy'>Privacy Policy</a></nav>
      <span>Tradition <i>•</i> Taste <i>•</i> Togetherness</span>
    </div>
  </footer>
}
