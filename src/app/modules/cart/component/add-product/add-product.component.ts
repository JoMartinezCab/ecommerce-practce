import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/modules/products/interfaces/products.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  public quantity: number = 0;
  public total: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Product,
    private snackBar: MatSnackBar
  ) {}

  decrement() {
    if (this.quantity > 0) this.quantity--;
    this.totalProductxQuantity();
  }

  increment() {
    if (this.quantity < this.data.stock) this.quantity++;
    this.totalProductxQuantity();
  }

  totalProductxQuantity() {
    this.total = this.quantity * this.data.price;
  }

  saveCart() {
    let products = [];
    let productExist: boolean = false;

    if (localStorage.getItem('cart')) {
      products = JSON.parse(localStorage.getItem('cart')!);
      productExist = products.some(
        (product: any) => product.id === this.data.id
      );

      productExist
        ? products.forEach((product: any) => {
            if (product.id === this.data.id) {
              product.quantity += this.quantity;
              product.total += this.data.price * this.quantity;

              return;
            }
          })
        : products.push({
            id: this.data.id,
            title: this.data.title,
            price: this.data.price,
            quantity: this.quantity,
            total: this.data.price * this.quantity,
          });
    }
    else{
      products.push({
        id: this.data.id,
        title: this.data.title,
        price: this.data.price,
        quantity: this.quantity,
        total: this.data.price * this.quantity,
      });
    }

    localStorage.setItem('cart', JSON.stringify(products));

    this.showSnackBar(
      `Se agregaron ${this.quantity} ${this.data.title} al carrito`,
      'ok'
    );
  }

  showSnackBar(message: string, btnName: string): void {
    this.snackBar.open(message, btnName, { duration: 2500 });
  }
}
