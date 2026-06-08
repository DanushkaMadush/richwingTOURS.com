import { Component } from '@angular/core';

import { CONTACT_INFO } from '../../core/constants/contact.constants';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';

@Component({
  selector: 'app-contact-page',
  imports: [PageHeaderComponent, ContactFormComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactPageComponent {
  protected readonly contact = CONTACT_INFO;
}
