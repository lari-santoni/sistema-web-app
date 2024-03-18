import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../services/forms.service';
import { Quiz, ReportInfo, StudentsQuestionaire } from '../../../models/quiz-response';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.scss'
})
export class ChecklistComponent implements OnInit {
  basicInfo: ReportInfo = new ReportInfo()
  questions: Quiz[] = []
  studentQuest: StudentsQuestionaire = new StudentsQuestionaire()
  listQuest: StudentsQuestionaire[] = []

  id_student: string = ''

  constructor(private formsService: FormsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.id_student = params['id_student'])
    
    this.getBasicInfo()
    this.getQuizQuestions()

  }

  getBasicInfo() {
    this.formsService.getBasicInfo(this.id_student).subscribe({
      next: (response) => {
        this.basicInfo = {
          studentName: response.name,
          studentAge: response.age,
          professorName: localStorage.getItem('ProfessorName') || ''
        }
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

  getQuizQuestions() {

    this.formsService.getQuizQuestions("5").subscribe({
      next: (response) => {
        this.questions = response
      },
      error: (response) => {
        console.log(response)
      }
    })
  }
  
  studentQuestRegister() {}
}
