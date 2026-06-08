import { TravelService } from '../models/service.model';

export const SERVICES: TravelService[] = [
  { id: 'travel-guide', title: 'Travel Guide', description: 'Expert guidance for your travels.', icon: 'Route', ctaLabel: 'Book Now', ctaPath: '/contact' },
  { id: 'hotels', title: 'Hotel Accommodations', description: 'Book hotels hassle-free.', icon: 'Stay', ctaLabel: 'Book Now', ctaPath: '/contact' },
  { id: 'transportation', title: 'Transportation Services', description: 'Efficient transportation solutions.', icon: 'Ride', ctaLabel: 'Book Now', ctaPath: '/contact' },
  { id: 'adventure', title: 'Adventure Activities', description: 'Exciting adventures await.', icon: 'Wild', ctaLabel: 'Book Now', ctaPath: '/contact' },
  { id: 'culture', title: 'Cultural Experience', description: 'Immerse in cultural richness.', icon: 'Lore', ctaLabel: 'Book Now', ctaPath: '/contact' },
  { id: 'sightseeing', title: 'Sightseeing Tours', description: 'Discover iconic sights.', icon: 'View', ctaLabel: 'Book Now', ctaPath: '/contact' },
  { id: 'groups', title: 'Group Tours', description: 'Join memorable group tours.', icon: 'Crew', ctaLabel: 'Book Now', ctaPath: '/contact' },
  { id: 'events', title: 'Special Events and Festivals', description: 'Celebrate local festivities.', icon: 'Fest', ctaLabel: 'Book Now', ctaPath: '/contact' },
  { id: 'assistance', title: 'Personalized Assistance', description: 'Tailored support for your journey.', icon: 'Care', ctaLabel: 'Book Now', ctaPath: '/contact' }
];
