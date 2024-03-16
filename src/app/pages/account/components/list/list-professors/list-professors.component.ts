import { Component, OnInit } from '@angular/core';
import { ListService } from '../../../services/list.service';
import { Professor } from '../../../models/professors-response';
import { environment } from '../../../../../../environments/environment.development';

@Component({
  selector: 'app-list-professors',
  templateUrl: './list-professors.component.html',
  styleUrl: './list-professors.component.scss'
})

export class ListProfessorsComponent implements OnInit {
  listProfessors: Professor[] = []

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.getProfessors()
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