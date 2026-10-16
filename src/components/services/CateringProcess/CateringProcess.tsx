import { ArrowRight, Flower2 } from 'lucide-react'
import './CateringProcess.css'
const steps=[
 {number:'1',title:'Get a Quote',text:<>Share your event details<br/>and requirements.</>},
 {number:'2',title:'Menu Planning',text:<>We customize the menu<br/>as per your needs.</>},
 {number:'3',title:'Confirm Booking',text:<>Lock your date and finalize<br/>the arrangements.</>},
 {number:'4',title:'We Cater',text:<>Relax and enjoy your<br/>event with great food.</>},
]
export function CateringProcess(){return <section className='catering-process' aria-labelledby='process-title'><div className='catering-process__ornament' aria-hidden='true'><span/><Flower2/><span/></div><h2 id='process-title'>Our Catering Process</h2><div className='catering-process__steps'>{steps.map((step,index)=><div className='catering-process__group' key={step.number}><article className='process-step'><b>{step.number}</b><h3>{step.title}</h3><p>{step.text}</p></article>{index<steps.length-1&&<ArrowRight className='process-arrow' aria-hidden='true'/>}</div>)}</div><div className='catering-process__leaf catering-process__leaf--left' aria-hidden='true'/><div className='catering-process__leaf catering-process__leaf--right' aria-hidden='true'/><div className='catering-process__lamp' aria-hidden='true'><i/><span>♢</span><strong>♜</strong></div></section>}
