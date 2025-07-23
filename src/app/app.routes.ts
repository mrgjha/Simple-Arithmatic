// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Sum } from './sum/sum';
import {Product} from './product/product';


export const routes: Routes = [
  { path: 'sum', component: Sum },
  { path: 'product', component: Product },
  { path: '', redirectTo: 'sum', pathMatch: 'full' },
];
