import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../../../admin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { Role } from '../../../../_models/role';
import { AuthService } from '../../../../auth.service';

@Component({
  selector: 'app-ongoingfixture',
  templateUrl: './ongoingfixture.component.html',
  styleUrls: ['./ongoingfixture.component.scss']
})
export class OngoingfixtureComponent implements OnInit {

  fixtureId: number;
  private sub: any;
  score: number;
  currentUserId: number;

  public FixtureDetails = [];
  public firstTeamPlayers = [];
  public secondTeamPlayers = [];
  public Tournament = [];
  public Total1 = [];
  public Total2 = [];

  wonteam: number
  wonscore: number
  lossteam: number
  lossscore: number
  wonteamname: string

  constructor(private route: ActivatedRoute, private _adminservice: AdminService, private router: Router, private _authService: AuthService) { }

  currentUser = this._authService.currentUserValue;

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.fixtureId = +params['fixtureId'];
    })

    this._adminservice.UpcomingFixtureDetails(this.fixtureId)
      .subscribe((data) => {
        this.FixtureDetails = data;

        this._adminservice.getFixtureTeamPlayers(this.fixtureId, this.FixtureDetails[0].tournamentTeamId)
          .subscribe((data) => {
            this.firstTeamPlayers = data;
          },
            err => {
              if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                  this.router.navigate(['/home'])
                }
              }
            }
          );

        this._adminservice.getFixtureTeamPlayers(this.fixtureId, this.FixtureDetails[1].tournamentTeamId)
          .subscribe((data) => {
            this.secondTeamPlayers = data;
          },
            err => {
              if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                  this.router.navigate(['/home'])
                }
              }
            }
          );

        this._adminservice.getSelectededTournament(this.FixtureDetails[1].tournementId)
          .subscribe((data) => {
            this.Tournament = data;
          },
            err => {
              if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                  this.router.navigate(['/home'])
                }
              }
            }
          );

        this._adminservice.getTotal(this.fixtureId, this.FixtureDetails[0].tournamentTeamId)
          .subscribe((data) => {
            this.Total1 = data;
          },
            err => {
              if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                  this.router.navigate(['/home'])
                }
              }
            }
          );

        this._adminservice.getTotal(this.fixtureId, this.FixtureDetails[1].tournamentTeamId)
          .subscribe((data) => {
            this.Total2 = data;
          },
            err => {
              if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                  this.router.navigate(['/home'])
                }
              }
            }
          );

        if (this.Total1[0]?.sumScore > this.Total2[0]?.sumScore) {
          this.wonteamname = this.FixtureDetails[0]?.teamName
        } else {
          this.wonteamname = this.FixtureDetails[1]?.teamName
        }
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

  show() {
    if (this.currentUser.RoleId == Role.Admin || this.currentUser.RoleId == Role.Coach) {
      return true;
    } else {
      return false;
    }
  }

  currentPlayer(userId) {
    this.currentUserId = userId
  }

  @ViewChild('myModalClose1') modalClose1;
  @ViewChild('myModalClose2') modalClose2;

  closeModel() {
    this.modalClose1.nativeElement.click();
  }

  submitPlayerScore() {
    this._adminservice.changePlayerScore(this.firstTeamPlayers, this.fixtureId, this.currentUserId, this.score, this.FixtureDetails[0].tournamentTeamId)
      .subscribe(
        response => {
          this.modalClose1.nativeElement.click();
          this.ngOnInit();
          console.log('success', response)
        },
        error => console.error('Error!', error)
      );
  }

  submitPlayerScore1() {
    this._adminservice.changePlayerScore(this.secondTeamPlayers, this.fixtureId, this.currentUserId, this.score, this.FixtureDetails[1].tournamentTeamId)
      .subscribe(
        response => {
          this.modalClose2.nativeElement.click();
          this.ngOnInit();
          console.log('success', response)
        },
        error => console.error('Error!', error)
      );
  }

  postponefixture() {
    this._adminservice.PostponeFixture(this.FixtureDetails, this.fixtureId)
      .subscribe(
        response => {
          this.ngOnInit();
          console.log('success', response)
          this.router.navigate(['/ongoingtour', this.FixtureDetails[1].tournementId]);
        },
        error => {
          console.error('Error!', error)
        }
      );
  }

  finishfixture() {

    if (this.Total1[0]?.sumScore > this.Total2[0]?.sumScore) {

      this.wonteam = this.FixtureDetails[0].tournamentTeamId
      this.lossteam = this.FixtureDetails[1].tournamentTeamId
      this.wonscore = this.Total1[0]?.sumScore
      this.lossscore = this.Total2[0]?.sumScore

      this.wonteamname = this.FixtureDetails[0].teamName

    } else {

      this.wonteam = this.FixtureDetails[1].tournamentTeamId
      this.lossteam = this.FixtureDetails[0].tournamentTeamId
      this.wonscore = this.Total2[0]?.sumScore
      this.lossscore = this.Total1[0]?.sumScore

      this.wonteamname = this.FixtureDetails[1].teamName

    }

    this._adminservice.finishFixture(this.FixtureDetails, this.fixtureId, this.wonteam, this.wonscore, this.lossteam, this.lossscore)
      .subscribe(
        response => {
          this.ngOnInit();
          console.log('success', response)
          this.router.navigate(['/ongoingtour', this.FixtureDetails[1].tournementId]);
        },
        error => console.error('Error!', error)
      );
  }

  finished() {
    if (this.FixtureDetails[0]?.fixtureState == 1) {
      return true;
    } else {
      return false;
    }
  }

  showwhenfinished() {
    if (this.FixtureDetails[0]?.fixtureState == 0) {
      return true;
    } else {
      return false;
    }
  }

}
