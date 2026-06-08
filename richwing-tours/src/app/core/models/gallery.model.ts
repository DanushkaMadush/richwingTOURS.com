import { Asset } from './asset.model';

export interface GalleryImage {
  id: string;
  image: Asset;
  category?: string;
}
