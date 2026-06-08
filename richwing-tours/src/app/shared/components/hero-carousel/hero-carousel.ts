import { Component, Input, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HeroSlide } from '../../../core/models/hero-slide.model';

@Component({
  selector: 'app-hero-carousel',
  imports: [RouterLink],
  templateUrl: './hero-carousel.html',
  styleUrl: './hero-carousel.scss'
})
export class HeroCarouselComponent {
  @Input() slides: HeroSlide[] = [];
  @Input() ctaLabel = 'Book Now';
  @Input() ctaPath = '/contact';

  protected readonly activeIndex = signal(0);
  protected readonly activeSlide = computed(() => this.slides[this.activeIndex()] ?? this.slides[0]);

  protected goTo(index: number): void {
    this.activeIndex.set(index);
  }

  protected next(): void {
    if (!this.slides.length) {
      return;
    }

    this.activeIndex.update((index) => (index + 1) % this.slides.length);
  }

  protected previous(): void {
    if (!this.slides.length) {
      return;
    }

    this.activeIndex.update((index) => (index - 1 + this.slides.length) % this.slides.length);
  }
}
