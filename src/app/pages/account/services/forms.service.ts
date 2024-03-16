import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { ReportInfo } from '../models/quiz-response';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz-response';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private readonly urlBase = environment.urlBase

  constructor(private http: HttpClient) { }

  getBasicInfo() {
    var formsInfo: ReportInfo = {
      studentName: 'Lynx',
      studentAge:'2',
      professorName: 'Cocolia'
    }

    return formsInfo
  }

  public getQuizQuestions(): Observable<Quiz[]> {

    return this.http.get<Quiz[]>(`${this.urlBase}/checklist`)
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
