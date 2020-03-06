import { element } from 'protractor';

import { AuthService } from './../services/auth.service';
import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
  
  
})
export class NavBarComponent implements OnInit {
  @ViewChild('toggleButton') toggleButton: ElementRef<HTMLElement>;
  
  toggle:Boolean=false;
  loggedIn=false;
  userName:String;
  

  
  constructor(public authService: AuthService
             ) { }

  ngOnInit() {
    this.loggedIn=this.authService.isLoggedIn
    
    console.log(this.userName)
  }
  logOut(){
    this.authService.SignOut()
  }

  get isLogged():Boolean{
    return this.authService.isLoggedIn
  }
  //disarisi tiklandiginda KOD ILE BUTTON TIKLAMA
  clickedOutside(e: Event){
    let el: HTMLElement = this.toggleButton.nativeElement;
    if(el.className =='navbar-toggler'){
    el.click();
    }
  }


}
