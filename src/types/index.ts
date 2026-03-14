export interface Product {
  id: string
  name: string
  category: 'cakes' | 'cupcakes' | 'pastries' | 'seasonal' | 'corporate'
  price: number
  description: string
  image: string
  badge?: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  occasion: string
  text: string
  stars: number
  image: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'wedding' | 'birthday' | 'cupcakes' | 'pastries' | 'events'
  width: number
  height: number
}

export interface NavLink {
  label: string
  href: string
}

export interface ContactInfo {
  address: string
  phone: string
  whatsapp: string
  email: string
  hours: {
    weekday: string
    weekend: string
  }
  mapUrl: string
  social: {
    instagram: string
    facebook: string
  }
}

export interface CakeType {
  value: string
  label: string
}

export interface SizeOption {
  value: string
  label: string
  serves: string
  basePrice: string
}

export interface Occasion {
  value: string
  label: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

export interface TimelineItem {
  year: string
  title: string
  description: string
}
