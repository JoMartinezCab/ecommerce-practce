import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModules } from './users-routing.module';
import { UserComponent } from './pages/user/user.component';
import { MaterialModule } from '../material/material.module';
import { RegisterComponent } from './pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModules,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class UsersModule { }
