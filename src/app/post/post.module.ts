import { AppRoutingModule } from './../app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    PostComponent
  ],
  providers:[
  
  ]
})

export class PostModule { }
