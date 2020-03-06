import { AuthService } from './../services/auth.service';
import { SubsService } from './../services/subs.service';
import { Component, OnInit } from '@angular/core';
import { Subs } from '../services/subs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 members;
 object1;
  constructor(private subsService: SubsService,
              private authService: AuthService) { 
                }

  ngOnInit() {

      this.subsService.getAllMembers().subscribe(data=>{
          this.members= data 
          })
        
        
        
        }
      

}