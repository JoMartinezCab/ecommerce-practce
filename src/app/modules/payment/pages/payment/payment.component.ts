import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/modules/products/interfaces/products.interface';
import { CartService } from 'src/app/modules/cart/services/CartService';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  public total = 0;
  public cart: any[] = [];
  public displayedColumns: string[] = [
    'eliminar',
    'Producto',
    'Cantidad',
    'Precio',
  ];

  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.paypalRender();

    this.cart = this.cartService.getCart();

    this.total = this.cartService.totalCart(this.cart);

    this.cartService.watch().subscribe((value) => {
      console.log(value);
      if (value != undefined) this.cart = JSON.parse(value);
    });
  }

  cancel() {
    this.router.navigate(['cart']);
  }

  paypalRender() {
    window.paypal
      .Buttons({
        style: {
          layout: 'horizontal',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.total.toString(),
                  currency_code: 'USD',
                },
              },
            ],
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            if (details.status === 'COMPLETED')
              this.router.navigate(['./payment/result'], { state: { data: details } });
          });
        },
        onError: (error: any) => {
          console.log(error);
        },
      })
      .render(this.paymentRef.nativeElement);
  }

  removeAll() {
    this.cartService.removeAllProducts();
    this.cart = [];
    this.total = 0;
  }

  removeItem(posiion: number) {
    this.cart = this.cartService.removeProduct(posiion);
    this.total = this.cartService.totalCart(this.cart);
  }
}
