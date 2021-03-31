import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { AdminService } from '../../../admin.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-selectedtour',
  templateUrl: './selectedtour.component.html',
  styleUrls: ['./selectedtour.component.scss']
})
export class SelectedtourComponent implements OnInit {

  tournamentId: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private _adminservice: AdminService, private router: Router) { }

  public Tournament = [];
  public UpcomingFixtures = [];

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

  }

  @ViewChild('myModalClose') modalClose;

  closeModel(){
    this.modalClose.nativeElement.click();
  }

}
