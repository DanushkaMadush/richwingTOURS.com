import { Component, Input } from '@angular/core';

import { Destination } from '../../../core/models/destination.model';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.html',
  styleUrl: './destination-detail.scss'
})
export class DestinationDetailComponent {
  @Input({ required: true }) destination!: Destination;
}
