import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/auth.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = environment.apiUrl;
  private user?:User[] = [];

  constructor(
    private httpClient:HttpClient,
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

  checkAuth():any{
    console.log(localStorage.getItem('user'));
    // return JSON.parse(user);
  }

  logout(){
    this.user = undefined;
    localStorage.clear()
  }
}
