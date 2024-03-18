import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { ListService } from '../../../services/list.service';
import { StudentListResponse } from '../../../models/students-response';
import { BuscarAlunosRequest } from '../../../models/professors-response';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.scss'
})

export class ListStudentsComponent implements OnInit, AfterViewInit {
  listStudents: StudentListResponse = new StudentListResponse()
  professorName: string = ''
  professorId: string = ''

  constructor(private listSevice: ListService) {}

  ngOnInit(): void {
    
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
    this.professorName = localStorage.getItem('ProfessorName') || ''
    this.professorId = localStorage.getItem('ProfessorCod') || ''
  }
}
