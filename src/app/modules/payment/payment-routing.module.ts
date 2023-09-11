import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaymentComponent } from './pages/payment/payment.component';

const routes:Routes = [{
  path: 'process',
  component: PaymentComponent
}]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class PaymentRoutingModules{}
