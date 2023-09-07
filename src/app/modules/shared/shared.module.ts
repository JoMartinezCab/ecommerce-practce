import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
