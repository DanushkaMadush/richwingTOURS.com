import { Component } from '@angular/core';

import { CONTACT_INFO } from '../../core/constants/contact.constants';
import { SOCIAL_LINKS } from '../../core/constants/social-links.constants';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links';

@Component({
  selector: 'app-contact-page',
  imports: [PageHeaderComponent, SectionHeadingComponent, SocialLinksComponent, ContactFormComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactPageComponent {
  protected readonly contact = CONTACT_INFO;
  protected readonly socialLinks = SOCIAL_LINKS;
}
