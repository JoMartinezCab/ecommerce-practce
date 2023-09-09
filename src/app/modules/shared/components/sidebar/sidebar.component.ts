import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from 'src/app/modules/auth/interfaces/auth.interface';
import { ProductsService } from 'src/app/modules/products/services/products.service';
import { map } from 'rxjs';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public sidebarItems: any = [];
  public user: any = [];
  public categories: any = [];

  constructor(
    private authService: AuthService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    if (this.sidebarItems.length === 0)
      this.getCategoriesProduct();
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

        this.sidebarItems.push({ label: 'Inicio', icon: '', url: '/products' });

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
