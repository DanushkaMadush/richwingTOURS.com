import { Component, Input } from '@angular/core';

import { SocialLink } from '../../../core/models/social-link.model';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss'
})
export class SocialLinksComponent {
  @Input() links: SocialLink[] = [];
  @Input() variant: 'inline' | 'icons' | 'buttons' = 'inline';
}
