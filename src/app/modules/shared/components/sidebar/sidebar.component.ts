import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { ProductsService } from 'src/app/modules/products/services/products.service';
import { CartService } from 'src/app/modules/cart/services/CartService';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public displayedColumns: string[] = [
    'eliminar',
    'Producto',
    'Cantidad',
    'Precio',
  ];
  public sidebarItems: any = [];
  public user: any = [];
  public categories: any = [];
  public cart: any[] = [];
  public total: number = 0;
  public totalItems: number = 0;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    if (this.sidebarItems.length === 0) this.getCategoriesProduct();

    this.cart = this.cartService.getCart();

    this.cartService.watch().subscribe((value) => {
      if (value != undefined) this.cart = JSON.parse(value);

      if (this.cart && this.cart.length > 0){
        this.total = this.cartService.totalCart(this.cart);
        this.totalItems = this.cartService.quantityItems(this.cart);
      }
    });
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
    this.productsService.getCategoriesProducts().subscribe((categories) => {
      this.categories = categories;

      this.sidebarItems.push({ label: 'Inicio', icon: '', url: '' });

      this.categories.forEach((category: any) => {
        this.sidebarItems.push({
          label: category,
          icon: '',
          url: `/products/by/${category}`,
        });
      });
    });
  }

  removeAll() {
    this.cartService.removeAllProducts();
    this.cart = [];
    this.total = 0;
    this.totalItems = 0;
  }

  removeProduct(posiion: number) {
    console.log(posiion);
    this.cart = this.cartService.removeProduct(posiion);
    this.total = this.cartService.quantityItems(this.cart);
  }
}
