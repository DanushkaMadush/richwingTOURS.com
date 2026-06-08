import { Component } from '@angular/core';

import { DESTINATIONS } from '../../core/data/destinations.data';
import { DestinationGridComponent } from '../../shared/components/destination-grid/destination-grid';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';

@Component({
  selector: 'app-destinations-page',
  imports: [PageHeaderComponent, DestinationGridComponent],
  templateUrl: './destinations.html',
  styleUrl: './destinations.scss'
})
export class DestinationsPageComponent {
  protected readonly destinations = DESTINATIONS;
}
