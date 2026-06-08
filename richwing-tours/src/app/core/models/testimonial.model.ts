import { Asset } from './asset.model';

export interface Testimonial {
  id: string;
  name: string;
  message: string;
  designation?: string;
  image?: Asset;
}
