import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../services/forms.service';
import { ReportResult, Results } from '../../../models/report';
import { findCharacteristics } from '../../../../../functions/report-functions';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit{
  report: ReportResult = new ReportResult()
  id_student: string = ''

  constructor(private formsService: FormsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.id_student = params['id_student'])
    this.getReportAnswers()
  }

  backHomeProf(){
    this.router.navigate(['/list-students'])
  }

  getReportAnswers() {
    this.formsService.getReportAnswers(this.id_student).subscribe({
      next: (response) => {
        console.log('r',response.results[0])
        const characteristics = findCharacteristics(response.results[0])
        console.log('c',characteristics)
        this.report = {
          name: response.name,
          school: response.school,
          professor: response.professor,
          results: characteristics
        }

        console.log(this.report)
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
