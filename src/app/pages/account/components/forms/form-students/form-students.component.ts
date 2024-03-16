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

  constructor(private formService: PostFormsService, private router: Router) {}

  ngOnInit(): void {}

  @ViewChild('formStudent') formStudent!: NgForm;

  studentRegister() {
    this.formService.registerStudents(this.regStudent).subscribe({
      next: (response) => {
        console.log(response)
        this.router.navigate(['/checklist'])
      },
      error: (response) => {
        console.log(response)
      }
    })
  }
}
