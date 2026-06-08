import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BackToTopComponent } from '../back-to-top/back-to-top';
import { FooterComponent } from '../footer/footer';
import { NavbarComponent } from '../navbar/navbar';
import { TopBarComponent } from '../top-bar/top-bar';

@Component({
  selector: 'app-site-layout',
  imports: [RouterOutlet, TopBarComponent, NavbarComponent, FooterComponent, BackToTopComponent],
  templateUrl: './site-layout.html',
  styleUrl: './site-layout.scss'
})
export class SiteLayoutComponent {}
