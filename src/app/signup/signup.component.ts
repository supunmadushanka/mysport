import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import { FormBuilder ,Validators}  from '@angular/forms';
import { PasswordValidator} from '../shared/password.validator';
import { RegistrationService} from '../registration.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router : Router,private fb2:FormBuilder,private _registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

  goToSelection(){
    this.router.navigate(['/select']);
  }


  get userEmail(){
    return this.registrationForm.get('userEmail');
  }
  get password(){
    return this.registrationForm.get('password');
  }



  registrationForm=this.fb2.group({
      userEmail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.maxLength,Validators.pattern('[a-zA-Z1-9]*')]],
      confirmPassword:['']
  },{validator : PasswordValidator});

  

  onSubmit(){
    console.log(this.registrationForm.value);

    this._registrationService.register(this.registrationForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );


    this.router.navigate(['/select']);
  }

}
