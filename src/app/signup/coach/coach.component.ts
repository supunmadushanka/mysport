import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import { FormBuilder ,Validators}  from '@angular/forms';
import { RegistrationService} from './../../registration.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit {

  constructor(private router : Router,private fbCoach:FormBuilder,private _registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

  get firstNameCoach(){
    return this.coachRegistration.get('firstNameCoach');
  }
  get lastNameCoach(){
    return this.coachRegistration.get('lastNameCoach');
  }
  get teleNoCoach(){
    return this.coachRegistration.get('teleNoCoach');
  }

  public sports = [ "Cricket" , "FootBall" , "Rugby"];

  coachRegistration=this.fbCoach.group({
    firstNameCoach:['',[Validators.required,Validators.minLength(3)]],
    lastNameCoach:['',[Validators.required,Validators.minLength(3)]],
    addressCoach:['',[Validators.required]],
    teleNoCoach:['',[Validators.required,Validators.pattern('(07)[0-9]{8}')]],
    genderCoach:['',[Validators.required]],
    sportCoach:['',[Validators.required]],
    workExCoach:[''],
    otherQuCoach:['']
  });

  couchSubmit(){
    console.log(this.coachRegistration.value);

    this._registrationService.coachregister(this.coachRegistration.value)
      .subscribe(
        response=> console.log('success',response),
        error => console.error('Error!', error)
      );
    
  }

}
