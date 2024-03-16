import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../services/forms.service';
import { Quiz, ReportInfo } from '../../../models/quiz-response';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.scss'
})
export class ChecklistComponent implements OnInit {
  basicInfo: ReportInfo = new ReportInfo()
  questions: Quiz[] = []

  constructor(private formsService: FormsService) {}

  ngOnInit(): void {
    this.getBasicInfo()
    this.getQuizQuestions()
  }

  getBasicInfo() {
    this.basicInfo = this.formsService.getBasicInfo()
  }

  getQuizQuestions() {
    this.formsService.getQuizQuestions().subscribe({
      next: (response) => {
        this.questions = response
      },
      error: (response) => {
        console.log(response)
      }
    })
  }
}
