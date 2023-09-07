import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/users.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient:HttpClient){ }

  getUserById( id:string ):Observable<User>{
    const url = `${ this.apiUrl }/users/${ id }`;

    return this.httpClient.get<User>(url);
  }

  saveUser( user:object ):Observable<User>{
    const url = `${ this.apiUrl }/users/add`;

    return this.httpClient.post<User>(url, user)
  }
}
