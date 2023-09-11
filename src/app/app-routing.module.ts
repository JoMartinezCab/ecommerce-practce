import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './modules/payment/components/payment/payment.component';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./modules/products/products.module')
    .then(m => m.ProductsModule)
}, {
  path: 'products',
  loadChildren: () => import('./modules/products/products.module')
    .then(m => m.ProductsModule)
}, {
  path: 'auth',
  loadChildren: () => import('./modules/auth/auth.module')
    .then(m => m.AuthModule)
}, {
  path: 'users',
  loadChildren: () => import('./modules/users/users.module')
    .then(m => m.UsersModule)
}, {
  path: 'payment',
  component: PaymentComponent
},{
  path: '**',
  redirectTo: 'Products'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
