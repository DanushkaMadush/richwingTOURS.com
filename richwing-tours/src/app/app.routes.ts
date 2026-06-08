import { Routes } from '@angular/router';

import { SiteLayoutComponent } from './layout/site-layout/site-layout';
import { AboutPageComponent } from './pages/about/about';
import { ContactPageComponent } from './pages/contact/contact';
import { DestinationsPageComponent } from './pages/destinations/destinations';
import { HomePageComponent } from './pages/home/home';
import { NotFoundPageComponent } from './pages/not-found/not-found';
import { PackagesPageComponent } from './pages/packages/packages';
import { ServicesPageComponent } from './pages/services/services';

export const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomePageComponent, title: 'Richwing Tours | Home' },
      { path: 'about', component: AboutPageComponent, title: 'About | Richwing Tours' },
      { path: 'destinations', component: DestinationsPageComponent, title: 'Destinations | Richwing Tours' },
      { path: 'services', component: ServicesPageComponent, title: 'Services | Richwing Tours' },
      { path: 'packages', component: PackagesPageComponent, title: 'Packages | Richwing Tours' },
      { path: 'contact', component: ContactPageComponent, title: 'Contact | Richwing Tours' },
      { path: '**', component: NotFoundPageComponent, title: 'Page Not Found | Richwing Tours' }
    ]
  }
];
