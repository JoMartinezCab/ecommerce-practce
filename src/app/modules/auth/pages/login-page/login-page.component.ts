import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public loginForm:FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private authService:AuthService,
    private snackBar: MatSnackBar
  ){}

  isValidField( field:string ):boolean | null{
    return this.loginForm.controls[field].errors
      && this.loginForm.controls[field].touched
  }

  getFieldError( field:string ): string | null{
    if(!this.loginForm.controls[field]) return null;

    const errors = this.loginForm.controls[field].errors || {};

    for(const error of Object.keys(errors)){

      switch(error){
        case 'required':
          return 'Este campo es requerido';
      }
    }

    return null;
  }

  onLogin(){
    if( this.loginForm.invalid ) return;

    this.authService.authUser(this.loginForm.value)
      .subscribe(
        auth =>{
          (auth)
          ? this.router.navigate(['./products'])
          : this.showSnackBar('Usuario y/o contraseña incorrectas', 'ok')
        }
      );
  }

  showSnackBar( message:string, btnName:string ):void{
    this.snackBar.open( message , btnName, {duration : 2500})
  }
}
