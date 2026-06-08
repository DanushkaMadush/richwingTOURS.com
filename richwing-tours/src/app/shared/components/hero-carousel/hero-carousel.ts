import { Component, Input } from '@angular/core';

import { Asset } from '../../../core/models/asset.model';

export interface HeroSlide {
  title: string;
  subtitle?: string;
  image: Asset;
}

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.html',
  styleUrl: './hero-carousel.scss'
})
export class HeroCarouselComponent {
  @Input() slides: HeroSlide[] = [];
}
