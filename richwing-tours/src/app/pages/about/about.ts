import { Component } from '@angular/core';

import { ABOUT_STORY_SECTIONS } from '../../core/data/about.data';
import { FEATURES } from '../../core/data/features.data';
import { GALLERY_IMAGES } from '../../core/data/gallery.data';
import { HOME_ABOUT_INTRO } from '../../core/data/home.data';
import { FeatureGridComponent } from '../../shared/components/feature-grid/feature-grid';
import { GalleryGridComponent } from '../../shared/components/gallery-grid/gallery-grid';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-about-page',
  imports: [PageHeaderComponent, SectionHeadingComponent, FeatureGridComponent, GalleryGridComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutPageComponent {
  protected readonly aboutIntro = HOME_ABOUT_INTRO;
  protected readonly features = FEATURES;
  protected readonly storySections = ABOUT_STORY_SECTIONS;
  protected readonly galleryImages = GALLERY_IMAGES;

  // TODO: The legacy guide cards use placeholder names/designations, so the About guide section is intentionally hidden until real guide content is available.
  protected readonly showTravelGuides = false;
}
