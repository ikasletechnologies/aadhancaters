import { useEffect } from 'react'

const seo = {
  home: { title: 'Aadhan Caterers | Authentic South Indian Catering in Chennai', description: 'Premium South Indian catering in Chennai for weddings, corporate events, birthdays, housewarming ceremonies and special occasions.' },
  about: { title: 'About Aadhan Caterers | Tradition, Taste & Togetherness', description: 'Discover Aadhan Caterers, our experienced team and our passion for creating memorable South Indian dining experiences in Chennai.' },
  services: { title: 'Catering Services in Chennai | Aadhan Caterers', description: 'Explore wedding, corporate, birthday, housewarming, outdoor event and traditional feast catering services from Aadhan Caterers.' },
  menu: { title: 'South Indian Catering Menu | Aadhan Caterers Chennai', description: 'Explore 90+ authentic South Indian dishes including breakfast, traditional meals, biryani, sweets, beverages and live counters.' },
  contact: { title: 'Contact Aadhan Caterers | Book Catering in Chennai', description: 'Contact Aadhan Caterers for customized menus, event catering quotes and hassle-free bookings across Chennai and nearby locations.' },
} as const

export function Seo({ page }: { page: keyof typeof seo }) {
  useEffect(() => {
    const data = seo[page]
    const canonicalUrl = `https://aadhancaterers.com${page === 'home' ? '/' : `/${page}`}`
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
