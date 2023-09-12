import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaymentComponent } from './pages/payment/payment.component';
import { PaymentResultComponent } from "./pages/payment-result/payment-result.component";

const routes:Routes = [{
  path: 'process',
  component: PaymentComponent
}, {
  path: 'result',
  component: PaymentResultComponent
}]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class PaymentRoutingModules{}
