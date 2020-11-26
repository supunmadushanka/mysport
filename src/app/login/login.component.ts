import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public parent=[];
  public player=[];
  public coach=[];

  showParent:boolean=true;
  showPlayer:boolean=true;
  showCoach:boolean=true;

  constructor(private _playernService: PlayerService) { }

  ngOnInit(): void {

    this._playernService.getParent()
    .subscribe((data)=>{
      this.parent=data;
    });

    this._playernService.getPlayer()
    .subscribe((data)=>{
      this.player=data;
    });

    this._playernService.getCoach()
    .subscribe((data)=>{
      this.coach=data;
    });

  }

  showParents(){
    this.showParent=false;
    this.showPlayer=true;
    this.showCoach=true;
  }

  showPlayers(){
    this.showPlayer=false;
    this.showParent=true;
    this.showCoach=true;
  }

  showCoaches(){
    this.showCoach=false;
    this.showPlayer=true;
    this.showParent=true;
  }

}
