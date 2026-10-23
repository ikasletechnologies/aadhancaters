import { useState, type FormEvent } from 'react'
import { CalendarDays, ChevronRight, Leaf, Mail, MapPin, MessageCircle, Phone, UserRound, UsersRound } from 'lucide-react'
import './ContactEnquiry.css'

type FieldErrors = Partial<Record<'name' | 'phone' | 'eventType', string>>

export function ContactEnquiry() {
  const [errors, setErrors] = useState<FieldErrors>({})
  const today = new Date().toLocaleDateString('en-CA')

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const eventType = String(data.get('eventType') ?? '')
    const email = String(data.get('email') ?? '').trim()
    const eventDate = String(data.get('date') ?? '').trim()
    const guests = String(data.get('guests') ?? '').trim()
    const location = String(data.get('location') ?? '').trim()
    const additionalMessage = String(data.get('message') ?? '').trim()
    const nextErrors: FieldErrors = {}

    if (!name) nextErrors.name = 'Please enter your name.'
    else if (!/^[A-Za-z][A-Za-z .'-]{1,49}$/.test(name)) nextErrors.name = 'Use 2â€“50 letters and spaces only.'
    if (!phone) nextErrors.phone = 'Please enter your mobile number.'
    else if (!/^[6-9]\d{9}$/.test(phone)) nextErrors.phone = 'Enter a valid 10-digit Indian mobile number.'
    if (!eventType) nextErrors.eventType = 'Please select an event type.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const whatsappMessage = [
      'Hello Aadhan Caterers, I would like to enquire about catering.',
      '',
      `Name: ${name}`,
      `Mobile: +91 ${phone}`,
      `Email: ${email || 'Not provided'}`,
      `Event Type: ${eventType}`,
      `Event Date: ${eventDate || 'Not specified'}`,
      `Number of Guests: ${guests}`,
      `Location/Venue: ${location}`,
      `Additional Message: ${additionalMessage || 'None'}`,
    ].join('\n')

    window.open(`https://wa.me/919043000223?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer')
  }

  return <section id='enquiry' className='contact-enquiry' aria-labelledby='enquiry-title'>
    <div className='contact-enquiry__leaf contact-enquiry__leaf--left' aria-hidden='true'/><div className='contact-enquiry__leaf contact-enquiry__leaf--right' aria-hidden='true'/>
    <div className='contact-enquiry__inner'><div className='contact-enquiry__heading'><p>Send us a message</p><h2 id='enquiry-title'>Enquire About Your Event <Leaf aria-hidden='true'/></h2><span>Fill in the details below and our team will get back to you with a<br/>personalized quote and menu suggestions.</span></div>
      <div className='contact-enquiry__grid'>
        <form className='enquiry-form' noValidate onSubmit={submitEnquiry}>
          <label className={errors.name?'has-error':''}>Your Name <b>*</b><span><UserRound/><input name='name' maxLength={50} aria-invalid={Boolean(errors.name)} onChange={()=>errors.name&&setErrors({...errors,name:undefined})} placeholder='Enter your name'/></span>{errors.name&&<small>{errors.name}</small>}</label>
          <label className={errors.phone?'has-error':''}>Mobile Number <b>*</b><span><Phone/><input name='phone' type='tel' inputMode='numeric' maxLength={10} aria-invalid={Boolean(errors.phone)} onInput={(e)=>{e.currentTarget.value=e.currentTarget.value.replace(/\D/g,'').slice(0,10)}} onChange={()=>errors.phone&&setErrors({...errors,phone:undefined})} placeholder='Enter your mobile number'/></span>{errors.phone&&<small>{errors.phone}</small>}</label>
          <label>Email Address<span><Mail/><input name='email' type='email' placeholder='Enter your email'/></span></label>
          <label className={errors.eventType?'has-error':''}>Event Type <b>*</b><span><CalendarDays/><select name='eventType' defaultValue='' aria-invalid={Boolean(errors.eventType)} onChange={()=>errors.eventType&&setErrors({...errors,eventType:undefined})}><option value='' disabled>Select Event Type</option><option>Wedding</option><option>Corporate Event</option><option>Birthday Celebration</option><option>Private Function</option></select></span>{errors.eventType&&<small>{errors.eventType}</small>}</label>
          <label className='enquiry-form__wide'>Event Date<span><CalendarDays/><input name='date' type='date' min={today}/></span></label>
          <label>Number of Guests <b>*</b><span><UsersRound/><input required name='guests' type='number' min='1' placeholder='Approximate number'/></span></label>
          <label>Location/Venue <b>*</b><span><MapPin/><input required name='location' placeholder='Enter event location'/></span></label>
          <label className='enquiry-form__wide'>Additional Message (Optional)<span className='enquiry-form__message'><MessageCircle/><textarea name='message' placeholder='Tell us more about your requirements...'/></span></label>
          <button className='enquiry-form__submit' type='submit'>Send Enquiry <ChevronRight/></button>
        </form>
        <div className='contact-enquiry__aside'><article className='contact-card'><h3>Contact Information <Leaf aria-hidden='true'/></h3><p>Weâ€™re here to help you plan a memorable experience.<br/>Reach us through any of the following channels.</p><div className='contact-card__item'><i><Phone/></i><div><strong>+91 90430 00223</strong><span>Call us anytime between 9 AM â€“ 9 PM</span></div></div><div className='contact-card__item'><i><Mail/></i><div><strong>info@aadhancaterers.in</strong><span>Send us your queries anytime</span></div></div><div className='contact-card__item'><i><MapPin/></i><div><strong>Coimbatore, Tamil Nadu, India</strong><span>We cater across Coimbatore and nearby locations</span></div></div></article>
          <div className='contact-map'><iframe title='Aadhan Caterers location' loading='lazy' allowFullScreen referrerPolicy='strict-origin-when-cross-origin' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.7665114032857!2d76.95671528577805!3d11.018794741002859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591048828b5b%3A0x7c44ccb03d88fb56!2sAadhan%20Caterers!5e0!3m2!1sen!2sin!4v1792155403413!5m2!1sen!2sin'/><div className='contact-map__label'><strong>Aadhan Caterers</strong><span>Coimbatore, Tamil Nadu, India</span><a href='https://maps.google.com/?q=Coimbatore,Tamil+Nadu' target='_blank' rel='noreferrer'>View larger map</a></div></div>
        </div>
      </div>
    </div>
  </section>
}


