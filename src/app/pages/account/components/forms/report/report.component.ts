import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../services/forms.service';
import { ReportResult, Results } from '../../../models/report';
import { findCharacteristics } from '../../../../../functions/report-functions';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit{
  report: ReportResult = new ReportResult()
  id_student: string = ''

  constructor(private formsService: FormsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.id_student = params['id_student'])
    this.getReportAnswers()
  }

  getReportAnswers() {
    this.formsService.getReportAnswers(this.id_student).subscribe({
      next: (response) => {
        const characteristics = findCharacteristics(response.results)
        this.report = {
          name: response.name,
          school: response.school,
          professor: response.professor,
          results: characteristics
        }

        console.log('res ',response)

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
