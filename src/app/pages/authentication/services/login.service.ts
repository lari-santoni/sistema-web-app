import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/login-request';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getToken() {
    throw new Error('Method not implemented.');
  }

  private readonly urlBase = environment.urlBase

  constructor(private http: HttpClient) { }

  public getLogin(login: LoginRequest): Observable<any> {
    return this.http.post<any>(`${this.urlBase}/sessions`, login)
  }
}
