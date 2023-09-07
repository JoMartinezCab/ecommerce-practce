import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  public amount = 0;

  @ViewChild('paymentRef', {static: true}) paymentRef!: ElementRef;

  constructor(
    private router:Router,
    // private payment: PaymentService
  ){}

  ngOnInit(): void {
    // this.amount = this.payment.totalAmount
    window.paypal.Buttons().render(this.paymentRef.nativeElement);
  }

  cancel(){
    this.router.navigate(['cart']);
  }
}
