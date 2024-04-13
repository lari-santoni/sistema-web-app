import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../services/forms.service';
import { QuestionList, ReportResult, Results } from '../../../models/report';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { findCharacteristics } from '../../../../../functions/report-functions';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit{
  report: ReportResult = new ReportResult()
  id_student: string = ''
  res: string = ''
  finalQuestion: QuestionList[] = []
  hasValue: boolean = true

  constructor(private formsService: FormsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.id_student = params['id_student'])
    this.getReportAnswers()
    this.getReportCharacteristics()
  }

  backHomeProf(){
    this.router.navigate(['/list-students'])
  }

  getReportCharacteristics() {
    this.formsService.getReportChar(this.id_student).subscribe({
      next: (response) => {
        this.finalQuestion = response.student.questions
      }
    })
  }

  getReportAnswers() {
    this.formsService.getReportAnswers(this.id_student).subscribe({
      next: (response) => {
        const characteristics = findCharacteristics(response.results[0])
        if(characteristics.length===0){this.hasValue = false}
        characteristics.forEach((element, index) => {
          if ((index !== characteristics.length-2) && (index !== characteristics.length-1)){
            this.res += element + ', '
          }
          else if(index === characteristics.length-2) {
            this.res += element + ' '
          }
        })
        this.res += 'e ' + characteristics[characteristics.length-1]

        this.report = {
          name: response.name,
          age: response.age,
          school: response.school,
          professor: response.professor,
          results: this.res
        }
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

  printPage(){
    window.print()
  }
}
