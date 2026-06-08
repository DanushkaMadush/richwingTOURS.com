import { TourPackage } from '../models/package.model';

export const TOUR_PACKAGES: TourPackage[] = [
  // TODO: Replace durations, capacity, prices, ratings, and review counts with confirmed Richwing Tours package data.
  {
    id: 'package-1',
    title: 'Cultural Sri Lanka Explorer',
    location: 'Cultural Triangle',
    duration: '5 Days',
    people: '2 People',
    description: 'Discover ancient cities, sacred temples, heritage sites, and local traditions with guided support.',
    image: { src: '/images/others/package-1.jpg', alt: 'Cultural Sri Lanka tour package' },
    ctaLabel: 'Book Now',
    ctaPath: '/contact',
    price: '$350',
    rating: 4.5,
    reviewCount: 250
  },
  {
    id: 'package-2',
    title: 'Hill Country Escape',
    location: 'Kandy & Ella',
    duration: '4 Days',
    people: '2 People',
    description: 'Travel through cool hills, tea plantations, waterfalls, scenic train routes, and relaxed mountain towns.',
    image: { src: '/images/others/package-2.jpg', alt: 'Hill country Sri Lanka tour package' },
    ctaLabel: 'Book Now',
    ctaPath: '/contact',
    price: '$350',
    rating: 4.5,
    reviewCount: 250
  },
  {
    id: 'package-3',
    title: 'Southern Coast Getaway',
    location: 'Galle & Mirissa',
    duration: '3 Days',
    people: '2 People',
    description: 'Enjoy beach time, coastal views, Galle Fort, whale watching options, and laid-back seaside stays.',
    image: { src: '/images/others/package-3.jpg', alt: 'Southern coast Sri Lanka tour package' },
    ctaLabel: 'Book Now',
    ctaPath: '/contact',
    price: '$350',
    rating: 4.5,
    reviewCount: 250
  },
  {
    id: 'package-4',
    title: 'Wildlife Safari Adventure',
    location: 'Yala National Park',
    duration: '3 Days',
    people: '2 People',
    description: 'Head into wild landscapes for safari drives, wildlife photography, and nature-focused experiences.',
    image: { src: '/images/others/package-4.jpg', alt: 'Yala wildlife safari tour package' },
    ctaLabel: 'Book Now',
    ctaPath: '/contact',
    price: '$350',
    rating: 4.5,
    reviewCount: 250
  },
  {
    id: 'package-5',
    title: 'Honeymoon Island Tour',
    location: 'Sri Lanka Highlights',
    duration: '6 Days',
    people: '2 People',
    description: 'A romantic island itinerary with scenic stays, beaches, gentle adventures, and private transfers.',
    image: { src: '/images/others/package-5.jpg', alt: 'Sri Lanka honeymoon tour package' },
    ctaLabel: 'Book Now',
    ctaPath: '/contact',
    price: '$350',
    rating: 4.5,
    reviewCount: 250
  },
  {
    id: 'package-6',
    title: 'Family Holiday Package',
    location: 'Islandwide Sri Lanka',
    duration: '7 Days',
    people: 'Family',
    description: 'A flexible family trip covering culture, nature, beaches, transport, and comfortable accommodations.',
    image: { src: '/images/others/package-6.jpg', alt: 'Sri Lanka family holiday tour package' },
    ctaLabel: 'Book Now',
    ctaPath: '/contact',
    price: '$350',
    rating: 4.5,
    reviewCount: 250
  }
];
