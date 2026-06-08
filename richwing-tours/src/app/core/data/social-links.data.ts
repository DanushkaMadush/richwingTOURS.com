import { SocialLink } from '../models/social-link.model';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'facebook',
    label: 'Facebook',
    title: 'Richwing Tours on Facebook',
    url: 'https://web.facebook.com/www.richwingtours',
    iconClass: 'fa fa-facebook-f'
  },
  {
    platform: 'tripadvisor',
    label: 'TripAdvisor',
    title: 'Rich Wing Tours on TripAdvisor',
    url: 'https://www.tripadvisor.co.uk/Attraction_Review-g1500185-d20934569-Reviews-Rich_Wing_Tours-Katunayake_Negombo_Western_Province.html',
    iconClass: 'fa fa-tripadvisor'
  },
  {
    platform: 'whatsapp',
    label: 'WhatsApp',
    title: 'Message Richwing Tours on WhatsApp',
    url: 'https://wa.me/+94771185615',
    iconClass: 'fa fa-whatsapp'
  },
  {
    platform: 'instagram',
    label: 'Instagram',
    title: 'Richwing Tours on Instagram',
    url: 'https://www.instagram.com/rich.wingtours/',
    iconClass: 'fa fa-instagram'
  }
];
