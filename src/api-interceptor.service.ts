import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('antes do token')
    // const token = (typeof localStorage.getItem('token') !== 'undefined') ? localStorage.getItem('token') : ''
    // console.log('t', token)
    
    // req = req.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${token}`
    //   }
    // });
    return next.handle(req);
  }
}