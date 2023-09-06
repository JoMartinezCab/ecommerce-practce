import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

  public products:any;

  constructor(
    private productsService:ProductsService
  ){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void{
    this.productsService.getProducts()
      .subscribe(
        data => {
          this.products = data.products;
        }
      );
  }
}
