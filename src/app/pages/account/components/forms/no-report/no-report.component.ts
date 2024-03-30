import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsService } from '../../../services/forms.service';
import { ReportResult } from '../../../models/report';
import { findCharacteristics } from '../../../../../functions/report-functions';

@Component({
  selector: 'app-no-report',
  templateUrl: './no-report.component.html',
  styleUrl: './no-report.component.scss'
})
export class NoReportComponent implements OnInit{
  report: ReportResult = new ReportResult()
  id_student: string = ''

  constructor(private noFormsService: FormsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.id_student = params['id_student'])
    this.getReportAnswers()
  }

  backHomeProf(){
    this.router.navigate(['/list-students'])
  }

  getReportAnswers() {
    this.noFormsService.getReportAnswers(this.id_student).subscribe({
      next: (response) => {
        const characteristics = findCharacteristics(response.results)
        this.report = {
          name: response.name,
          school: response.school,
          professor: response.professor,
          results: characteristics
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
