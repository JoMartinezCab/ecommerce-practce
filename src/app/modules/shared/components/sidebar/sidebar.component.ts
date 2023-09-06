import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  public sidebarItems = [
    { label: 'Inicio', icon: '', url:'./' },
    { label: 'categoria', icon: '', url:'./category' },
    { label: 'usuario', icon: '', url:'./user' }
  ]

  constructor(
    private authService:AuthService
  ){}

  ngOnInit(): void {
    this.userExist()
  }

  userExist(){
    this.authService.checkAuth()
  }
}
