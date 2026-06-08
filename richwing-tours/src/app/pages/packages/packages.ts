import { Component } from '@angular/core';

import { TOUR_PACKAGES } from '../../core/data/packages.data';
import { PackageGridComponent } from '../../shared/components/package-grid/package-grid';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';

@Component({
  selector: 'app-packages-page',
  imports: [PageHeaderComponent, PackageGridComponent],
  templateUrl: './packages.html',
  styleUrl: './packages.scss'
})
export class PackagesPageComponent {
  protected readonly packages = TOUR_PACKAGES;
}
