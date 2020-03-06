import { User } from 'firebase';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User;
  constructor(private auth: AuthService,
              private router:Router) { }

  ngOnInit() {
    if (this.auth.isLoggedIn){
      this.router.navigate(['news']);
    }
  }
  register(registerForm){
    let email= (registerForm.value).email
    let password=(registerForm.value).password
    let name= (registerForm.value).name
    
    this.auth.SignUp(email,password,name)
    
    
  }
}
