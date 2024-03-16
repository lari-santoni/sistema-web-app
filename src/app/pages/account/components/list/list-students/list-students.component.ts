import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ListService } from '../../../services/list.service';
import { StudentListResponse } from '../../../models/students-response';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.scss'
})

export class ListStudentsComponent implements OnInit, AfterViewInit {
  listStudents: StudentListResponse = new StudentListResponse()

  constructor(private listSevice: ListService) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.getStudents()
  }

  getStudents() {
    this.listSevice.getStudents().subscribe({
      next: (response) => {
        this.listStudents = response
      },
      error: (response) => {
        console.log(response)
      }
    })
  }
}
