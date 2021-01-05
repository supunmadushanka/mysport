import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { CreateteamComponent } from './createteam/createteam.component';
import { HomeComponent } from './home/home.component';
import { SelectTeamComponent } from './select-team/select-team.component';
import { CoachComponent } from './signup/coach/coach.component';
import { ParentComponent } from './signup/parent/parent.component';
import { Player1Component } from './signup/player1/player1.component';
import { SelectionComponent } from './signup/selection/selection.component';
import { SignupComponent } from './signup/signup.component';
import { Player2Component } from './signup/player2/player2.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'select',
    component: SelectionComponent
    //canActivate: [AuthGuard]
  },
  { path: 'player2', component: Player2Component },
  { path: 'coach', component: CoachComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'createteam', component: CreateteamComponent },
  {
    path: 'player1',
    component: Player1Component
  },
  {
    path: 'selectTeam',
    component: SelectTeamComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
