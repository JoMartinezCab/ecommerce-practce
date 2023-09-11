import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from 'src/app/modules/auth/interfaces/auth.interface';
import { ProductsService } from 'src/app/modules/products/services/products.service';
import { map } from 'rxjs';
import { CartService } from 'src/app/modules/cart/services/CartService';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public sidebarItems: any = [];
  public user: any = [];
  public categories: any = [];
  public cart: any = [];
  public total:number = 0;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    if (this.sidebarItems.length === 0)
      this.getCategoriesProduct();

    this.cart = this.cartService.getCart();

    this.total = this.cartService.totalCart(this.cart);

    this.cartService.watch()
    .subscribe(
      value => {
        if(value != undefined) this.cart = JSON.parse(value)
      }
    )
  }

  userExist() {
    const userAuth = this.authService.checkAuth();

    if (!userAuth) return false;

    this.user = JSON.parse(userAuth);

    return true;
  }

  closeSesion() {
    this.authService.logout();
  }

  getCategoriesProduct() {
    this.productsService.getCategoriesProducts()
      .subscribe((categories) =>{
        this.categories = categories;

        this.sidebarItems.push({ label: 'Inicio', icon: '', url: '' });

        this.categories.forEach((category: any) => {
          this.sidebarItems.push({
            label: category,
            icon: '',
            url: `/products/by/${category}`,
          });
        })
      }
    );
  }
}
