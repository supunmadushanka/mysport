import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import {AdminService} from '../../admin.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-adminteam',
  templateUrl: './adminteam.component.html',
  styleUrls: ['./adminteam.component.scss']
})
export class AdminteamComponent implements OnInit {

  teamid: number;
  private sub : any;

  constructor(private route:ActivatedRoute,private _adminservice: AdminService,private router : Router) { }

  public TeamPlayers=[];
  public TeamDetails=[];

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params =>{
      this.teamid = +params['teamid'];
    })
    
    this._adminservice.getTeamPlayers(this.teamid)
    .subscribe((data)=>{
      this.TeamPlayers=data;
    },
    err =>{
      if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          this.router.navigate(['/home'])
        }
      }
    }
    );

    this._adminservice.getTeamDetails(this.teamid)
    .subscribe((data)=>{
      this.TeamDetails=data;
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

}
