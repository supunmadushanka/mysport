import { Component } from '@angular/core';
import { FormBuilder, Validators }  from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pr1';

  constructor( private fb1 : FormBuilder){}

  loginForm = this.fb1.group({
      userEmail:['',[Validators.required,Validators.email,Validators.maxLength(20),Validators.minLength(8),Validators.pattern('[a-zA-Z1-9]*')]],
      password:['',Validators.required]
  })
}
