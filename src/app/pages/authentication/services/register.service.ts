import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { RegisterRequest } from '../models/register-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly urlBase = environment.urlBase

  constructor(private http: HttpClient) { }

  //Chamar API
  public registerProfessor(register: RegisterRequest): Observable<any> {
    return this.http.post<any>(`${this.urlBase}/account`, register)
  }
}
