import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { Product } from 'src/app/modules/products/interfaces/products.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  public quantity:number = 0;
  public total:number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Product
  ){}

  decrement(){
    if(this.quantity > 0) this.quantity--;
    this.totalProductxQuantity();
  }

  increment(){
    if(this.quantity < this.data.stock) this.quantity++;
    this.totalProductxQuantity();
  }

  totalProductxQuantity(){
    this.total = this.quantity * this.data.price;
  }

  saveCart(){
    console.log('asd');
    let products = [];
    if(localStorage.getItem('cart')){
      products = JSON.parse(localStorage.getItem('cart')!);
    }

    products.push({
      'id': this.data.id,
      'quantity': this.quantity
    })

    localStorage.setItem('cart', JSON.stringify(products));
  }
}
