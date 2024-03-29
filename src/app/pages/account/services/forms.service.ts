import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { ReportInfo, StudentsQuestionnaire } from '../models/quiz-response';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz-response';
import { ReportResult } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private readonly urlBase = environment.urlBase

  constructor(private http: HttpClient) { }

  getBasicInfo(id_student: string) {
    const token = localStorage.getItem('token') || {}

    let head = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `Bearer ${token}`)

    return this.http.get<any>(`${this.urlBase}/get-student?id=${id_student}`, { headers: head })
  }

  public getQuizQuestions(age: string): Observable<Quiz[]> {

    const token = localStorage.getItem('token') || {}

    let head = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `Bearer ${token}`)

    return this.http.get<Quiz[]>(`${this.urlBase}/questionnaire?age=${age}`, { headers: head })
  }

  public addQuizAnswers(answersList: StudentsQuestionnaire[]): Observable<any> {

    const token = localStorage.getItem('token') || {}

    let head = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `Bearer ${token}`)

    return this.http.post<Quiz[]>(`${this.urlBase}/checklist`, answersList, { headers: head })
  }

  getReportAnswers(id_student: string) {
    const token = localStorage.getItem('token') || {}

    let head = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `Bearer ${token}`)

    return this.http.get<ReportResult>(`${this.urlBase}/report?id=${id_student}`, { headers: head })
  }
}
