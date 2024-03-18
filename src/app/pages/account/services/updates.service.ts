import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdateProfData } from '../models/update-professor';

@Injectable({
  providedIn: 'root'
})
export class UpdatesService {

  private readonly urlBase = environment.urlBase

  constructor(private http: HttpClient) { }

  public getProfessor(id_professor: string): Observable<any> {
    const token = localStorage.getItem('token') || {}

    let head = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `Bearer ${token}`)

    return this.http.get<any>(`${this.urlBase}/get-professor?id=${id_professor}`, { headers: head })
  }

  public updateProfessor(data: UpdateProfData): Observable<any> {
    const token = localStorage.getItem('token') || {}

    let head = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `Bearer ${token}`)

    return this.http.post<any>(`${this.urlBase}/update-data`, data, { headers: head })
  }
}
