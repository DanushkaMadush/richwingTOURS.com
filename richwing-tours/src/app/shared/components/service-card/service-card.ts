import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TravelService } from '../../../core/models/service.model';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss'
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: TravelService;
}
