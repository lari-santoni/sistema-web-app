import { Component, OnInit, ViewChild } from '@angular/core';
import { UpdateProfData } from '../../../account/models/update-professor';
import { UpdatesService } from '../../../account/services/updates.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit{
  upAdmData: UpdateProfData = new UpdateProfData()
  errorAdmMessage?: string
  compare: boolean = true

  constructor(private updateAdmService: UpdatesService, private router: Router) {}

  ngOnInit(): void {
    this.getAdm()
  }

  backHomeAdm(){
    this.router.navigate(['/adm-home'])
  }

  getAdm() {
    const id_adm = localStorage.getItem('ProfessorCod') || ''
    this.updateAdmService.getProfessor(id_adm).subscribe({
      next: (response) => {
        this.upAdmData = {
          id: response.id,
          name: response.name,
          email: response.email,
        }
      },
      error: (response) => {
        if(response.error.statusCode === 401) {
          this.router.navigate(['/'])
        }
      }
    })
  }

  @ViewChild('formUpdateAdm') formUpdateAdm!: NgForm

  upAdm() {
    this.updateAdmService.updateProfessor(this.upAdmData).subscribe({
      next: (response) => {
        alert('Dados alterados com sucesso')
        window.location.reload()
      },
      error: (response) => {
        if(response.error.statusCode === 401) {
          this.router.navigate(['/'])
        }
      }
    })
  }

  compareAdmPassword() {
    this.compare = this.upAdmData.password === this.upAdmData.confirmPassword
    if(!this.compare) {
      this.errorAdmMessage = 'As senhas não são iguais'
    }
  }

  sendAdmForm() {
    this.compareAdmPassword()
    
    if(this.compare){
      this.upAdm()
    }
  }

}
