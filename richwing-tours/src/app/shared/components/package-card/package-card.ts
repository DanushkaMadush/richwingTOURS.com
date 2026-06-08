import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TourPackage } from '../../../core/models/package.model';

@Component({
  selector: 'app-package-card',
  imports: [RouterLink],
  templateUrl: './package-card.html',
  styleUrl: './package-card.scss'
})
export class PackageCardComponent {
  @Input({ required: true, alias: 'package' }) tourPackage!: TourPackage;
}
