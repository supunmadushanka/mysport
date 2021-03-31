import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from './../../registration.service';
import { AuthService } from './../../auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private fbAdmin: FormBuilder, private _auth: AuthService) { }

  get firstNameAdmin() {
    return this.AdminRegistration.get('firstNameAdmin');
  }
  get lastNameAdmin() {
    return this.AdminRegistration.get('lastNameAdmin');
  }
  get teleNoAdmin() {
    return this.AdminRegistration.get('teleNoAdmin');
  }

  register = {
    "userEmail": localStorage.getItem('email'),
    "userType": localStorage.getItem('userType')
  }

  ngOnInit(): void {
  }

  AdminRegistration = this.fbAdmin.group({
    firstNameAdmin: ['', [Validators.required, Validators.minLength(3)]],
    lastNameAdmin: ['', [Validators.required, Validators.minLength(3)]],
    addressAdmin: ['', [Validators.required]],
    teleNoAdmin: ['', [Validators.required, Validators.pattern('(07)[0-9]{8}')]],
    genderAdmin: ['', [Validators.required]],
    InstituteName: ['', [Validators.required]],
    InstituteAddress: ['', [Validators.required]]
  });

  adminSubmit() {
    console.log(this.AdminRegistration.value);

    this._auth.registerUser(this.register)
      .subscribe(
        response => {
          this._auth.adminregister(this.AdminRegistration.value)
            .subscribe(
              response => {
                console.log('success', response),
                  localStorage.removeItem('userType'),
                  this.router.navigate(['/adminpanel']),
                  this._auth.setvalue(true)
              },
              error => console.error('Error!', error)
            );
        },
        error => {
          console.error('Error!', error)
        }
      );

  }

}
