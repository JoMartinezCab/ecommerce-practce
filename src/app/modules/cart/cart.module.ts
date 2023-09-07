import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './component/add-product/add-product.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class CartModule { }
