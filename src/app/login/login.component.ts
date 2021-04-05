import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';
import { Role } from '../_models/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb1: FormBuilder, private router: Router, public _auth: AuthService) { }

  currentUser

  ngOnInit(): void {
  }

  loginForm = this.fb1.group({
    userEmail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z1-9]*'), Validators.maxLength(20), Validators.minLength(8)]]
  })

  route() {
    if (this.currentUser.RoleId == Role.Admin) {
      this.router.navigate(['/adminpanel'])
    } else if (this.currentUser.RoleId == Role.Coach) {
      this.router.navigate(['/institutecoach'])
    } else if (this.currentUser.RoleId == Role.Player) {
      this.router.navigate(['/player'])
    }else if (this.currentUser.RoleId == Role.Parent) {
      this.router.navigate(['/parentprofile'])
    }
  }

  onSubmit() {
    console.log(this.loginForm.value);

    this._auth.loginUser(this.loginForm.value)
      .subscribe(
        response => {
          console.log('Success!', response)
          this.currentUser = this._auth.currentUserValue;
          this.route();
        },
        error => {
          console.error('Error!', error)
          alert("Invalid login")
          this.loginForm.reset()
        }
      );



  }

}

