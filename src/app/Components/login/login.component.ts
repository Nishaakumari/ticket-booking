import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  })
  constructor(private formbuilder: FormBuilder, private router: Router,private auth:AuthService) {}

  ngOnInit(): void {
    if (this.auth.isLoggedin()) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
    this.auth.login(this.loginForm)
  }

  logout() {
    this.auth.logout()
  }
}
