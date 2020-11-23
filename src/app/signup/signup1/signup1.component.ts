import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms'
import { RegistrationService } from '../../registration.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.scss']
})
export class Signup1Component implements OnInit {

  constructor(private fbPlayer1:FormBuilder, private _registrationServive: RegistrationService,private router : Router) { }

  get firstNamePlayer(){
    return this.studentRegistration1.get('firstNamePlayer');
  }
  get secondNamePlayer(){
    return this.studentRegistration1.get('secondNamePlayer');
  }
  get teleNoPlayer(){
    return this.studentRegistration1.get('teleNoPlayer');
  }

  ngOnInit(): void {
  }

  studentRegistration1=this.fbPlayer1.group({
    firstNamePlayer:['',[Validators.required,Validators.minLength(3)]],
    secondNamePlayer:['',[Validators.required,Validators.minLength(3)]],
    perAddressPlayer:['',[Validators.required]],
    curAddressPlayer:['',[Validators.maxLength(50)]],
    teleNoPlayer:['',[Validators.required,Validators.pattern('(07)[0-9]{8}')]],
    dobpPlayer:['',[Validators.required]],
    MFplayer:['',[Validators.required]],
    schoolPlayer:['']
  })

  submit(){
    if(this.firstNamePlayer.valid && this.secondNamePlayer.valid && this.studentRegistration1.get('perAddressPlayer').valid && this.studentRegistration1.get('teleNoPlayer').valid && this.studentRegistration1.get('dobpPlayer').valid && this.studentRegistration1.get('MFplayer').valid){
      return false;
    }
    else{
      return true;
    }
  }

  playerSubmit(){
    console.log(this.studentRegistration1.value)
    this._registrationServive.playerregister1(this.studentRegistration1.value)
    .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
    );
    this.router.navigate(['/player2']);
  }

}
