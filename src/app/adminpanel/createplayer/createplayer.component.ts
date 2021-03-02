import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { RegistrationService } from '../../registration.service'
import {Router } from '@angular/router'
import { AuthService } from '../../auth.service'

@Component({
  selector: 'app-createplayer',
  templateUrl: './createplayer.component.html',
  styleUrls: ['./createplayer.component.scss']
})
export class CreateplayerComponent implements OnInit {

  constructor(private _auth: AuthService, private fbPlayer1: FormBuilder, private _registrationServive: RegistrationService,
    private router: Router,) { }

  ngOnInit(): void {
  }

  get firstNamePlayer() {
    return this.createPlayer.get('firstNamePlayer');
  }
  get secondNamePlayer() {
    return this.createPlayer.get('secondNamePlayer');
  }
  get teleNoPlayer() {
    return this.createPlayer.get('teleNoPlayer');
  }

  createPlayer = this.fbPlayer1.group({
    firstNamePlayer: ['', [Validators.required, Validators.minLength(3)]],
    secondNamePlayer: ['', [Validators.required, Validators.minLength(3)]],
    perAddressPlayer: ['', [Validators.required]],
    teleNoPlayer: ['', [Validators.required, Validators.pattern('(07)[0-9]{8}')]],
    dobpPlayer: ['', [Validators.required]],
    MFplayer: ['', [Validators.required]],
    emailAddress:['',[Validators.required]],
    password:['playerpass'],
  })

  playerSubmit() {
    this._auth.createplayer(this.createPlayer.value)
      .subscribe(
        response => {
          this._auth.setvalue(true)
          this.router.navigate(['/adminpanel']);
        },
        error => {
          console.error('Error!', error)
        }
      )
  }
}
