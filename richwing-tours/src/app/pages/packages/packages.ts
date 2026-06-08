import { Component } from '@angular/core';

import { TOUR_PACKAGES } from '../../core/data/packages.data';
import { PackageGridComponent } from '../../shared/components/package-grid/package-grid';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-packages-page',
  imports: [PageHeaderComponent, SectionHeadingComponent, PackageGridComponent],
  templateUrl: './packages.html',
  styleUrl: './packages.scss'
})
export class PackagesPageComponent {
  protected readonly packages = TOUR_PACKAGES;
}
