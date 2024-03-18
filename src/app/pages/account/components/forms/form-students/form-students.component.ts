import { Component, ViewChild } from '@angular/core';
import { RegisterStudent } from '../../../models/student-register';
import { PostFormsService } from '../../../services/post-forms.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-students',
  templateUrl: './form-students.component.html',
  styleUrl: './form-students.component.scss'
})
export class FormStudentsComponent {
  regStudent: RegisterStudent = new RegisterStudent()
  id_student: string = ''

  constructor(private formService: PostFormsService, private router: Router) {
    this.regStudent.professorId = localStorage.getItem('ProfessorName') || ''
  }

  ngOnInit(): void {}

  @ViewChild('formStudent') formStudent!: NgForm;

  studentRegister() {
    this.regStudent.professorId = localStorage.getItem('ProfessorCod') || ''

    this.formService.registerStudents(this.regStudent).subscribe({
      next: (response) => {
        this.id_student = response.id
        this.router.navigate(['/checklist', this.id_student])
      },
      error: (response) => {
        console.log(response)
      }
    })
  }
}
