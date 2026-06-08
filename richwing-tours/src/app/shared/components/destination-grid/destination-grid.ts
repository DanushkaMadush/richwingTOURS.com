import { Component, Input } from '@angular/core';

import { Destination } from '../../../core/models/destination.model';
import { DestinationCardComponent } from '../destination-card/destination-card';

@Component({
  selector: 'app-destination-grid',
  imports: [DestinationCardComponent],
  templateUrl: './destination-grid.html',
  styleUrl: './destination-grid.scss'
})
export class DestinationGridComponent {
  @Input() destinations: Destination[] = [];
}
