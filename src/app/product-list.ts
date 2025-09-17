import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, Product } from './cart.service';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Product List</h2>
    <div *ngFor="let product of products" style="margin: 10px 0; padding: 10px; border: 1px solid #ccc;">
      <strong>{{ product.name }}</strong> - ₱{{ product.price }}
      <button (click)="addProduct(product)" style="margin-left: 10px;">Add to Cart</button>
    </div>
  `
})
export class ProductList {
  products: Product[] = [
    { name: 'Adidas Hoodie Black', price: 2500 },
    { name: 'Adidas Hoodie White', price: 2550 },
    { name: 'Adidas Hoodie Red', price: 2600 },
    { name: 'Adidas Hoodie Blue', price: 2650 },
  ];

 constructor(private cartService: CartService) {}

  addProduct(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}