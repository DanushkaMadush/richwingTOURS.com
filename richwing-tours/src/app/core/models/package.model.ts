import { Asset } from './asset.model';

export interface TourPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  people: string;
  image: Asset;
  price?: string;
  rating?: number;
  reviewCount?: number;
}
