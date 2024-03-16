import { Component, ViewChild } from '@angular/core';
import { RegisterRequest } from '../../models/register-request';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  //criar método que chama o serviço
  register: RegisterRequest = new RegisterRequest()

  constructor(private registerService: RegisterService, private router: Router) {}

  ngOnInit(): void {}

  @ViewChild('form') form!: NgForm;

  regProfessor() {
    this.registerService.registerProfessor(this.register).subscribe({
      next: (response) => {
        const prof = response.name
        const pass = response.password
        // Retornar senha pra tela
        alert("A senha gerada do professor "+prof+" é "+pass)
        this.form.reset()
      },
      error: (response) => {
        console.log(response)
        if(response.error.statusCode === 401) {
          this.router.navigate(['/'])
        }
      }
    })
  }
}
