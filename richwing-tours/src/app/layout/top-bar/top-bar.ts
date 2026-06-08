import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import { CONTACT_INFO } from '../../core/constants/contact.constants';
import { SOCIAL_LINKS } from '../../core/constants/social-links.constants';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links';

@Component({
  selector: 'app-top-bar',
  imports: [FaIconComponent, SocialLinksComponent],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss'
})
export class TopBarComponent {
  protected readonly contact = CONTACT_INFO;
  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly emailIcon = faEnvelope;
  protected readonly phoneIcon = faPhoneAlt;
}
