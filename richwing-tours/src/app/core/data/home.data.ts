import { HeroSlide } from '../models/hero-slide.model';

export interface HomeAboutIntro {
  eyebrow: string;
  title: string;
  description: string;
  primaryImage: {
    src: string;
    alt: string;
  };
  supportingImages: {
    src: string;
    alt: string;
  }[];
}

export interface HomeOffer {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaPath: string;
}

export const HOME_HERO_SLIDES: HeroSlide[] = [
  {
    title: 'Adventure is worthwhile',
    subtitle: 'Create timeless memories across Sri Lanka with Richwing Tours.',
    image: { src: '/images/others/1.jpg', alt: 'Sri Lanka travel adventure' }
  },
  {
    title: 'Discover Wander Thrive',
    subtitle: 'Explore scenic beaches, hill country, culture, wildlife, and hidden local gems.',
    image: { src: '/images/others/2.jpg', alt: 'Sri Lanka scenic destination' }
  }
];

export const HOME_ABOUT_INTRO: HomeAboutIntro = {
  eyebrow: 'About Us',
  title: 'We Provide Best Tour Packages In Your Budget',
  description:
    "We're passionate about showcasing the beauty of Sri Lanka. From budget-friendly getaways to personalized adventures, our team creates journeys that balance comfort, local insight, and memorable experiences.",
  primaryImage: { src: '/images/others/3.jpg', alt: 'Richwing Tours Sri Lanka experience' },
  supportingImages: [
    { src: '/images/others/12.jpg', alt: 'Sri Lanka tour highlight' },
    { src: '/images/others/11.jpg', alt: 'Sri Lanka travel moment' }
  ]
};

export const HOME_HONEYMOON_OFFER: HomeOffer = {
  eyebrow: 'Mega Offer',
  title: '30% OFF For Honeymoon',
  description:
    'Embark on the journey of a lifetime with our exclusive honeymoon offer, thoughtfully planned for romance, comfort, and unforgettable Sri Lankan scenery.',
  ctaLabel: 'Book Now',
  ctaPath: '/contact'
};
