import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../products/services/products.service';
import { Product } from 'src/app/modules/products/interfaces/products.interface';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  public total = 0;
  public cart:any[] = [];
  public products:Product[] = [];

  @ViewChild('paymentRef', {static: true}) paymentRef!: ElementRef;

  constructor(
    private router:Router,
    private productsService:ProductsService
    // private payment: PaymentService
  ){}

  ngOnInit(): void {
    // this.amount = this.payment.totalAmount
    this.getCart();
    this.getTotal();
    window.paypal.Buttons({
      createorder: (data: any, actions:any) => {
        return actions.order.create({
          purchase_units: [
            {}
          ]
        })
      }
    }).render(this.paymentRef.nativeElement);
  }

  cancel(){
    this.router.navigate(['cart']);
  }

  getCart(){
    this.cart = JSON.parse(localStorage.getItem('cart')!);

    this.productsService.getProducts()
      .subscribe(data => {
        this.products = data.products.filter(
          el => this.cart.find(
            element => element.id == el.id
            )
          )

         console.log(this.products) ;
      });
  }

  getTotal(){
    this.products;
  }
}
