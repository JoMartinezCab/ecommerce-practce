import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './component/add-product/add-product.component';
import { MaterialModule } from '../material/material.module';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [
    AddProductComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class CartModule { }
