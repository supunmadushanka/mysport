import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HomepageService } from '../_services/homepage.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','../mystyles/templatemo-finance-business.css']
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder,private _home: HomepageService) { }

  public Institutes=[];

  ngOnInit(): void {
  }

  sendmail = this.fb.group({
    FullName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    message: ['', [Validators.required]]
  })

  ReviewSubmit() {
    this._home.SendReview(this.sendmail.value)
      .subscribe(
        response => {
          this.ngOnInit();
          alert('Email successfully send')
          this.sendmail.reset();
        },
        error => {
          console.error('Error!', error)
        }
      )
  }

}
