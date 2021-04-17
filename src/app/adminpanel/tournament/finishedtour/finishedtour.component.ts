import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'app-finishedtour',
  templateUrl: './finishedtour.component.html',
  styleUrls: ['./finishedtour.component.scss']
})
export class FinishedtourComponent implements OnInit {

  tournamentId: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private _adminservice: AdminService, private router: Router) { }

  public Tournament = [];
  public FinishedFixtures = [];
  public Summery = [];

  wininstitute: string
  serachFixture

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

        if (this.Summery[0]?.point > this.Summery[1]?.point) {
          this.wininstitute = this.Summery[0]?.instituteName
        } else {
          this.wininstitute = this.Summery[1]?.instituteName
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

}
