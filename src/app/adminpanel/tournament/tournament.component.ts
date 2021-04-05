import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { AdminService } from '../../admin.service';

import { Role } from '../../_models/role';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  constructor(private _adminservice: AdminService, private router: Router, private _authService: AuthService) { }

  currentUser = this._authService.currentUserValue;

  public CreatedTournaments = [];
  public StartedTournaments = [];
  public FinishedTournaments = [];
  public NewTournaments = [];

  ngOnInit(): void {

    this._adminservice.getCreatedTournament()
      .subscribe((data) => {
        this.CreatedTournaments = data;
      },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/home'])
            }
          }
        }
      );

    this._adminservice.getStartedTournament()
      .subscribe((data) => {
        this.StartedTournaments = data;
      },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/home'])
            }
          }
        }
      );

    this._adminservice.getFinishedTournament()
      .subscribe((data) => {
        this.FinishedTournaments = data;
      },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/home'])
            }
          }
        }
      );


    this._adminservice.getNewTour()
      .subscribe((data) => {
        this.NewTournaments = data;
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

  back(){
    if (this.currentUser.RoleId == Role.Admin) {
      this.router.navigate(['/adminpanel'])
    } else if(this.currentUser.RoleId == Role.Coach){
      this.router.navigate(['/institutecoach'])
    }else if(this.currentUser.RoleId == Role.Player){
      this.router.navigate(['/player'])
    }
  }

  show() {
    if (this.currentUser.RoleId == Role.Admin) {
      return true;
    } else {
      return false;
    }
  }

  starttour(tournementId) {
    this._adminservice.starttournament(tournementId)
      .subscribe(
        response => {
          this.ngOnInit();
          console.log('success', response)
        },
        error => console.error('Error!', error)
      );
  }

  finishtour(tournementId) {
    this._adminservice.finishtournament(tournementId)
      .subscribe(
        response => {
          this.ngOnInit();
          console.log('success', response)
        },
        error => console.error('Error!', error)
      );
  }

  postponetour(tournementId) {
    this._adminservice.postponetournament(tournementId)
      .subscribe(
        response => {
          this.ngOnInit();
          console.log('success', response)
        },
        error => console.error('Error!', error)
      );
  }

  joinTour(tournementId) {
    this._adminservice.JoinTournament(this.CreatedTournaments,tournementId)
      .subscribe(
        response => {
          this.ngOnInit();
          console.log('success', response)
        },
        error => console.error('Error!', error)
      );
  }
}