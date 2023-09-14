import { Injectable } from '@angular/core';
import { LoginModel } from './login.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(model: LoginModel): Observable<any> {
    return this.http.post('https://dummyjson.com/auth/login', model);
  }
}
