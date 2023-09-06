import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductsRoutingModules } from './products-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MaterialModule } from '../material/material.module';
import { ProductComponent } from './pages/product/product.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductsRoutingModules,
  ]
})
export class ProductsModule { }
