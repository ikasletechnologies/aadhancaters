import { useState } from 'react'
import { ChevronDown, FileText, HelpCircle, ShieldCheck } from 'lucide-react'
import './InformationPages.css'

const faqs = [
  ['How early should I book Aadhan Caterers?', 'For weddings and large events, booking 4–8 weeks ahead is recommended. Smaller functions can often be arranged with shorter notice, subject to availability.'],
  ['Do you provide customized menus?', 'Yes. We tailor the dishes, serving style and package to your occasion, guest count, preferences and budget.'],
  ['Do you offer vegetarian and non-vegetarian food?', 'Yes. We offer dedicated vegetarian and non-vegetarian menus and follow careful preparation and service practices.'],
  ['Which locations do you serve?', 'We cater across Coimbatore and nearby locations. Contact us with your venue details so we can confirm availability and logistics.'],
  ['Can you handle live counters and traditional service?', 'Yes. Live counters, buffet service and traditional banana-leaf dining can be arranged based on your event requirements.'],
  ['How do I request a quotation?', 'Use the enquiry form or WhatsApp us at +91 90430 00223 with your event date, location, guest count and preferred menu.'],
]

const terms = [
  ['Bookings and confirmation', 'An enquiry does not reserve a date. A booking is confirmed only after menu, guest count, venue, service scope, pricing and advance payment are mutually agreed.'],
  ['Pricing and guest count', 'Quotations are based on the information shared at the time of enquiry. Changes to guest count, menu, venue, timing or service requirements may change the final price.'],
  ['Payments', 'The applicable advance and payment schedule will be stated in your quotation. The remaining amount must be paid according to the agreed schedule.'],
  ['Changes and cancellation', 'Please notify us as early as possible. Changes are subject to availability and additional costs. Cancellation and refund eligibility depend on committed purchases, staffing and the agreed quotation.'],
  ['Venue and access', 'The customer is responsible for venue permissions, suitable access, water, electricity and other facilities agreed as necessary for catering service.'],
  ['Food and service', 'We take reasonable care with food preparation and hygiene. Any allergy or dietary requirement must be disclosed before confirmation; complete absence of cross-contact cannot be guaranteed.'],
  ['Liability', 'Aadhan Caterers is not responsible for delays or non-performance caused by events outside reasonable control, including severe weather, venue restrictions or government action.'],
]

const privacy = [
  ['Information we collect', 'We may collect your name, phone number, email, event type, date, guest count, venue and message when you contact us or submit an enquiry.'],
  ['How we use information', 'We use this information to respond to enquiries, prepare quotations, plan catering services, communicate booking updates and improve our customer service.'],
  ['WhatsApp enquiries', 'When you submit the website enquiry form, the entered details are prepared as a WhatsApp message to +91 90430 00223. WhatsApp processes that communication under its own privacy terms.'],
  ['Sharing and retention', 'We do not sell personal information. Details may be shared only with team members or service providers who need them to fulfil your event, or when required by law. We retain information only as long as reasonably necessary.'],
  ['Security', 'We use reasonable measures to protect the information available to us, but no internet transmission or storage method can be guaranteed completely secure.'],
  ['Your choices', 'You may request correction or deletion of your personal information by contacting us, subject to legal and legitimate business record requirements.'],
  ['Contact', 'For privacy questions, email info@aadhancaterers.in or call +91 90430 00223.'],
]

type InfoPageProps = { kind: 'faq' | 'terms' | 'privacy' }

export function InformationPage({ kind }: InfoPageProps) {
  const [open, setOpen] = useState(0)
  const isFaq = kind === 'faq'
  const title = isFaq ? 'Frequently Asked Questions' : kind === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'
  const eyebrow = isFaq ? 'QUICK ANSWERS' : kind === 'terms' ? 'SERVICE AGREEMENT' : 'YOUR PRIVACY'
  const intro = isFaq
    ? 'Helpful answers about our menus, bookings and catering service.'
    : kind === 'terms'
      ? 'Please read these terms before confirming a catering service with us.'
      : 'How Aadhan Caterers collects, uses and protects your information.'
  const items = kind === 'terms' ? terms : privacy
  const Icon = isFaq ? HelpCircle : kind === 'terms' ? FileText : ShieldCheck

  return (
    <section className='info-page'>
      <header className='info-page__hero'>
        <Icon aria-hidden='true' />
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </header>
      <div className='info-page__content'>
        {isFaq ? (
          <div className='info-page__faq'>
            {faqs.map(([question, answer], index) => (
              <article className={open === index ? 'is-open' : ''} key={question}>
                <button type='button' onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
                  <span>{question}</span><ChevronDown aria-hidden='true' />
                </button>
                <div className='info-page__answer'><p>{answer}</p></div>
              </article>
            ))}
          </div>
        ) : (
          <div className='info-page__policy'>
            <p className='info-page__updated'>Last updated: 16 October 2026</p>
            {items.map(([heading, copy], index) => (
              <article key={heading}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h2>{heading}</h2><p>{copy}</p></div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
