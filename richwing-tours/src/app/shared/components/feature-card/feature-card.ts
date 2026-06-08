import { Component, Input } from '@angular/core';

import { Feature } from '../../../core/models/feature.model';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.scss'
})
export class FeatureCardComponent {
  @Input({ required: true }) feature!: Feature;
}
