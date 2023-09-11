import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public products = [];

  constructor() { }

  getCart(){
    return this.products = JSON.parse(localStorage.getItem('cart')!);
  }
}
