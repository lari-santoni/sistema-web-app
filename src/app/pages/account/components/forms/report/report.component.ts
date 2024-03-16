import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../services/forms.service';
import { ReportAnswers } from '../../../models/quiz-response';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit{
  report: ReportAnswers = new ReportAnswers()

  constructor(private formsService: FormsService) {}

  ngOnInit(): void {
    this.getReportAnswers()
  }

  getReportAnswers() {
    this.report = this.formsService.getReportAnswers()
  }
}
