import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-select',
  templateUrl: './student-select.component.html',
  styleUrl: './student-select.component.scss'
})
export class StudentSelectComponent {
  constructor(private router: Router) {}

  logOut() {
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
}
