import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdateProfData } from '../models/update-professor';
import { StudentsQuestionnaire } from '../models/quiz-response';

@Injectable({
  providedIn: 'root'
})
export class UpdatesService {

  private readonly urlBase = environment.urlBase
  token:any = '';

  constructor(private http: HttpClient) { }

  public getProfessor(id_professor: string): Observable<any> {
    if (typeof localStorage !== 'undefined'){
      this.token = localStorage.getItem('token') || {}
    }

    let head = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `Bearer ${this.token}`)

    return this.http.get<any>(`${this.urlBase}/get-professor?id=${id_professor}`, { headers: head })
  }

  public updateProfessor(data: UpdateProfData): Observable<any> {
    if (typeof localStorage !== 'undefined'){
      this.token = localStorage.getItem('token') || {}
    }

    let head = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `Bearer ${this.token}`)

    return this.http.put<any>(`${this.urlBase}/update-data`, data, { headers: head })
  }

  public getQuestionnaireData(id_student: string) {
    if (typeof localStorage !== 'undefined'){
      this.token = localStorage.getItem('token') || {}
    }

    let head = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `Bearer ${this.token}`)

    return this.http.get<any>(`${this.urlBase}/get-checklist?id=${id_student}`, {headers:head})
  }

  public upQuestionnaire(lData: StudentsQuestionnaire[]): Observable<any>{
    if (typeof localStorage !== 'undefined'){
      this.token = localStorage.getItem('token') || {}
    }

    let head = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `Bearer ${this.token}`)

    return this.http.put<any>(`${this.urlBase}/update-checklist`, lData, { headers: head })
  }
}
