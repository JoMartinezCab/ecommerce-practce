import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product:any;
  public defaultImage:string = '' ;

  constructor(
    private route:ActivatedRoute,
    private productsService:ProductsService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getProduct(id);

  }

  getProduct( id:string ){
    this.productsService.getProductById(id)
      .subscribe(
        product => {
          this.product = product;
          this.defaultImage = this.product.thumbnail
        }
      )
  }

  changeImage( img:string ){
    this.defaultImage = img;
  }
}
