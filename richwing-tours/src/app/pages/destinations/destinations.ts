import { Component } from '@angular/core';

import { DESTINATIONS, DESTINATIONS_CLOSING_SECTION } from '../../core/data/destinations.data';
import { DestinationDetailComponent } from '../../shared/components/destination-detail/destination-detail';
import { DestinationGridComponent } from '../../shared/components/destination-grid/destination-grid';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-destinations-page',
  imports: [PageHeaderComponent, SectionHeadingComponent, DestinationGridComponent, DestinationDetailComponent],
  templateUrl: './destinations.html',
  styleUrl: './destinations.scss'
})
export class DestinationsPageComponent {
  protected readonly destinations = DESTINATIONS;
  protected readonly closingSection = DESTINATIONS_CLOSING_SECTION;
}
