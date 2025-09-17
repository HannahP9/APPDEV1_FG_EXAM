import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ProductList } from './product-list'; // import your product list

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ProductList],
  template: `
   <header class="header">
  <nav class="nav">
    <a routerLink="/product-list">Products</a>
    <a routerLink="/cart">Cart</a>
  </nav>
</header>

<main class="container">
  <router-outlet></router-outlet>
</main>

<footer class="footer">
  <p>2025 Hannah Palot. All rights reserved.</p>
</footer>
  `,
  styleUrls: ['./app.css']
})
export class App {}