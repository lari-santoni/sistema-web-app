import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { LoginRequest } from '../../models/login-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login: LoginRequest = new LoginRequest()

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  getToken() {
    this.loginService.getLogin(this.login).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.access_token)
        localStorage.setItem('ProfessorName', response.prof)
        localStorage.setItem('ProfessorCod', response.profId)

        const adm = response.is_admin
        
        if(adm) {
          this.router.navigate(['/adm-home'])
        }else {
          this.router.navigate(['/professor-home'])
        }
      },
      error: (response) => {
        console.log(response)
      }
    })
  }
}
