import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react'

export type Lang = 'en'

const en = {
  meta: {
    title: 'Smartinn Fitness — Premium 24/7 Gym in PECHS, Karachi',
    description:
      'Smartinn Fitness is a 24/7 gym on Shahrah-e-Faisal, PECHS Block 6, Karachi. Strength and cardio floor, signature classes, personal training, steam and showers. Call or WhatsApp 0334 7779064.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    experiences: 'Facilities',
    training: 'Training',
    classes: 'Classes',
    membership: 'Membership',
    gallery: 'Gallery',
    contact: 'Contact',
  },
  actions: {
    join: 'Join Us',
    call: 'Call Now',
    whatsapp: 'WhatsApp Us',
    directions: 'Get Directions',
    explore: 'Explore The Gym',
    contact: 'Contact Us',
    retry: 'Open WhatsApp',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    scroll: 'Scroll to explore',
  },
  hero: {
    badge: 'Shahrah-e-Faisal · PECHS Block 6, Karachi',
    titleTop: 'Train Smart.',
    titleAccent: 'Stay Strong.',
    text: 'A premium 24/7 gym on Shahrah-e-Faisal — strength, cardio, signature classes and recovery, all under one roof.',
    hoursValue: '24/7',
    hoursLabel: 'Open every day',
    optionsValue: '11 AM – 4 PM',
    optionsLabel: 'Ladies-only hours',
    locationValue: 'PECHS Block 6',
    locationLabel: 'Shahrah-e-Faisal, Karachi',
    imageAlt:
      'Cardio floor at Smartinn Fitness with Life Fitness treadmills, a NordicTrack bike and a green turf lane, PECHS Karachi',
  },
  marquee: ['Strength', 'Cardio', 'Classes', 'Recovery'],
  about: {
    eyebrow: 'About Smartinn Fitness',
    index: '01',
    title: 'A premium gym, open around the clock.',
    text: 'Smartinn Fitness brings internationally branded equipment, certified trainers and signature studios to Shahrah-e-Faisal. Train on your schedule — the doors stay open 24/7.',
    points: [
      'Open 24/7, with ladies-only hours 11 AM – 4 PM daily',
      'Internationally branded strength and cardio equipment',
      'Signature group classes and one-to-one coaching',
      'Steam, hot showers, lockers and changing rooms',
      'On Shahrah-e-Faisal Service Rd S, PECHS Extension Block 6',
    ],
    cardTitle: 'Discipline beats motivation',
    cardText: 'Show up, put the work in and let the results follow.',
    badgeTitle: 'Open 24/7',
    badgeText: 'Every day of the week',
    imageAlt: 'Training floor at Smartinn Fitness in PECHS, Karachi',
    caption: 'Smartinn Fitness · PECHS Block 6',
  },
  experiences: {
    eyebrow: 'The Experience',
    index: '02',
    title: 'Train. Recover. Repeat.',
    text: 'A complete training floor and a proper recovery space — everything you need under one roof.',
    strength: {
      label: 'Training Floor',
      tag: 'Strength + Cardio',
      desc: 'A full strength floor, Life Fitness treadmills, a NordicTrack bike and a green turf lane for conditioning.',
      tags: ['Strength machines & free weights', 'Life Fitness cardio', 'Green turf lane'],
      cta: 'Ask About The Gym',
      imageAlt: 'Strength and cardio equipment at Smartinn Fitness',
    },
    functional: {
      label: 'Wellness & Recovery',
      tag: 'Recover',
      desc: 'Steam, sauna, jacuzzi and cold plunge, plus hot showers, towels and changing rooms.',
      tags: ['Steam & sauna', 'Jacuzzi & cold plunge', 'Hot showers & towels'],
      cta: 'Ask About Recovery',
      imageAlt: 'Wellness and recovery facilities at Smartinn Fitness',
    },
    note: 'Facilities and access vary by package — confirm current inclusions on WhatsApp.',
  },
  training: {
    eyebrow: 'Training',
    index: '03',
    title: 'Training for the goals you actually have.',
    text: 'From your first session to your next personal best, find the training that fits your routine.',
    items: [
      {
        title: 'Strength Training',
        desc: 'Build and maintain strength with free weights and a full resistance-training floor.',
        icon: 'dumbbell',
      },
      {
        title: 'Cardio & Endurance',
        desc: 'Life Fitness treadmills, a NordicTrack bike and an indoor turf lane for conditioning.',
        icon: 'heart',
      },
      {
        title: 'Personal Training',
        desc: 'Work one-to-one with internationally certified trainers and a plan built around your goals.',
        icon: 'target',
      },
      {
        title: 'Wellness & Recovery',
        desc: 'Finish with steam, sauna or a hot shower — recovery is part of the programme.',
        icon: 'flame',
      },
    ],
    note: 'Equipment and facilities may vary by package — contact the gym to confirm current access.',
  },
  classes: {
    eyebrow: 'Classes & Coaching',
    index: '04',
    title: 'Signature classes. Certified coaches.',
    text: 'Group classes and one-to-one coaching in dedicated studios — led by internationally certified trainers.',
    items: [
      {
        label: 'Signature Group Classes',
        desc: 'Coach-led sessions across strength, cardio and mobility in our dedicated studios.',
      },
      {
        label: 'Personal Training',
        desc: 'One-to-one coaching, fitness testing and a plan built around your goals.',
      },
      {
        label: 'Progress Assessments',
        desc: 'Pre- and post-training checks to track how far you have come.',
      },
    ],
    asideEyebrow: 'Ladies-only hours',
    asideTitle: 'Train on your terms.',
    asideText:
      'Train comfortably every day, 11 AM to 4 PM. Ask us for the current class timetable.',
    cta: 'Ask About Classes',
    note: 'Class formats and timings change — message us on WhatsApp for the current schedule.',
  },
  membership: {
    eyebrow: 'Membership',
    index: '05',
    title: 'Simple packages. Flexible training.',
    text: 'Two monthly options, Silver and Golden. Published rates start at Rs 10,000; confirm current pricing and availability with the team.',
    plans: [
      {
        name: 'Silver',
        tag: 'Gym access',
        price: 'From Rs 10,000',
        period: '/ month',
        desc: 'Everything you need for a complete training session.',
        features: ['Strength & cardio floor', 'Locker rooms & showers', 'Parking access'],
        cta: 'Enquire About Silver',
      },
      {
        name: 'Golden',
        tag: 'Gym + recovery',
        price: 'Rs 22,700',
        period: '/ month',
        desc: 'Add recovery to your training with steam and hot showers.',
        features: ['Everything in Silver', 'Steam room access', 'Hot showers'],
        cta: 'Enquire About Golden',
      },
    ],
    extrasTitle: 'Optional extras',
    extras: ['Steam session — Rs 1,500', 'Locker — Rs 1,200 / month'],
    note: 'Indicative published rates — final pricing, inclusions and availability are confirmed by Smartinn Fitness. Steam is already included in Golden.',
  },
  gallery: {
    eyebrow: 'Gallery',
    index: '06',
    title: 'Inside Smartinn Fitness.',
    text: 'Genuine photos from the training floor and cardio area.',
    note: 'Photos from Smartinn Fitness, PECHS Block 6, Karachi.',
    alts: [
      'Cardio and turf training floor at Smartinn Fitness',
      'Inside Smartinn Fitness in PECHS, Karachi',
      'Training space at Smartinn Fitness',
      'Gym interior at Smartinn Fitness',
      'Equipment at Smartinn Fitness',
      'Smartinn Fitness facility in PECHS, Karachi',
    ],
    view: 'View image',
    close: 'Close',
    prev: 'Previous image',
    next: 'Next image',
  },
  why: {
    eyebrow: 'Why Smartinn Fitness',
    index: '07',
    title: 'Built for the long run.',
    text: 'Premium equipment, certified coaching and round-the-clock access on Shahrah-e-Faisal.',
    items: [
      {
        title: 'Open 24 hours, every day',
        desc: 'Early shift or late night — train when it suits you.',
      },
      {
        title: 'Ladies-only hours',
        desc: 'A dedicated daily window, 11 AM to 4 PM, to train comfortably.',
      },
      {
        title: 'Premium equipment',
        desc: 'Internationally branded machines, Life Fitness cardio and a green turf lane.',
      },
      {
        title: 'Corporate wellness',
        desc: 'Employee memberships and executive plan discounts for teams nearby.',
      },
    ],
    hoursLabel: 'Opening Hours',
    hoursValue: '24/7',
    hoursCaption: 'Open every day of the week.',
    hoursNote: 'Ladies-only hours 11 AM – 4 PM daily.',
    hoursSub: 'Steam, showers, lockers & changing rooms.',
  },
  hours: {
    eyebrow: 'Opening Hours',
    title: 'Open 24/7. Train on your schedule.',
    text: 'Doors stay open around the clock. Ladies-only hours run daily, 11 AM to 4 PM. Call or WhatsApp before your first visit.',
  },
  contact: {
    eyebrow: 'Contact',
    index: '08',
    title: 'Come train with us.',
    text: 'Questions about membership, classes or your first visit? Message us on WhatsApp or give us a call — we are open 24/7.',
    labels: {
      address: 'Address',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      hours: 'Hours',
      directions: 'Directions',
    },
    locationTitle: 'Find us on Shahrah-e-Faisal, PECHS Block 6',
    locationText:
      '1/1A, Shahrah-e-Faisal Service Rd S, PECHS Extension Block 6, Karachi. Open the listing in Google Maps for turn-by-turn directions.',
    locationChip: 'PECHS Block 6',
    form: {
      title: 'Membership Enquiry',
      subtitle: 'Fill in your details and the enquiry opens in WhatsApp, ready to send.',
      name: 'Full Name',
      namePlaceholder: 'Your name',
      phone: 'Phone Number',
      phonePlaceholder: '03XX XXXXXXX',
      interest: 'Interested In',
      interestMembership: 'Gym Membership',
      interestTraining: 'Personal Training & Classes',
      message: 'Message',
      messagePlaceholder: 'Tell us what you’re looking for (optional)',
      send: 'Send Enquiry',
      required: '* Required fields',
      errorName: 'Please enter your full name.',
      errorPhone: 'Please enter your phone number.',
      errorPhoneInvalid: 'Please enter a valid phone number.',
      errorInterest: 'Please choose an option.',
      successTitle: 'Your enquiry is ready',
      successText:
        'WhatsApp should have opened with your message ready to send. If it didn’t, use the button below.',
      sendAnother: 'Send another enquiry',
      privacy:
        'Your details are only used to create this WhatsApp message — nothing is stored on this website.',
    },
  },
  footer: {
    tagline:
      'A premium 24/7 fitness space on Shahrah-e-Faisal, PECHS Block 6, Karachi.',
    explore: 'Explore',
    contact: 'Contact',
    follow: 'Follow',
    rights: '© 2026 Smartinn Fitness. All rights reserved.',
    credit: 'Website concept — TRIBAL³',
  },
  whatsappMessages: {
    general:
      'Hello Smartinn Fitness, I found your website and would like to ask about membership.',
    strength:
      'Hello Smartinn Fitness, I would like to ask about the training floor and equipment.',
    recovery:
      'Hello Smartinn Fitness, I would like to ask about wellness and recovery facilities.',
    classes: 'Hello Smartinn Fitness, I would like to ask about the class schedule.',
    membership: 'Hello Smartinn Fitness, I would like to ask about membership packages.',
    silver: 'Hello Smartinn Fitness, I would like to enquire about the Silver membership.',
    golden: 'Hello Smartinn Fitness, I would like to enquire about the Golden membership.',
    join: 'Hello Smartinn Fitness, I would like to join. Could you share the available membership options?',
  },
  floatingWhatsapp: 'Chat on WhatsApp',
}

export const copy = { en }
export type Copy = typeof en

interface LanguageContextValue {
  lang: Lang
  dir: 'ltr'
  isRtl: false
  t: Copy
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement
    root.lang = 'en'
    root.dir = 'ltr'
    root.dataset.lang = 'en'
    document.title = copy.en.meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', copy.en.meta.description)
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang: 'en', dir: 'ltr', isRtl: false, t: copy.en }),
    [],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
