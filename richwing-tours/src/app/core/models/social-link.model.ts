export type SocialPlatform = 'facebook' | 'tripadvisor' | 'whatsapp' | 'instagram' | 'twitter' | 'linkedin';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
  iconClass: string;
  title?: string;
}
