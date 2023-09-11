import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/modules/products/interfaces/products.interface';
import { CartService } from '../../services/CartService';

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
    private snackBar: MatSnackBar,
    private cartService:CartService
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
    this.cartService.updateCart(this.data, this.quantity);

    this.showSnackBar(
      `Se agregaron ${this.quantity} ${this.data.title} al carrito`,
      'ok'
    );
  }

  showSnackBar(message: string, btnName: string): void {
    this.snackBar.open(message, btnName, { duration: 2500 });
  }
}
