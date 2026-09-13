import { Routes } from '@angular/router';
import { HomeP } from './pages/home-p/home-p';
import { AboutP } from './pages/about-p/about-p';
import { ContactP } from './pages/contact-p/contact-p';

export const routes: Routes = [
  {
    path: '', component: HomeP
  },
  {
    path: 'about', component: AboutP
  },
  {
    path: 'contact', component: ContactP
  },
  {
    path: '**', redirectTo: ''
  }
];
