import { AuthService } from './../services/auth.service';
import { SubsService } from './../services/subs.service';
import { GetNewsService } from './../services/get-news.service';
import { Component, OnInit } from '@angular/core';
import { NewsList } from './news';
import { Observable } from 'rxjs';
import { Subs } from '../services/subs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.css']
})
export class NewsMainComponent implements OnInit {
  loggedIn:boolean=false;
  newsList: NewsList;
  subsEmail: Subs;

  constructor( private newsService:GetNewsService,
               private subsService: SubsService,
               public authService: AuthService,
               private firestore: AngularFirestore) { }

  ngOnInit() {
    this.newsService.getAllNews().subscribe( response =>
    {this.newsList = response
    console.log(response)
    })
    
  }
 

 /* "use strict";
  function ($) {
      "use strict";
      // Mobile dropdown
      $('.has-dropdown>a').on('click', function () {
          $(this).parent().toggleClass('active');
      });
      // Aside Nav
      $(document).click(function (event) {
          if (!$(event.target).closest($('#nav-aside')).length) {
              if ($('#nav-aside').hasClass('active')) {
                  $('#nav-aside').removeClass('active');
                  $('#nav').removeClass('shadow-active');
              }
              else {
                  if ($(event.target).closest('.aside-btn').length) {
                      $('#nav-aside').addClass('active');
                      $('#nav').addClass('shadow-active');
                  }
              }
          }
      });
      $('.nav-aside-close').on('click', function () {
          $('#nav-aside').removeClass('active');
          $('#nav').removeClass('shadow-active');
      });
      $('.search-btn').on('click', function () {
          $('#nav-search').toggleClass('active');
      });
      $('.search-close').on('click', function () {
          $('#nav-search').removeClass('active');
      });
      // Parallax Background
      $.stellar({
          responsive: true
      });
  };*/
 

  subscribe(form){
      this.subsEmail=form.value
      this.subsService.createMember(this.subsEmail)
      console.log(this.subsEmail)
      
  }


}
