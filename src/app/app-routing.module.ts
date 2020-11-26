import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutusComponent } from './aboutus/aboutus.component';
import { CreateteamComponent } from './createteam/createteam.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ParentHomeComponent } from './parent-home/parent-home.component';
import { CoachComponent } from './signup/coach/coach.component';
import { ParentComponent } from './signup/parent/parent.component';
import { SelectionComponent } from './signup/selection/selection.component';
import { SignupComponent } from './signup/signup.component';
import { Player2Component } from './signup/signup1/player2/player2.component';
import { Signup1Component } from './signup/signup1/signup1.component';

const routes: Routes = [
  {path : '',component : HomeComponent},
  {path : 'home',component : HomeComponent},
  {path : 'login',component : LoginComponent},
  {path : 'signup',component : SignupComponent},
  {path : 'select',component : SelectionComponent},
  {path : 'player',component : Signup1Component},
  {path : 'player2',component : Player2Component},
  {path : 'coach',component : CoachComponent},
  {path : 'parent',component : ParentComponent},
  {path : 'aboutus',component : AboutusComponent},
  {path : 'createteam',component : CreateteamComponent},
  {path : 'parentHome',component:ParentHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
