import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/auth.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = environment.apiUrl;
  private user?:User[] = [];

  constructor(
    private httpClient:HttpClient,
    private router:Router,
  ){}

  authUser( user:object ):Observable<boolean>{
    const url = `${ this.apiUrl }/auth/login`;
    return this.httpClient.post(url, user)
      .pipe(
        map(
          auth => {
            return this.saveLocalUser(auth)
          }
        ),
        catchError(
          err => of(false)
        )
      );
  }

  saveLocalUser(auth:any){
    if(auth){
      localStorage.setItem('user', JSON.stringify(auth));
      return true;
    }

    return false;
  }

  checkAuth():string | null{
    return localStorage.getItem('user');
  }

  logout(){
    this.user = undefined;
    localStorage.clear();
    this.router.navigate(['./products'])
  }
}
