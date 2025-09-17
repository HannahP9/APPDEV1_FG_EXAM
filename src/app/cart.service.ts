import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}