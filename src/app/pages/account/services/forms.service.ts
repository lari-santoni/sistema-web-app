import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { ReportInfo, StudentsQuestionaire } from '../models/quiz-response';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz-response';

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

    return this.http.get<Quiz[]>(`${this.urlBase}/questionaire?age=${age}`, { headers: head })
  }

  public addQuizAnswers(answersList: StudentsQuestionaire[]): Observable<any> {

    const token = localStorage.getItem('token') || {}

    let head = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `Bearer ${token}`)

    return this.http.post<Quiz[]>(`${this.urlBase}/checklist`, answersList, { headers: head })
  }

  getReportAnswers() {
    var report = {
      studentName: 'Raiden Mei',
      professorName: 'Murata Himeko',
      school: 'St. Freya Academy',
      timeClass: '5',
      detected: [
        {
          caracteristics: 'TDAH',
          level: 'alto'
        },
        {
          caracteristics: 'DI',
          level: 'medio'
        }
      ]
    }

    return report
  }
}
