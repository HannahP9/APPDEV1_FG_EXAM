import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, Product } from './cart.service';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cart-container">
      <h2>Your Cart</h2>

      <div *ngIf="items.length === 0" class="empty-cart">
        Cart is empty.
      </div>

      <ul *ngIf="items.length > 0" class="cart-list">
        <li *ngFor="let item of items">{{ item.name }} - ₱{{ item.price }}</li>
      </ul>

      <a routerLink="/products" class="back-btn">Back to Products</a>
    </div>
  `,
  styles: [`
    /* Container styling */
    .cart-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 20px 10px;
    }

    h2 {
      color: #b966ff; /* matches header logo color */
      margin-bottom: 15px;
      text-align: center;
    }

    .empty-cart {
      font-size: 1rem;
      margin: 10px 0;
      color: white;
      text-align: center;
    }

    /* Cart items - desktop and default */
    .cart-list {
      width: 100%;
      max-width: 500px;
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
      padding: 0;
      list-style: none;
    }

    .cart-list li {
      background-color: #1e1b2e;
      color: white;
      padding: 15px;
      border-radius: 10px;
      text-align: center;
      flex: 1 1 200px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }

    /* Back button */
    .back-btn {
      margin-top: 20px;
      padding: 10px 15px;
      background-color: #b966ff;
      color: white;
      border-radius: 5px;
      text-decoration: none;
      display: inline-block;
      text-align: center;
      font-weight: bold;
      transition: background-color 0.3s;
    }

    .back-btn:hover {
      background-color: #9955dd;
    }

    /* Mobile adjustments */
    @media (max-width: 600px) {
      .cart-list {
        flex-direction: column;
        gap: 10px;
      }

      .cart-list li {
        flex: 1 1 100%; /* full width on mobile */
      }

      .back-btn {
        width: 100%;
      }
    }
  `]
})
export class Cart {
  items: Product[] = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.items = this.cartService.clearCart();
    alert('Cart cleared!');
  }
}