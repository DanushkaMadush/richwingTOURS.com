import { Component, Input } from '@angular/core';

import { TravelService } from '../../../core/models/service.model';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss'
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: TravelService;
}
