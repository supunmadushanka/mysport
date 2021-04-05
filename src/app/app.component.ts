import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators }  from '@angular/forms';
import {Router} from '@angular/router'
import { AuthService } from './auth.service';
import { User} from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor( private fb1 : FormBuilder,private router : Router,public _auth : AuthService){
  }

  loginForm = this.fb1.group({
      userEmail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('[a-zA-Z1-9]*'),Validators.maxLength(20),Validators.minLength(8)]]
  })

  onSubmit(){

    console.log(this.loginForm.value);

    this._auth.loginUser(this.loginForm.value)
      .subscribe(
        response =>{
          console.log('Success!', response)
          localStorage.setItem('token',response.token)
          this.router.navigate(['/selectTeam']);
        },
        error => {
          console.error('Error!', error)
          alert("Invalid login")
          this.loginForm.reset()
      }
      );


    //
  }
}
