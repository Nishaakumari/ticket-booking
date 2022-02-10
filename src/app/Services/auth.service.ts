import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router: Router) { }

  login(data:FormGroup){
    const email=data.value.email
    const password=data.value.password
    console.log(email,password)
    if (email=='nisha.kumari@intimetec.com' && password=='123456'){
      localStorage.setItem('user','Nisha')
      this.router.navigate(['/home']);
    }
  }
  logout(){
    localStorage.removeItem('user')
    this.router.navigate(['/'])
  }
  isLoggedin(){
    return localStorage.getItem('user') != null
  }
}
