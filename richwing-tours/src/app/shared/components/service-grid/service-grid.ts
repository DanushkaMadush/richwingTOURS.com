import { Component, Input } from '@angular/core';

import { TravelService } from '../../../core/models/service.model';
import { ServiceCardComponent } from '../service-card/service-card';

@Component({
  selector: 'app-service-grid',
  imports: [ServiceCardComponent],
  templateUrl: './service-grid.html',
  styleUrl: './service-grid.scss'
})
export class ServiceGridComponent {
  @Input() services: TravelService[] = [];
}
