import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http'
import { Router } from '@angular/router'
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _checkuserUrl = "http://localhost:3000/api/checkuser";
  private _tempregiUrl = "http://localhost:3000/api/tempregister";
  private _playerregister = "http://localhost:3000/api/playerregister";
  private _parentregister = "http://localhost:3000/api/parentregister";
  private _adminregister = "http://localhost:3000/api/adminregister";
  private _sendemail = "http://localhost:3000/api/sendmail";

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
      .pipe(map(user => {
        if (user && user.token) {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
      .pipe(map(user => {
        if (user && user.token) {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  getToken() {
    return this.currentUserValue.token
  }

  getEmail() {
    return this.currentUserValue.userEmail
  }


  logoutUser() {

    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);

    localStorage.removeItem('email')
    localStorage.removeItem('userType')
    this.router.navigate(['/home'])
  }

  ////////////////////////////////////////////////////////////////////////////////

  userEmail = {
    "userEmail": localStorage.getItem('email')
  }

  chechuser(user) {
    return this.http.post<any>(this._checkuserUrl, user);
  }

  sendMail(user) {
    return this.http.post<any>(this._sendemail, user);
  }

  tempregister(user) {
    return this.http.post<any>(this._tempregiUrl, user);
  }

  registerplayer(user,email) {
    let params = new HttpParams()
      .set('email', email)
    return this.http.post<any>(this._playerregister, user,{ params })
  }

  adminregister(user) {
    return this.http.post<any>(this._adminregister, user)
  }

  ParentRegister(user) {
    return this.http.post<any>(this._parentregister, user)
  }

}
