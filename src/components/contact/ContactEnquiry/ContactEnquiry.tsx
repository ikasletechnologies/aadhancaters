import { CalendarDays, ChevronRight, Leaf, Mail, MapPin, MessageCircle, Phone, UserRound, UsersRound } from 'lucide-react'
import './ContactEnquiry.css'

export function ContactEnquiry() {
  return (
    <section id='enquiry' className='contact-enquiry' aria-labelledby='enquiry-title'>
      <div className='contact-enquiry__leaf contact-enquiry__leaf--left' aria-hidden='true' />
      <div className='contact-enquiry__leaf contact-enquiry__leaf--right' aria-hidden='true' />
      <div className='contact-enquiry__inner'>
        <div className='contact-enquiry__heading'>
          <p>Send us a message</p>
          <h2 id='enquiry-title'>Enquire About Your Event <Leaf aria-hidden='true' /></h2>
          <span>Fill in the details below and our team will get back to you with a<br />personalized quote and menu suggestions.</span>
        </div>
        <div className='contact-enquiry__grid'>
          <form className='enquiry-form' onSubmit={(event) => event.preventDefault()}>
            <label>Your Name <b>*</b><span><UserRound /><input required name='name' placeholder='Enter your name' /></span></label>
            <label>Mobile Number <b>*</b><span><Phone /><input required name='phone' type='tel' placeholder='Enter your mobile number' /></span></label>
            <label>Email Address<span><Mail /><input name='email' type='email' placeholder='Enter your email' /></span></label>
            <label>Event Type <b>*</b><span><CalendarDays /><select required name='eventType' defaultValue=''><option value='' disabled>Select Event Type</option><option>Wedding</option><option>Corporate Event</option><option>Birthday Celebration</option><option>Private Function</option></select></span></label>
            <label className='enquiry-form__wide'>Event Date<span><CalendarDays /><input name='date' type='date' /></span></label>
            <label>Number of Guests <b>*</b><span><UsersRound /><input required name='guests' type='number' min='1' placeholder='Approximate number' /></span></label>
            <label>Location/Venue <b>*</b><span><MapPin /><input required name='location' placeholder='Enter event location' /></span></label>
            <label className='enquiry-form__wide'>Additional Message (Optional)<span className='enquiry-form__message'><MessageCircle /><textarea name='message' placeholder='Tell us more about your requirements...' /></span></label>
            <button className='enquiry-form__submit' type='submit'>Send Enquiry <ChevronRight /></button>
          </form>
          <div className='contact-enquiry__aside'>
            <article className='contact-card'>
              <h3>Contact Information <Leaf aria-hidden='true' /></h3>
              <p>We’re here to help you plan a memorable experience.<br />Reach us through any of the following channels.</p>
              <div className='contact-card__item'><i><Phone /></i><div><strong>+91 98765 43210<br />+91 87654 32109</strong><span>Call us anytime between 9 AM – 9 PM</span></div></div>
              <div className='contact-card__item'><i><Mail /></i><div><strong>info@aadhancaterers.in</strong><span>Send us your queries anytime</span></div></div>
              <div className='contact-card__item'><i><MapPin /></i><div><strong>Chennai, Tamil Nadu, India</strong><span>We cater across Chennai and nearby locations</span></div></div>
              <div className='contact-card__temple' aria-hidden='true'>⌂</div>
            </article>
            <div className='contact-map'>
              <iframe title='Aadhan Caterers location' loading='lazy' allowFullScreen referrerPolicy='strict-origin-when-cross-origin' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.7665114032857!2d76.95671528577805!3d11.018794741002859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591048828b5b%3A0x7c44ccb03d88fb56!2sAadhan%20Caterers!5e0!3m2!1sen!2sin!4v1792155403413!5m2!1sen!2sin' />
              <div className='contact-map__label'><strong>Aadhan Caterers</strong><span>Chennai, Tamil Nadu, India</span><a href='https://maps.google.com/?q=Chennai,Tamil+Nadu' target='_blank' rel='noreferrer'>View larger map</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
