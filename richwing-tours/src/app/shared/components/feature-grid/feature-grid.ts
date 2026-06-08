import { Component, Input } from '@angular/core';

import { Feature } from '../../../core/models/feature.model';
import { FeatureCardComponent } from '../feature-card/feature-card';

@Component({
  selector: 'app-feature-grid',
  imports: [FeatureCardComponent],
  templateUrl: './feature-grid.html',
  styleUrl: './feature-grid.scss'
})
export class FeatureGridComponent {
  @Input() features: Feature[] = [];
}
