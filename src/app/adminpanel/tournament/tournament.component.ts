import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router'
import {AdminService} from '../../admin.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  constructor(private _adminservice: AdminService,private router : Router) { }

  public CreatedTournaments=[];
  public StartedTournaments=[];
  public FinishedTournaments=[];

  ngOnInit(): void {

    this._adminservice.getCreatedTournament()
    .subscribe((data)=>{
      this.CreatedTournaments=data;
    },
    err =>{
      if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          this.router.navigate(['/home'])
        }
      }
    }
    );

    this._adminservice.getStartedTournament()
    .subscribe((data)=>{
      this.StartedTournaments=data;
    },
    err =>{
      if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          this.router.navigate(['/home'])
        }
      }
    }
    );

    this._adminservice.getFinishedTournament()
    .subscribe((data)=>{
      this.FinishedTournaments=data;
    },
    err =>{
      if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          this.router.navigate(['/home'])
        }
      }
    }
    );
    
  }

  starttour(tournementId){
    this._adminservice.starttournament(tournementId)
      .subscribe(
        response => {
          this.ngOnInit();
          console.log('success', response)
        },
        error => console.error('Error!', error)
      );
  }

  finishtour(tournementId){
    this._adminservice.finishtournament(tournementId)
      .subscribe(
        response => {
          this.ngOnInit();
          console.log('success', response)
        },
        error => console.error('Error!', error)
      );
  }

  postponetour(tournementId){
    this._adminservice.postponetournament(tournementId)
      .subscribe(
        response => {
          this.ngOnInit();
          console.log('success', response)
        },
        error => console.error('Error!', error)
      );
  }}
