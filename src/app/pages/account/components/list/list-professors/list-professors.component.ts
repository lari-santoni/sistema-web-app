import { Component, OnInit } from '@angular/core';
import { ListService } from '../../../services/list.service';
import { Professor } from '../../../models/professors-response';
import { environment } from '../../../../../../environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-professors',
  templateUrl: './list-professors.component.html',
  styleUrl: './list-professors.component.scss'
})

export class ListProfessorsComponent implements OnInit {
  listProfessors: Professor[] = []

  constructor(private listService: ListService, private router: Router) {}

  ngOnInit(): void {
    this.getProfessors()
  }

  backHomeA() {
    this.router.navigate(['/adm-home'])
  }

  getProfessors() {
    this.listService.getProfessors().subscribe({
      next: (response) => {
        this.listProfessors = response
      },
      error: (response) => {
        console.log(response)
      }
    })
  }
}