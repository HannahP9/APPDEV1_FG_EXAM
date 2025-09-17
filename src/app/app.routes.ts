import { Routes } from '@angular/router';
import { ProductList } from './product-list';
import { Cart } from './cart';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProductList }, 
  { path: 'product-list', component: ProductList },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Cart } 
];