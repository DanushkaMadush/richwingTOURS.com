import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CONTACT_INFO } from '../../core/constants/contact.constants';
import { SOCIAL_LINKS } from '../../core/constants/social-links.constants';
import { NAVIGATION_ITEMS } from '../../core/data/navigation.data';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, SocialLinksComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  protected readonly contact = CONTACT_INFO;
  protected readonly links = NAVIGATION_ITEMS.filter((item) => item.visible);
  protected readonly socialLinks = SOCIAL_LINKS;
}
