import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { RegisterStudent } from '../models/student-register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostFormsService {

  private readonly urlBase = environment.urlBase

  constructor(private http: HttpClient) { }

  public registerStudents(regStudent: RegisterStudent): Observable<any> {
    let token:any = ''

    if (typeof localStorage !== 'undefined'){
      token = localStorage.getItem('token') || {}
    }

    let head = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `Bearer ${token}`)

    return this.http.post<any>(`${this.urlBase}/student`, regStudent, { headers: head })
  }
}
