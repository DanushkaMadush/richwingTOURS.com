import { NavigationItem } from '../models/navigation.model';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Home', path: '/', visible: true, exact: true },
  { label: 'About', path: '/about', visible: true },
  { label: 'Services', path: '/services', visible: true },
  { label: 'Destinations', path: '/destinations', visible: true },
  { label: 'Packages', path: '/packages', visible: true },
  { label: 'Contact', path: '/contact', visible: true }
];
