import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DESTINATIONS } from '../../core/data/destinations.data';
import { FEATURES } from '../../core/data/features.data';
import { HOME_ABOUT_INTRO, HOME_HERO_SLIDES, HOME_HONEYMOON_OFFER } from '../../core/data/home.data';
import { SERVICES } from '../../core/data/services.data';
import { TEAM_MEMBERS } from '../../core/data/team.data';
import { TESTIMONIALS } from '../../core/data/testimonials.data';
import { DestinationGridComponent } from '../../shared/components/destination-grid/destination-grid';
import { FeatureGridComponent } from '../../shared/components/feature-grid/feature-grid';
import { GuideGridComponent } from '../../shared/components/guide-grid/guide-grid';
import { HeroCarouselComponent } from '../../shared/components/hero-carousel/hero-carousel';
import { OfferBannerComponent } from '../../shared/components/offer-banner/offer-banner';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading';
import { ServiceGridComponent } from '../../shared/components/service-grid/service-grid';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink,
    HeroCarouselComponent,
    SectionHeadingComponent,
    FeatureGridComponent,
    DestinationGridComponent,
    ServiceGridComponent,
    OfferBannerComponent,
    GuideGridComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomePageComponent {
  protected readonly heroSlides = HOME_HERO_SLIDES;
  protected readonly aboutIntro = HOME_ABOUT_INTRO;
  protected readonly features = FEATURES;
  protected readonly destinationPreview = DESTINATIONS;
  protected readonly servicePreview = SERVICES.slice(0, 3);
  protected readonly offer = HOME_HONEYMOON_OFFER;
  protected readonly teamMembers = TEAM_MEMBERS;
  protected readonly testimonials = TESTIMONIALS;
}
