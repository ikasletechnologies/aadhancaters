import { useState } from 'react'
import { Leaf, Plus } from 'lucide-react'
import feastImage from '@/assets/images/south-indian-hero.png'
import './ContactFaq.css'
const faqs = [
 { question: 'How far in advance should I book?', answer: 'We recommend booking at least 2–4 weeks in advance. For weddings and large celebrations, earlier booking helps us reserve your preferred date.' },
 { question: 'Do you offer customized menus?', answer: 'Yes. We tailor every menu to your event, guest preferences, budget and dietary requirements.' },
 { question: 'Do you provide both vegetarian and non-vegetarian menus?', answer: 'Yes, we offer extensive vegetarian and non-vegetarian selections, prepared and handled with dedicated care.' },
 { question: 'Do you cater outside Chennai?', answer: 'Yes. We serve Chennai and nearby locations; contact our team with your venue details to confirm availability.' },
]
export function ContactFaq(){
 const [openItem,setOpenItem]=useState<number|null>(null)
 return <section className='contact-faq' aria-labelledby='faq-title'><div className='contact-faq__inner'><div className='contact-faq__content'><p>Quick answers</p><h2 id='faq-title'>Frequently Asked Questions <Leaf aria-hidden='true' /></h2><div className='contact-faq__list'>{faqs.map((faq,index)=><article className={openItem===index?'faq-item is-open':'faq-item'} key={faq.question}><button type='button' aria-expanded={openItem===index} onClick={()=>setOpenItem(openItem===index?null:index)}><span>{faq.question}</span><i><Plus /></i></button><div className='faq-item__answer'><p>{faq.answer}</p></div></article>)}</div></div><div className='contact-faq__visual'><img src={feastImage} alt='A traditional South Indian feast' /><blockquote><b>&ldquo;</b><span>Delicious<br />Food<br />Memorable<br />Moments</span><Leaf aria-hidden='true' /></blockquote></div></div></section>
}
