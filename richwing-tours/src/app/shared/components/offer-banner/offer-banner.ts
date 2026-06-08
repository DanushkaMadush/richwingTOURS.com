import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-banner',
  templateUrl: './offer-banner.html',
  styleUrl: './offer-banner.scss'
})
export class OfferBannerComponent {
  @Input() eyebrow = 'Offer';
  @Input({ required: true }) title = '';
  @Input() description = '';
}
