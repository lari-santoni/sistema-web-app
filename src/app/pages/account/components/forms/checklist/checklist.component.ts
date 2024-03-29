import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../services/forms.service';
import { Quiz, ReportInfo, StudentsQuestionnaire } from '../../../models/quiz-response';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.scss'
})
export class ChecklistComponent implements OnInit {
  basicInfo: ReportInfo = new ReportInfo()
  questions: Quiz[] = []
  studentQuest: StudentsQuestionnaire = new StudentsQuestionnaire()
  listQuest: StudentsQuestionnaire[] = []
  answersList: string[] = []
  id_student: string = ''

  constructor(private formsService: FormsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.id_student = params['id_student'])
    
    this.getBasicInfo()
  }

  getBasicInfo() {
    this.formsService.getBasicInfo(this.id_student).subscribe({
      next: (response) => {
        this.basicInfo = {
          studentName: response.name,
          studentAge: response.age,
          professorName: localStorage.getItem('ProfessorName') || ''
        }

        this.getQuizQuestions()
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

  getQuizQuestions() {

    this.formsService.getQuizQuestions(this.basicInfo.studentAge).subscribe({
      next: (response) => {
        this.questions = response
      },
      error: (response) => {
        console.log(response)
      }
    })
  }
  
  studentQuestRegister() {
    this.answersList.forEach((value, index) => {
      let newAnswer: StudentsQuestionnaire = {
        studentId: this.id_student,
        answer: value,
        questId: this.questions[index].id,
        questType: this.questions[index].type
      }
      this.listQuest.push(newAnswer)
    })

    this.formsService.addQuizAnswers(this.listQuest).subscribe({
      next: () => {
        this.router.navigate(['/report', this.id_student])
      }
    })
  }
}
