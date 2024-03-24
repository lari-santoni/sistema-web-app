import { Component, OnInit } from '@angular/core';
import { QuestsUpQuiz, ReportInfo, UpQuiz } from '../../../models/quiz-response';
import { FormsService } from '../../../services/forms.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UpdatesService } from '../../../services/updates.service';

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

        console.log('r',this.questionnare)
        console.log('r',this.questions)
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

  updateQuestionnaire() {}

}
