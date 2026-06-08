import { Component } from '@angular/core';

import { SERVICES } from '../../core/data/services.data';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading';
import { ServiceGridComponent } from '../../shared/components/service-grid/service-grid';

@Component({
  selector: 'app-services-page',
  imports: [PageHeaderComponent, SectionHeadingComponent, ServiceGridComponent],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesPageComponent {
  protected readonly services = SERVICES;
}
