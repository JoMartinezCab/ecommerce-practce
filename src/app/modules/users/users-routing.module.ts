import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./pages/user/user.component";
import { RegisterComponent } from "./pages/register/register.component";

const routes:Routes = [{
  path: 'register',
  component: RegisterComponent
},{
  path: ':id',
  component: UserComponent
}]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class UsersRoutingModules{}
