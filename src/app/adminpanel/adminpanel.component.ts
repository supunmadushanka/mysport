import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router'
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {

  constructor(private _adminservice: AdminService,private router : Router) { }

  public Teams=[];
  public Coaches=[];
  public Players=[];

  ngOnInit(): void {

    this._adminservice.getTeams()
    .subscribe((data)=>{
      this.Teams=data;
    },
    err =>{
      if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          this.router.navigate(['/home'])
        }
      }
    }
    );

    this._adminservice.getCoaches()
    .subscribe((data)=>{
      this.Coaches=data;
    },
    err =>{
      if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          this.router.navigate(['/home'])
        }
      }
    }
    );

    this._adminservice.getPlayers()
    .subscribe((data)=>{
      this.Players=data;
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
