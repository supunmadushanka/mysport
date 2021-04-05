import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../_services/player.service'
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ViewChild } from '@angular/core';
import { PasswordValidator } from '../../shared/password.validator';

@Component({
  selector: 'app-playerprofile',
  templateUrl: './playerprofile.component.html',
  styleUrls: ['./playerprofile.component.scss']
})
export class PlayerprofileComponent implements OnInit {

  userId: number
  private sub: any;

  constructor(private fbAdmin:FormBuilder,private fb2: FormBuilder, private _playerservice: PlayerService, private router: Router, private route: ActivatedRoute, private fbPlayer1: FormBuilder) { }

  public PlayerTeams = [];
  public PlayerProfile = [];
  public Achievements = [];

  instituteId : number

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.userId = +params['playerId'];
    })

    this._playerservice.getPlayerTeams(this.userId)
      .subscribe((data) => {
        this.PlayerTeams = data;
      },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/home'])
            }
          }
        }
      );

    this._playerservice.getProfile(this.userId)
      .subscribe((data) => {
        this.PlayerProfile = data;
      },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/home'])
            }
          }
        }
      );

    this._playerservice.getPlayerAchiev(this.userId)
      .subscribe((data) => {
        this.Achievements = data;
      },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/home'])
            }
          }
        }
      );

  }

  achieve = this.fbAdmin.group({
    achievecontent: ['', [Validators.required, Validators.minLength(3)]],
  });

  @ViewChild('myModalClose2') modalClose2;

  achieveSubmit() {

    this.modalClose2.nativeElement.click();

    this._playerservice.addAchievPlayer(this.achieve.value, this.userId)
      .subscribe(
        response => {
          this.ngOnInit();
          console.log('success', response)
        },
        error => console.error('Error!', error)
      );


  }

  get firstNamePlayer() {
    return this.playerRegistration1.get('firstNamePlayer');
  }
  get secondNamePlayer() {
    return this.playerRegistration1.get('secondNamePlayer');
  }
  get teleNoPlayer() {
    return this.playerRegistration1.get('teleNoPlayer');
  }

  playerRegistration1 = this.fbPlayer1.group({
    firstNamePlayer: [this.PlayerProfile[0]?.playerFName, [Validators.minLength(3)]],
    secondNamePlayer: [this.PlayerProfile[0]?.playerLName, [Validators.minLength(3)]],
    perAddressPlayer: [this.PlayerProfile[0]?.playerAddress, [Validators.minLength(3)]],
    teleNoPlayer: [this.PlayerProfile[0]?.playerteleNum, [Validators.pattern('(07)[0-9]{8}')]],
    heightPlayer: [''],
    weightPlayer: [''],
    bloodSelect: [''],
  })

  @ViewChild('myModalClose1') modalClose1;

  close() {
    this.modalClose1.nativeElement.click();
  }

  @ViewChild('myModalClose3') modalClose3;

  close1() {
    this.modalClose1.nativeElement.click();
  }

  playerSubmit() {
    this._playerservice.changeProfile(this.playerRegistration1.value, this.userId)
      .subscribe(
        response => {
          this.ngOnInit();
          console.log('success');
        },
        error => {
          console.error('Error!', error)
        }
      )
  }

  get password() {
    return this.registrationForm.get('password');
  }

  registrationForm = this.fb2.group({
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.maxLength, Validators.pattern('[a-zA-Z1-9]*')]],
    confirmPassword: ['']
  }, { validator: PasswordValidator });

  onSubmit() {
    this._playerservice.changePassword(this.registrationForm.value, this.userId)
      .subscribe(
        response => {
          this.ngOnInit();
          console.log('success');
        },
        error => {
          console.error('Error!', error)
        }
      )
  }

}
