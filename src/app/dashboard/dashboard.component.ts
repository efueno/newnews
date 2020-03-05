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
  constructor(private subsService: SubsService) { 
                }

  ngOnInit() {

      this.subsService.getAllMembers().subscribe(data=>{
          this.members= data 
          })
        }


}