import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './pages/payment/payment.component';
import { PaymentRoutingModules } from './payment-routing.module';
import { PaymentResultComponent } from './pages/payment-result/payment-result.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    PaymentComponent,
    PaymentResultComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModules,
    MaterialModule
  ]
})
export class PaymentModule { }
