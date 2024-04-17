import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { ListService } from '../../../services/list.service';
import { StudentListResponse } from '../../../models/students-response';
import { BuscarAlunosRequest } from '../../../models/professors-response';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.scss'
})

export class ListStudentsComponent implements AfterViewInit {
  listStudents: StudentListResponse = new StudentListResponse()
  professorName: string = ''
  professorId: string = ''

  constructor(private listSevice: ListService, private router: Router) {}

  backPage() {
    this.router.navigate(['/professor-home'])
  }

  ngAfterViewInit(): void {
    this.getStudents()
  }

  getStudents() {
    this.getLocal()

    const req: BuscarAlunosRequest = { id: this.professorId }
    this.listSevice.getStudents(req).subscribe({
      next: (response) => {
        this.listStudents = response
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

  getLocal() {
    if (typeof localStorage !== 'undefined'){
      this.professorName = localStorage.getItem('ProfessorName') || ''
      this.professorId = localStorage.getItem('ProfessorCod') || ''
    }
  }
}
