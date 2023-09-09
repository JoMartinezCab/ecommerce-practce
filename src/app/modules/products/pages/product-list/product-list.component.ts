import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public category: string = '';
  public products: any;
  public url$: Observable<string> = new Observable<string>();
  public name:string = ''

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.category = this.route.snapshot.params['category'];

      !this.category
        ? this.getProducts()
        : this.getProductsByCategory(this.category);
    });
  }

  getProducts(): void {
    this.productsService
      .getProducts()
      .subscribe((data) => (this.products = data.products));
  }

  getProductsByCategory(category: string): void {
    this.productsService
      .getProductByCategory(category)
      .subscribe((data) => (this.products = data.products));
  }

  getProductsByName(term:string): void {
    this.productsService
      .getProdutcByName(term)
      .subscribe((data) => (
        this.products = data.products
      ));
  }
}
