import { Component } from '@angular/core';

import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-home-page',
  imports: [SectionHeadingComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomePageComponent {}
