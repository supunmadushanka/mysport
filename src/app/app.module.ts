import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Signup1Component } from './signup/signup1/signup1.component';
import { SelectionComponent } from './signup/selection/selection.component';
import { CoachComponent } from './signup/coach/coach.component';
import { ParentComponent } from './signup/parent/parent.component';
import { Player2Component } from './signup/signup1/player2/player2.component';
import { CreateteamComponent } from './createteam/createteam.component';
import { ParentHomeComponent } from './parent-home/parent-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutusComponent,
    Signup1Component,
    SelectionComponent,
    CoachComponent,
    ParentComponent,
    Player2Component,
    CreateteamComponent,
    ParentHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
