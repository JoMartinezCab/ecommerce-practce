import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registerForm:FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    username: ['', Validators.required],
    phone: ['', Validators.required],
    birthDate: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private fb:FormBuilder,
    private snackBar: MatSnackBar,
    private router:Router,
    private usersService:UsersService
  ){}

  onSave(){
    if( this.registerForm.invalid ){
      this.showSnackBar('Todos los campos son requeridos', 'ok')
      return;
    }
    this.usersService.saveUser(this.registerForm.value)
      .subscribe(
        register => {
          (register.id)
          ? this.router.navigate(['./auth/login'])
          : this.showSnackBar('Ocurrio un error al momento de crear un usuario', 'ok')
        }
      );
  }

  showSnackBar( message:string, btnName:string ):void{
    this.snackBar.open( message , btnName, {duration : 2500})
  }
}
