import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from 'src/app/modules/auth/interfaces/auth.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  public sidebarItems = [
    { label: 'Inicio', icon: '', url:'' },
    { label: 'categoria', icon: '', url:'./category' },
    { label: 'usuario', icon: '', url:'./user' }
  ]

  public user:any = [];

  constructor(
    private authService:AuthService
  ){}

  userExist(){
    const userAuth = this.authService.checkAuth();

    if(!userAuth) return false;

    this.user = JSON.parse(userAuth);

    return true;
  }

  closeSesion(){
    this.authService.logout()
  }
}
