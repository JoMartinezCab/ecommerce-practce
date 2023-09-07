import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/products.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

  public products:any;

  constructor(
    private route:ActivatedRoute,
    private productsService:ProductsService
  ){}

  ngOnInit(): void {
    const category = this.route.snapshot.params['category'];

    (!category)
    ? this.getProducts()
    : this.getProductsByCategory(category);
  }

  getProducts():void{
    this.productsService.getProducts()
      .subscribe(data => this.products = data.products);
  }

  getProductsByCategory( category:string ):void{
    this.productsService.getProductByCategory(category)
      .subscribe(data => this.products = data.products);
  }
}
