import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Destination } from '../../../core/models/destination.model';

@Component({
  selector: 'app-destination-card',
  imports: [RouterLink],
  templateUrl: './destination-card.html',
  styleUrl: './destination-card.scss'
})
export class DestinationCardComponent {
  @Input({ required: true }) destination!: Destination;
}
