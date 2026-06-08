import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-offer-banner',
  imports: [RouterLink],
  templateUrl: './offer-banner.html',
  styleUrl: './offer-banner.scss'
})
export class OfferBannerComponent {
  @Input() eyebrow = 'Offer';
  @Input({ required: true }) title = '';
  @Input() description = '';
  @Input() ctaLabel = '';
  @Input() ctaPath = '/contact';
}
