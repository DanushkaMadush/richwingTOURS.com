import { Asset } from './asset.model';

export interface TourPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  people: string;
  description: string;
  image: Asset;
  ctaLabel?: string;
  ctaPath?: string;
  price?: string;
  rating?: number;
  reviewCount?: number;
}
