import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms'
import { RegistrationService } from '../../../registration.service'

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.scss']
})
export class Player2Component implements OnInit {

  constructor(private fbPlayer2:FormBuilder,private _registrationservice:RegistrationService) { }

  ngOnInit(): void {
  }

  studentRegistration2=this.fbPlayer2.group({
    bloodSelect:['',[Validators.required]],
    rhfactor:['',Validators.required],
    heightPlayer:['',Validators.required],
    weightPlayer:['',Validators.required],
    diseasesPlayer:[''],
    PhysicalWeaknesses:['']
  })

  submit(){
    if(this.studentRegistration2.get('bloodSelect').valid&&
    this.studentRegistration2.get('rhfactor').valid&&
    this.studentRegistration2.get('heightPlayer').valid&&
    this.studentRegistration2.get('weightPlayer').valid
    ){
      return false;
    }
    else{
      return true;
    }
  }

  playerSubmit(){
    console.log(this.studentRegistration2.value)
    this._registrationservice.playerregister2(this.studentRegistration2.value)
    .subscribe(
      response => console.log('Success!', response),
        error => console.error('Error!', error)
    );
  }
}
