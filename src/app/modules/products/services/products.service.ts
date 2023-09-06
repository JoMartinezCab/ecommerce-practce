import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Product, Products } from '../interfaces/products.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = environment.apiUrl;

  constructor(
    private httpClient:HttpClient
  ) { }

  // getProducts():Observable<Product>{
  //   const url = `${ this.apiUrl }/products`;

  //   return this.httpClient.get<Product>(url);
  // }

  getProducts():Observable<Products>{
    const url = `${ this.apiUrl }/products`;

    return this.httpClient.get<Products>(url)
  }
}
