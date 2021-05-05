import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../_services/player.service'
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'
import { ViewChild } from '@angular/core';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  userId: number

  constructor(private fbReason: FormBuilder, private fbAdmin: FormBuilder, private fb2: FormBuilder, private _playerservice: PlayerService, private router: Router, private route: ActivatedRoute, private fbPlayer1: FormBuilder) { }

  public PlayerTeams = [];
  public PlayerProfile = [];
  public Achievements = [];
  public Fixtures = [];
  public Strengths = [];
  public Weaknesses = [];
  public Parents = [];
  public PlayerCode = [];

  instituteId: number
  fixtureId: number
  tournamentTeamId: number

  ngOnInit(): void {

    this._playerservice.getPlayerId()
      .subscribe((data) => {
        this.userId = data[0]?.userId

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

        this._playerservice.getPlayerCode(this.userId)
          .subscribe((data) => {
            this.PlayerCode = data;
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

        this._playerservice.getPlayerFixtures(this.userId)
          .subscribe((data) => {
            this.Fixtures = data;
          },
            err => {
              if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                  this.router.navigate(['/home'])
                }
              }
            }
          );

        this._playerservice.getPlayerStrengths(this.userId)
          .subscribe((data) => {
            this.Strengths = data;
          },
            err => {
              if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                  this.router.navigate(['/home'])
                }
              }
            }
          );

        this._playerservice.getPlayerWeaknesses(this.userId)
          .subscribe((data) => {
            this.Weaknesses = data;
          },
            err => {
              if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                  this.router.navigate(['/home'])
                }
              }
            }
          );

        this._playerservice.getPlayerParents(this.userId)
          .subscribe((data) => {
            this.Parents = data;
          },
            err => {
              if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                  this.router.navigate(['/home'])
                }
              }
            }
          );
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

  @ViewChild('myModalClose2') modalClose2;

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
          this.playerRegistration1.reset();
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

  set(fixtureId, tournamentTeamId) {
    this.fixtureId = fixtureId[0]
    this.tournamentTeamId = tournamentTeamId
  }

  Reason = this.fbReason.group({
    availabilityreson: ['', [Validators.required, Validators.minLength(5)]],
  });

  @ViewChild('myModalClose4') modalClose4;

  changeavailability() {
    this.modalClose2.nativeElement.click();
    if (confirm('Are you sure to change this availability?') == true) {
      this._playerservice.ChangeAvailability(this.Reason.value, this.userId, this.fixtureId, this.tournamentTeamId)
        .subscribe(
          response => {
            this.ngOnInit();
            console.log('success', response)
          },
          error => console.error('Error!', error)
        );
    }
  }

}
