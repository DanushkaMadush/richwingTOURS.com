import { Component, Input } from '@angular/core';

import { TourPackage } from '../../../core/models/package.model';
import { PackageCardComponent } from '../package-card/package-card';

@Component({
  selector: 'app-package-grid',
  imports: [PackageCardComponent],
  templateUrl: './package-grid.html',
  styleUrl: './package-grid.scss'
})
export class PackageGridComponent {
  @Input() packages: TourPackage[] = [];
}
