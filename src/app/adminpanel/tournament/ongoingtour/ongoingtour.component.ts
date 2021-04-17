import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { AdminService } from '../../../admin.service';
import { Role } from '../../../_models/role';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-ongoingtour',
  templateUrl: './ongoingtour.component.html',
  styleUrls: ['./ongoingtour.component.scss']
})
export class OngoingtourComponent implements OnInit {

  tournamentId: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private _adminservice: AdminService, private router: Router,private _authService: AuthService) { }

  public Tournament = [];
  public UpcomingFixtures = [];
  public StartedFixtures = [];
  public FinishedFixtures = [];
  public Summery = [];
  currentUser = this._authService.currentUserValue;

  serachFixture;

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.tournamentId = +params['tournamentId'];
    })

    this._adminservice.getSelectededTournament(this.tournamentId)
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

    this._adminservice.getUpcomingFixture(this.tournamentId)
      .subscribe((data) => {
        this.UpcomingFixtures = data;
      },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/home'])
            }
          }
        }
      );

    this._adminservice.getOngoingFixture(this.tournamentId)
      .subscribe((data) => {
        this.StartedFixtures = data;
      },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/home'])
            }
          }
        }
      );

    this._adminservice.getFinishedFixture(this.tournamentId)
      .subscribe((data) => {
        this.FinishedFixtures = data;
      },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/home'])
            }
          }
        }
      );

    this._adminservice.getSummery(this.tournamentId)
      .subscribe((data) => {
        this.Summery = data;
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
    if (this.currentUser.RoleId == Role.Admin) {
      return true;
    } else {
      return false;
    }
  }

}
