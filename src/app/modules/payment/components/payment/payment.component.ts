import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../products/services/products.service';
import { Product } from 'src/app/modules/products/interfaces/products.interface';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  public total = 0;
  public cart: any[] = [];
  public products: Product[] = [];

  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;

  constructor(
    private router: Router,
    private productsService: ProductsService // private payment: PaymentService
  ) {}

  ngOnInit(): void {
    this.paypalRender();
    this.getCart();
    this.getTotal();
  }

  cancel() {
    this.router.navigate(['cart']);
  }

  getCart() {
    this.cart = JSON.parse(localStorage.getItem('cart')!);

    this.productsService.getProducts().subscribe((data) => {
      this.products = data.products.filter((el) =>
        this.cart.find((element) => {
          if (element.id == el.id) this.total += el.price * element.quantity;

          return element.id == el.id;
        })
      );
    });
  }

  getTotal() {
    this.products;
  }

  paypalRender() {
    window.paypal
      .Buttons({
        createorder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              amount:{
                value: this.total.toString(),
                currency_code: 'USD',
                item_total:{
                  currency_code: 'USD',
                  value: '7.50'
                }
              }
            }],
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details:any) => {
            console.log(details);
          })
        },
        onError: (error: any) => {
          console.log(error);
        }
      })
      .render(this.paymentRef.nativeElement);
  }
}
