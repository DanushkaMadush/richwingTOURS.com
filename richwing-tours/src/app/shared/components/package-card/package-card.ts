import { Component, Input } from '@angular/core';

import { TourPackage } from '../../../core/models/package.model';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.html',
  styleUrl: './package-card.scss'
})
export class PackageCardComponent {
  @Input({ required: true, alias: 'package' }) tourPackage!: TourPackage;
}
