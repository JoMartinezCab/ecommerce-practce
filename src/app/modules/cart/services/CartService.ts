import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private currentStorage = new BehaviorSubject({});
  public products = [];

  constructor() {}

  updateCart(data: any, quantity: number) {
    let products = [];
    let productExist: boolean = false;

    if (localStorage.getItem('cart')) {
      products = JSON.parse(localStorage.getItem('cart')!);
      productExist = products.some((product: any) => product.id === data.id);

      productExist
        ? products.forEach((product: any) => {
            if (product.id === data.id) {
              product.quantity += quantity;
              product.total += data.price * quantity;

              return;
            }
          })
        : products.push({
            id: data.id,
            title: data.title,
            price: data.price,
            quantity: quantity,
            total: data.price * quantity,
          });
    } else {
      products.push({
        id: data.id,
        title: data.title,
        price: data.price,
        quantity: quantity,
        total: data.price * quantity,
      });
    }

    localStorage.setItem('cart', JSON.stringify(products));
    this.updateSubject();
  }

  updateSubject() {
    this.currentStorage.next({ ...localStorage });
  }

  watch() {
    return this.currentStorage.pipe(map((items: any) => items['cart']));
  }

  getCart() {
    return (this.products = JSON.parse(localStorage.getItem('cart')!));
  }

  totalCart(cart: any[]) {
    let total = 0;
    cart.forEach((item: any) => (total += item.total));

    return total;
  }
}
