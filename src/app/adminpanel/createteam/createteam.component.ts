import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import {AuthService} from '../../auth.service'

@Component({
  selector: 'app-createteam',
  templateUrl: './createteam.component.html',
  styleUrls: ['./createteam.component.scss']
})
export class CreateteamComponent implements OnInit {

  constructor(private _auth :AuthService,private fbPlayer1:FormBuilder,private router : Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
  }

  register={
    "userEmail":localStorage.getItem('email'),
    "userType":localStorage.getItem('userType')
  }

  CreateTeam=this.fbPlayer1.group({
    TeamName:['',[Validators.required]],
    TeamStructure:['',[Validators.required]],
    Sport:['',[Validators.required]],
    Coach:['',[Validators.required]]
  })

  TeamSubmit(){
    this._auth.registerUser(this.register)
      .subscribe(
        response=>{
          this._auth.registerplayer(this.CreateTeam)
            .subscribe(
              response=>{
                this._auth.setvalue(true)
                this.router.navigate(['/selectTeam']);
              },
              error=>{
                console.error('Error!', error)
              }
            )
        },
        error=>{
          console.error('Error!', error)
        }
      );
  }

}
