import { Component, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  @Input()
  public title:string = '';

  @Input()
  public image:string = '';

  @Input()
  public description:string = '';

  @Input()
  public category:string = '';

  @Input()
  public price:number = 0;

  @Input()
  public id:number = 0;

  @Input()
  public thumbnail:string = '';

  constructor(
    private productsService:ProductsService
  ) {}

  addToCart( id:string ){

    this.productsService.productModal(id);
  }
}
