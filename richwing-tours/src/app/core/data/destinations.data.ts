import { Destination } from '../models/destination.model';

export const DESTINATIONS: Destination[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    summary: 'Ancient rock fortress, royal gardens, and sweeping views over Sri Lanka.',
    image: { src: '/images/others/4.jpg', alt: 'Sigiriya' },
    description:
      "Sigiriya, known as the 'Eighth Wonder of the World,' takes you on a journey through Sri Lanka's history and stunning scenery. Climb to the top to see King Kasyapa's ancient palace ruins and marvel at the incredible engineering from 1,500 years ago. Explore the beautiful frescoes of the Sigiriya Damsels and walk through the peaceful Water Gardens below. Whether you love history or nature, Sigiriya offers an unforgettable experience.",
    detailImages: [
      { src: '/images/others/13.jpg', alt: 'Sigiriya palace ruins and rock fortress' },
      { src: '/images/others/4.jpg', alt: 'Sigiriya landscape view' }
    ],
    externalLinks: [{ label: 'sigiriyafortress.com', url: 'https://sigiriyafortress.com/' }]
  },
  {
    id: 'kandy',
    name: 'Kandy',
    summary: 'A cultural capital known for sacred heritage, hill scenery, and tradition.',
    image: { src: '/images/others/5.jpg', alt: 'Kandy' },
    description:
      'Kandy, nestled in the heart of Sri Lanka, is a city of rich culture and scenic beauty. Explore the revered Temple of the Tooth Relic, stroll around the serene Kandy Lake, and wander through lush botanical gardens. Immerse yourself in traditional dance performances and savor authentic Sri Lankan cuisine. With its cool climate and charming ambiance, Kandy offers a delightful escape for travelers seeking cultural experiences and natural wonders.',
    detailImages: [
      { src: '/images/others/14.jpg', alt: 'Kandy scenic landscape' },
      { src: '/images/others/5.jpg', alt: 'Kandy cultural destination' }
    ],
    externalLinks: [
      { label: 'kandyesalaperahera.com', url: 'https://kandyesalaperahera.com/' },
      { label: 'kandyescapes.com', url: 'https://www.kandyescapes.com/' }
    ]
  },
  {
    id: 'ella',
    name: 'Ella',
    summary: 'Lush tea country, mountain trails, waterfalls, and relaxed village charm.',
    image: { src: '/images/others/7.jpg', alt: 'Ella' },
    description:
      'Ella, a charming hill town in Sri Lanka, captivates visitors with its breathtaking views and laid-back atmosphere. Hike to Ella Rock for panoramic vistas, marvel at the iconic Nine Arch Bridge, and unwind amidst verdant tea plantations. Explore quaint cafes, savor local delicacies, and immerse yourself in the warmth of Sri Lankan hospitality. With its cool climate and tranquil surroundings, Ella is a perfect retreat for nature lovers and adventure seekers alike.',
    detailImages: [
      { src: '/images/others/16.jpg', alt: 'Ella hill country view' },
      { src: '/images/others/15.jpg', alt: 'Ella railway and nature scenery' }
    ],
    externalLinks: [{ label: 'visitella.com', url: 'https://www.visitella.com/' }]
  },
  {
    id: 'galle',
    name: 'Galle',
    summary: 'A coastal gem with colonial streets, ocean views, and historic fort walls.',
    image: { src: '/images/others/9.jpg', alt: 'Galle' },
    description:
      'Galle, a coastal gem in Sri Lanka, enchants visitors with its historic charm and picturesque beauty. Explore the cobbled streets of Galle Fort, a UNESCO World Heritage Site, lined with colonial-era buildings and boutique shops. Admire the iconic Dutch Reformed Church and walk along the fortified walls for stunning ocean views. Discover vibrant markets, dine on fresh seafood, and relax on pristine beaches. With its blend of history and coastal allure, Galle offers a memorable experience for travelers seeking culture and relaxation.',
    detailImages: [{ src: '/images/others/9.jpg', alt: 'Galle coastal destination' }],
    externalLinks: [{ label: 'gallefort.lk', url: 'https://www.gallefort.lk/' }]
  },
  {
    id: 'mirissa',
    name: 'Mirissa',
    summary: 'Golden beaches, whale watching, surf, and calm tropical evenings.',
    image: { src: '/images/others/8.jpg', alt: 'Mirissa' },
    description:
      'Mirissa, a coastal paradise in Sri Lanka, beckons with its golden sands and azure waters. Known for its vibrant beach culture and excellent surfing spots, Mirissa attracts surf enthusiasts from around the world. Catch thrilling waves or unwind on the palm-fringed shores. Embark on a whale watching excursion to spot majestic marine creatures or simply soak up the laid-back atmosphere. With its relaxed vibe and natural beauty, Mirissa promises a memorable beach getaway for travelers seeking sun, surf, and serenity.',
    detailImages: [
      { src: '/images/others/17.jpg', alt: 'Mirissa beach scenery' },
      { src: '/images/others/18.jpg', alt: 'Mirissa coastal view' }
    ],
    externalLinks: [{ label: 'saltinourhair.com', url: 'https://www.saltinourhair.com/sri-lanka/mirissa/' }]
  },
  {
    id: 'yala',
    name: 'Yala National Park',
    summary: 'Wildlife safaris through landscapes known for leopards, birds, and elephants.',
    image: { src: '/images/others/10.jpg', alt: 'Yala National Park' },
    description:
      'Yala National Park, located in Sri Lanka, is a haven for wildlife enthusiasts and nature lovers. Home to diverse ecosystems and abundant wildlife, including majestic elephants and elusive leopards, Yala offers thrilling safari experiences. Embark on an exhilarating jeep safari to spot these magnificent creatures in their natural habitat. Capture stunning wildlife moments through your lens with exciting opportunities for wildlife photography. Immerse yourself in the wilderness and witness the beauty of nature unfold before your eyes. With its rich biodiversity and captivating landscapes, Yala National Park promises an unforgettable safari adventure.',
    detailImages: [
      { src: '/images/others/20.jpg', alt: 'Yala wildlife safari landscape' },
      { src: '/images/others/21.jpg', alt: 'Yala National Park nature scene' },
      { src: '/images/others/19.jpg', alt: 'Yala safari experience' }
    ],
    externalLinks: [{ label: 'yalasrilanka.lk', url: 'https://www.yalasrilanka.lk/' }]
  }
];

export const DESTINATIONS_CLOSING_SECTION = {
  title: 'Explore Sri Lanka: Beyond the Destinations',
  description:
    'We believe that Sri Lanka is not just a destination but a journey of discovery. Beyond the enchanting locales of Sigiriya, Kandy, Ella, Galle, Mirissa, and Yala, Sri Lanka offers a tapestry of experiences waiting to be explored. From the sacred city of Anuradhapura to the charming beaches of Unawatuna, from the cultural richness of Polonnaruwa to the tranquil hills of Nuwara Eliya, every corner of this island nation beckons with its unique allure. Whether you seek ancient heritage sites, pristine beaches, lush tea plantations, or vibrant city life, Sri Lanka promises an unforgettable adventure. Let us be your guide as you embark on a journey to discover the wonders of this captivating land.'
};
