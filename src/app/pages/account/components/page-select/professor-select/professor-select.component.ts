import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-select',
  templateUrl: './professor-select.component.html',
  styleUrl: './professor-select.component.scss'
})
export class ProfessorSelectComponent {
  constructor(private router: Router) {}

  logOut() {
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

}
