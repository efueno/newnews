import { RouterModule } from '@angular/router';
import { PostModule } from './post/post.module';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from "angularfire2";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewsMainComponent } from './news-main/news-main.component';

import { HttpClientModule }    from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {  FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ClickOutsideModule } from 'ng-click-outside';
import { environment } from 'src/environments/environment';
import { Config } from 'protractor';


const config = environment.firebase


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewsMainComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    DashboardComponent,
    ForgotComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    PostModule,
    ClickOutsideModule

    

    
    
  ],
  providers: [AuthService,AuthGuard,AngularFireModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
