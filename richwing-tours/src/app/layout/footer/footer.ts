import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faEnvelope, faLocationDot, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import { CONTACT_INFO } from '../../core/constants/contact.constants';
import { SOCIAL_LINKS } from '../../core/constants/social-links.constants';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links';

@Component({
  selector: 'app-footer',
  imports: [FaIconComponent, RouterLink, SocialLinksComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  protected readonly contact = CONTACT_INFO;
  protected readonly footerLinks = [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Tour Packages', path: '/packages' },
    { label: 'Customer Stories', path: '/', fragment: 'customer-stories' }
  ];
  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly angleIcon = faAngleRight;
  protected readonly locationIcon = faLocationDot;
  protected readonly phoneIcon = faPhoneAlt;
  protected readonly emailIcon = faEnvelope;
}
