import { useEffect } from 'react'

const seo = {
  home: { title: 'Aadhan Caterers | Authentic South Indian Catering in Coimbatore', description: 'Premium South Indian catering in Coimbatore for weddings, corporate events, birthdays, housewarming ceremonies and special occasions.' },
  about: { title: 'About Aadhan Caterers | Tradition, Taste & Togetherness', description: 'Discover Aadhan Caterers, our experienced team and our passion for creating memorable South Indian dining experiences in Coimbatore.' },
  services: { title: 'Catering Services in Coimbatore | Aadhan Caterers', description: 'Explore wedding, corporate, birthday, housewarming, outdoor event and traditional feast catering services from Aadhan Caterers.' },
  menu: { title: 'South Indian Catering Menu | Aadhan Caterers Coimbatore', description: 'Explore 90+ authentic South Indian dishes including breakfast, traditional meals, biryani, sweets, beverages and live counters.' },
  contact: { title: 'Contact Aadhan Caterers | Book Catering in Coimbatore', description: 'Contact Aadhan Caterers for customized menus, event catering quotes and hassle-free bookings across Coimbatore and nearby locations.' },
  faq: { title: 'Catering FAQ | Aadhan Caterers Coimbatore', description: 'Find answers about Aadhan Caterers menus, bookings, event locations, live counters and customized catering services.' },
  terms: { title: 'Terms & Conditions | Aadhan Caterers', description: 'Read the terms and conditions that apply to bookings and catering services provided by Aadhan Caterers.' },
  privacy: { title: 'Privacy Policy | Aadhan Caterers', description: 'Learn how Aadhan Caterers collects, uses and protects information submitted through our website and WhatsApp enquiries.' },
} as const

export function Seo({ page }: { page: keyof typeof seo }) {
  useEffect(() => {
    const data = seo[page]
    const slug = page === 'home' ? '/' : page === 'privacy' ? '/privacy-policy' : `/${page}`
    const canonicalUrl = `https://aadhancaterers.com${slug}`
    document.title = data.title
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', data.description)
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', data.title)
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', data.description)
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
    document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.setAttribute('content', data.title)
    document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute('content', data.description)
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
  }, [page])
  return null
}
