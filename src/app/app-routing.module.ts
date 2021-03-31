import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { CreateteamComponent } from './adminpanel/createteam/createteam.component';
import { HomeComponent } from './home/home.component';
import { SelectTeamComponent } from './select-team/select-team.component';
import { CoachComponent } from './signup/coach/coach.component';
import { ParentComponent } from './signup/parent/parent.component';
import { Player1Component } from './signup/player1/player1.component';
import { SelectionComponent } from './signup/selection/selection.component';
import { SignupComponent } from './signup/signup.component';
import { Player2Component } from './signup/player2/player2.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './signup/admin/admin.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { CreatecoachComponent } from './adminpanel/createcoach/createcoach.component';
import { CreateplayerComponent } from './adminpanel/createplayer/createplayer.component';
import { AdminteamComponent } from './adminpanel/adminteam/adminteam.component';
import { CreatetournamentComponent } from './adminpanel/createtournament/createtournament.component';
import { TournamentComponent } from './adminpanel/tournament/tournament.component';
import { SelectedtourComponent } from './adminpanel/tournament/selectedtour/selectedtour.component';
import { CreatefixtureComponent } from './adminpanel/tournament/selectedtour/createfixture/createfixture.component';

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
  {path : 'admin',component:AdminComponent},
  {
    path: 'player1',
    component: Player1Component
  },
  {
    path: 'adminpanel',
    component: AdminpanelComponent
  },
  {
    path: 'createteam',
    component: CreateteamComponent
  },
  {
    path: 'createcoach',
    component: CreatecoachComponent
  },
  {
    path: 'createplayer',
    component: CreateplayerComponent
  },
  {
    path: 'createtourn',
    component: CreatetournamentComponent
  },
  {
    path: 'tournament',
    component: TournamentComponent
  },
  {
    path: 'selectTeam',
    component: SelectTeamComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'adminteam/:teamid',
    component: AdminteamComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'selectedtour/:tournamentId',
    component: SelectedtourComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'createfixture/:tournamentId',
    component: CreatefixtureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
