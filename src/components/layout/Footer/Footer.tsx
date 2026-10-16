import { Camera, ChefHat, Globe2, Heart, Mail, MapPin, MessageCircle, Phone, Play } from 'lucide-react'
import './Footer.css'

const quickLinks = ['Home', 'About', 'Services', 'Contact']
const services = ['Wedding Catering', 'Corporate Events', 'Birthday Parties', 'House Warming', 'Outdoor Events', 'Traditional Feasts']
const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <div className="site-footer__logo">
            <ChefHat aria-hidden="true" />
            <strong>A</strong><span>adhan<small>CATERERS</small></span>
          </div>
          <p>Crafting Grand South Indian Feasts</p>
        </div>

        <div className="site-footer__column">
          <h3>Quick Links</h3>
          <nav aria-label="Footer navigation">
            {quickLinks.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
          </nav>
        </div>

        <div className="site-footer__column">
          <h3>Our Services</h3>
          <nav aria-label="Catering services">
            {services.map((service) => <a key={service} href="#services">{service}</a>)}
          </nav>
        </div>

        <div className="site-footer__column site-footer__contact">
          <h3>Contact Us</h3>
          <a href="tel:+919876543210"><Phone /> +91 98765 43210</a>
          <a href="tel:+918765432109"><Phone /> +91 87654 32109</a>
          <a href="mailto:info@aadhancaterers.in"><Mail /> info@aadhancaterers.in</a>
          <span><MapPin /> Chennai, Tamil Nadu, India</span>
        </div>

        <div className="site-footer__follow">
          <h3>Follow Us</h3>
          <div className="site-footer__socials">
            <a href="#facebook" aria-label="Facebook"><Globe2 /></a>
            <a href="#instagram" aria-label="Instagram"><Camera /></a>
            <a href="#youtube" aria-label="YouTube"><Play /></a>
            <a href="#whatsapp" aria-label="WhatsApp"><MessageCircle /></a>
          </div>
          <p>Good Food<br />Happy People <Heart aria-hidden="true" /></p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {CURRENT_YEAR} Aadhan Caterers. All rights reserved.</span>
        <span>Tradition <i>•</i> Taste <i>•</i> Togetherness</span>
      </div>
    </footer>
  )
}
