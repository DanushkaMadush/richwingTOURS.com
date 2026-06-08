import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type SocialPlatform = 'facebook' | 'tripadvisor' | 'whatsapp' | 'instagram' | 'twitter' | 'linkedin';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
  icon: IconDefinition;
  title?: string;
}
