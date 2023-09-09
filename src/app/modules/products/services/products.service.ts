import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Product, Products } from '../interfaces/products.interface';
import { Observable, tap } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProductComponent } from '../../cart/component/add-product/add-product.component';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = environment.apiUrl;

  constructor(
    private dialog: MatDialog,
    private httpClient:HttpClient
  ) { }

  getProducts():Observable<Products>{
    const url = `${ this.apiUrl }/products`;

    return this.httpClient.get<Products>(url)
  }

  getProductById( id:string ):Observable<Products>{
    const url = `${ this.apiUrl }/products/${ id }`;

    return this.httpClient.get<Products>(url)
  }

  getProductByCategory( category:string ):Observable<Products>{
    const url = `${ this.apiUrl }/products/category/${ category }`;

    return this.httpClient.get<Products>(url)
  }

  getCategoriesProducts(){
    const url = `${ this.apiUrl }/products/categories`;

    return this.httpClient.get(url)
  }

  productModal( id:string ){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.getProductById(id)
      .subscribe(
        product => this.dialog.open(AddProductComponent, {
          data: product
        })
      )
  }

  getProdutcByName( name:string ){
    const url = `${ this.apiUrl }/products/search?q=${ name }`;

    return this.httpClient.get<Products>(url)
  }
}
