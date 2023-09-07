import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductsRoutingModules } from './products-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MaterialModule } from '../material/material.module';
import { ProductComponent } from './pages/product/product.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductComponent,
    AddToCartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductsRoutingModules,
  ]
})
export class ProductsModule { }
