import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { StudentListResponse } from '../models/students-response';
import { Observable } from 'rxjs';
import { BuscarAlunosRequest, Professor } from '../models/professors-response';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  //Chamar Url Base do environment
  private readonly urlBase = environment.urlBase
  token:any = '';

  constructor(private http: HttpClient) { }

  public getProfessors(): Observable<Professor[]> {
    if (typeof localStorage !== 'undefined'){
      this.token = localStorage.getItem('token') || {}
    }

    let head = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Authorization', `Bearer ${this.token}`)

    return this.http.get<Professor[]>(`${this.urlBase}/professors`, {headers: head})
  }

  public getStudents(req: BuscarAlunosRequest): Observable<StudentListResponse> {

    if (typeof localStorage !== 'undefined'){
      this.token = localStorage.getItem('token') || {}
    }

    let head = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `Bearer ${this.token}`)

    return this.http.post<StudentListResponse>(`${this.urlBase}/list-student`, req, { headers: head })
  }
}
