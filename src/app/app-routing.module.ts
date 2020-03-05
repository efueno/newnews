import { PostComponent } from './post/post/post.component';

import { AuthGuard } from './guards/auth.guard';
import { ForgotComponent } from './forgot/forgot.component';

import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { NewsMainComponent } from './news-main/news-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostModule } from './post/post.module';


const routes: Routes = [
  {path:'news', component: NewsMainComponent},
  {path:'', redirectTo:'news', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'contact', component:ContactComponent},
  {path:'forgot', component:ForgotComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'news/:id', component: PostComponent}
];

@NgModule({
  imports: [PostModule,
    RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
