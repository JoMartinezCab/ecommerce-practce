import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './pages/payment/payment.component';
import { PaymentRoutingModules } from './payment-routing.module';
import { PaymentResultComponent } from './pages/payment-result/payment-result.component';

@NgModule({
  declarations: [
    PaymentComponent,
    PaymentResultComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModules
  ]
})
export class PaymentModule { }
