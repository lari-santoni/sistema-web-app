import { Component, OnInit, ViewChild } from '@angular/core';
import { UpdateProfData } from '../../../models/update-professor';
import { UpdatesService } from '../../../services/updates.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-update',
  templateUrl: './professor-update.component.html',
  styleUrl: './professor-update.component.scss'
})
export class ProfessorUpdateComponent implements OnInit {
  upProfData: UpdateProfData = new UpdateProfData()
  errorMessage?: string
  compare: boolean = true

  constructor(private updateService: UpdatesService, private router: Router) {}

  ngOnInit(): void {
    this.getProfessor()
  }

  backHomeProf(){
    this.router.navigate(['/professor-home'])
  }

  getProfessor() {
    const id_professor = localStorage.getItem('ProfessorCod') || ''
    this.updateService.getProfessor(id_professor).subscribe({
      next: (response) => {
        this.upProfData = {
          id: response.id,
          name: response.name,
          email: response.email,
        }
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

  @ViewChild('formUpdateProf') formUpdateProf!: NgForm

  upProfessor() {
    this.updateService.updateProfessor(this.upProfData).subscribe({
      next: (response) => {
        alert("Dados alterados com sucesso")
        window.location.reload()
      },
      error: (response) => {
        if(response.error.statusCode === 401) {
          this.router.navigate(['/'])
        }
      }
    })
  }

  comparePassword() {
    this.compare = this.upProfData.password === this.upProfData.confirmPassword
    if(!this.compare) {
      this.errorMessage = 'As senhas não são iguais'
    }
  }

  sendForm() {
    this.comparePassword()

    if(this.compare) {
      this.upProfessor()
    }
  }

}
