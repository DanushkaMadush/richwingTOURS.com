import { Asset } from './asset.model';

export interface DestinationLink {
  label: string;
  url: string;
}

export interface Destination {
  id: string;
  name: string;
  summary: string;
  image: Asset;
  description?: string;
  detailImages?: Asset[];
  externalLinks?: DestinationLink[];
}
