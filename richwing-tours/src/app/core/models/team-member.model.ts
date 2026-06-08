import { Asset } from './asset.model';
import { SocialLink } from './social-link.model';

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  image: Asset;
  socialLinks?: SocialLink[];
}
