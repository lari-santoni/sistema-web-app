import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestsUpQuiz, ReportInfo, StudentsQuestionnaire, UpQuiz } from '../../../models/quiz-response';
import { FormsService } from '../../../services/forms.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UpdatesService } from '../../../services/updates.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checklist-update',
  templateUrl: './checklist-update.component.html',
  styleUrl: './checklist-update.component.scss'
})
export class ChecklistUpdateComponent implements OnInit {
  basicInfo: ReportInfo = new ReportInfo()
  id_student: string = ''
  questions: QuestsUpQuiz[] = []
  questionnare: UpQuiz[] = []
  answersList: string[] = []
  upStudentQuest: StudentsQuestionnaire = new StudentsQuestionnaire()
  upListQuest: StudentsQuestionnaire[] = []

  constructor(private formService: FormsService, private updateServices: UpdatesService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.id_student = params['id_student'])
    
    this.getBasicInfo()
  }

  backHomeP(){
    this.router.navigate(['/list-students'])
  }

  getBasicInfo() {
    this.formService.getBasicInfo(this.id_student).subscribe({
      next: (response) => {
        this.basicInfo = {
          studentName: response.name,
          studentAge: response.age,
          professorName: localStorage.getItem('ProfessorName') || ''
        }

        this.getQuestionnaire()
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

  getQuestionnaire(){
    this.updateServices.getQuestionnaireData(this.id_student).subscribe({
      next: (response) => {
        this.questionnare = response
        this.questionnare.forEach(element => {
          this.questions.push(element.question)
          this.answersList.push(element.answer)
        })
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

  @ViewChild('upFormQuestReg') upFormQuestReg!: NgForm

  updateQuestionnaire() {
    this.answersList.forEach((value, index) => {
      let upList: StudentsQuestionnaire = {
        studentId: this.id_student,
        answer: value,
        questId: this.questionnare[index].question.id
      }
      this.upListQuest.push(upList)
    })

    this.updateServices.upQuestionnaire(this.upListQuest).subscribe({
      next: () => {
        this.router.navigate(['/report'])
      }
    })
  }

}
