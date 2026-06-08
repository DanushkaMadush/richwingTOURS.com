import { Component, Input } from '@angular/core';

import { Destination } from '../../../core/models/destination.model';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.html',
  styleUrl: './destination-card.scss'
})
export class DestinationCardComponent {
  @Input({ required: true }) destination!: Destination;
}
