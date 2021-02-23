import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../registration.service'
import {ActivatedRoute, Router} from '@angular/router'


@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  constructor(private _registrationService : RegistrationService , private router : Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
  }

  selectUser(type : string){
    console.log(type)
    if(type=='ur0002'){
      this.router.navigate(['/player1']);
      localStorage.removeItem('userType')
      localStorage.setItem('userType',"ur0002")
    }else if(type=='ur0001'){
      this.router.navigate(['/admin']);
      localStorage.removeItem('userType')
      localStorage.setItem('userType',"ur0001")
    }else{
      this.router.navigate(['/parent']);
      localStorage.removeItem('userType')
      localStorage.setItem('userType',"ur0003")
    }
  }
 

}
