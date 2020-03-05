import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forgot:boolean=false;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    if (this.authService.isLoggedIn == true){
      this.router.navigate(['/dashboard']);
    }
  }
  login(loginForm){
    this.authService.SignIn((loginForm.value).email, (loginForm.value).password)
  }
  loginForgotChanger(){
    this.forgot= !this.forgot
  }

}
