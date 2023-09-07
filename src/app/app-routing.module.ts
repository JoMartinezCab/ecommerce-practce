import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
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
},{
  path: '**',
  redirectTo: 'Products'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
