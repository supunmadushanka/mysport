import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms'
import { RegistrationService } from '../../registration.service'
import {ActivatedRoute, Router} from '@angular/router'
import {AuthService} from '../../auth.service'

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.scss']
})
export class Player1Component implements OnInit {

  constructor(private _auth :AuthService,private fbPlayer1:FormBuilder, private _registrationServive: RegistrationService,private router : Router,private route :ActivatedRoute) { }
  
  ngOnInit(): void {
  }

  get firstNamePlayer(){
    return this.playerRegistration1.get('firstNamePlayer');
  }
  get secondNamePlayer(){
    return this.playerRegistration1.get('secondNamePlayer');
  }
  get teleNoPlayer(){
    return this.playerRegistration1.get('teleNoPlayer');
  }

  register={
    "userEmail":localStorage.getItem('email'),
    "userType":localStorage.getItem('userType')
  }

  playerRegistration1=this.fbPlayer1.group({
    firstNamePlayer:['',[Validators.required,Validators.minLength(3)]],
    secondNamePlayer:['',[Validators.required,Validators.minLength(3)]],
    perAddressPlayer:['',[Validators.required]],
    teleNoPlayer:['',[Validators.required,Validators.pattern('(07)[0-9]{8}')]],
    dobpPlayer:['',[Validators.required]],
    MFplayer:['',[Validators.required]]
  })

  playerSubmit(){
    this._auth.registerUser(this.register)
      .subscribe(
        response=>{
          this._auth.registerplayer(this.playerRegistration1)
            .subscribe(
              response=>{
                this._auth.setvalue(true)
                this.router.navigate(['/selectTeam']);
                this._auth.setvalue(true)
              },
              error=>{
                console.error('Error!', error)
              }
            )
        },
        error=>{
          console.error('Error!', error)
        }
      );
  }

}
