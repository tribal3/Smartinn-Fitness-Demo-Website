export const BUSINESS = {
  nameEn: 'SMARTINN FITNESS',
  phoneDisplay: '0334 7779064',
  phoneHref: 'tel:+923347779064',
  whatsappDisplay: '0334 7779064',
  whatsappNumber: '923347779064',
  addressEn:
    '1/1A, Shahrah-e-Faisal Service Rd S, PECHS Extension Block 6, Karachi, Pakistan',
  shortAddress: 'Shahrah-e-Faisal, PECHS Block 6',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Smartinn+Fitness+Shahrah-e-Faisal+Service+Rd+S+PECHS+Extension+Block+6+Karachi',
  instagram: 'https://www.instagram.com/smartinnfitness',
  facebook: 'https://www.facebook.com/smartinnfitness',
  hours: 'Open 24/7',
  ladiesHours: 'Ladies-only 11 AM – 4 PM',
} as const

export const WHATSAPP_BASE = `https://wa.me/${BUSINESS.whatsappNumber}`

/** Build a WhatsApp deep link with a pre-filled message. */
export const wa = (message: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`

export const IMAGES = {
  hero: '/images/smartinn-floor.webp',
  about: '/images/smartinn-gym-1.jpg',
  aboutDetail: '/images/smartinn-gym-5.jpg',
  strengthZone: '/images/smartinn-gym-2.jpg',
  functional: '/images/smartinn-gym-3.jpg',
  strength: '/images/smartinn-gym-4.jpg',
  cardio: '/images/smartinn-floor.webp',
  goals: '/images/smartinn-gym-1.jpg',
  guidance: '/images/smartinn-gym-2.jpg',
  gallery: [
    { src: '/images/smartinn-floor.webp', w: 2560, h: 1920 },
    { src: '/images/smartinn-gym-1.jpg', w: 872, h: 1162 },
    { src: '/images/smartinn-gym-2.jpg', w: 872, h: 1163 },
    { src: '/images/smartinn-gym-3.jpg', w: 872, h: 1163 },
    { src: '/images/smartinn-gym-4.jpg', w: 872, h: 1163 },
    { src: '/images/smartinn-gym-5.jpg', w: 872, h: 654 },
  ],
}

export const galleryImage = (src: string) => src
