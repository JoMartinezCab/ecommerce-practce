import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from 'src/app/modules/auth/interfaces/auth.interface';
import { ProductsService } from 'src/app/modules/products/services/products.service';
import { map } from 'rxjs';
import { CartService } from 'src/app/modules/cart/services/cart.service';

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

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    if (this.sidebarItems.length === 0)
      this.getCategoriesProduct();

    this.getCart();
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

  getCart(){
    this.cartService.getCart().subscribe(
      (cart: any) => this.cart = cart
    );

    console.log(this.cart);
  }
}
