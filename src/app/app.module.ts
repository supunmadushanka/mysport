import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SelectionComponent } from './signup/selection/selection.component';
import { CoachComponent } from './signup/coach/coach.component';
import { ParentComponent } from './signup/parent/parent.component';
import { Player2Component } from './signup/player2/player2.component';
import { CreateteamComponent } from './adminpanel/createteam/createteam.component';
import { SelectTeamComponent } from './select-team/select-team.component';

import { AuthService } from './auth.service';
import { PlayerService } from './player.service';
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import { Player1Component } from './signup/player1/player1.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './signup/admin/admin.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatecoachComponent } from './adminpanel/createcoach/createcoach.component';
import { CreateplayerComponent } from './adminpanel/createplayer/createplayer.component';
import { AdminteamComponent } from './adminpanel/adminteam/adminteam.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SelectionComponent,
    CoachComponent,
    ParentComponent,
    Player2Component,
    CreateteamComponent,
    SelectTeamComponent,
    Player1Component,
    LoginComponent,
    AdminComponent,
    AdminpanelComponent,
    CreatecoachComponent,
    CreateplayerComponent,
    AdminteamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ],
  providers: [AuthService,AuthGuard,PlayerService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
