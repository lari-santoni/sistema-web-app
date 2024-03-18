import { Component, OnInit } from '@angular/core';
import { UpdateProfData } from '../../../models/update-professor';
import { UpdatesService } from '../../../services/updates.service';

@Component({
  selector: 'app-professor-update',
  templateUrl: './professor-update.component.html',
  styleUrl: './professor-update.component.scss'
})
export class ProfessorUpdateComponent implements OnInit {
  upProfData: UpdateProfData = new UpdateProfData()
  errorMessage?: string
  compare: boolean = true

  constructor(private updateService: UpdatesService) {}

  ngOnInit(): void {
    this.getProfessor()
  }

  getProfessor() {
    const id_professor = localStorage.getItem('ProfessorCod') || ''
    this.updateService.getProfessor(id_professor).subscribe({
      next: (response) => {
        this.upProfData = {
          id: response.id,
          name: response.name,
          email: response.email,
          birthday: response.birthday
        }
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

  updateProfessor() {}

  comparePassword() {
    this.compare = this.upProfData.password === this.upProfData.confirmPassword
    if(!this.compare) {
      this.errorMessage = 'As senhas não são iguais'
    }
  }

  enviarFormulario() {
    this.comparePassword()

    if(this.compare) {
      console.log('enviado')
      // Chamar o metodo de update
    }
  }

}
