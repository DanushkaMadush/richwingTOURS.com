import { Component } from '@angular/core';

import { PageHeaderComponent } from '../../shared/components/page-header/page-header';

@Component({
  selector: 'app-about-page',
  imports: [PageHeaderComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutPageComponent {}
