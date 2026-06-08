import { Destination } from '../models/destination.model';

export const DESTINATIONS: Destination[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    summary: 'Ancient rock fortress, royal gardens, and sweeping views over Sri Lanka.',
    image: { src: '/images/others/4.jpg', alt: 'Sigiriya' }
  },
  {
    id: 'kandy',
    name: 'Kandy',
    summary: 'A cultural capital known for sacred heritage, hill scenery, and tradition.',
    image: { src: '/images/others/5.jpg', alt: 'Kandy' }
  },
  {
    id: 'ella',
    name: 'Ella',
    summary: 'Lush tea country, mountain trails, waterfalls, and relaxed village charm.',
    image: { src: '/images/others/7.jpg', alt: 'Ella' }
  },
  {
    id: 'galle',
    name: 'Galle',
    summary: 'A coastal gem with colonial streets, ocean views, and historic fort walls.',
    image: { src: '/images/others/9.jpg', alt: 'Galle' }
  },
  {
    id: 'mirissa',
    name: 'Mirissa',
    summary: 'Golden beaches, whale watching, surf, and calm tropical evenings.',
    image: { src: '/images/others/8.jpg', alt: 'Mirissa' }
  },
  {
    id: 'yala',
    name: 'Yala National Park',
    summary: 'Wildlife safaris through landscapes known for leopards, birds, and elephants.',
    image: { src: '/images/others/10.jpg', alt: 'Yala National Park' }
  }
];
