import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router'
import { TreeError } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _checkuserUrl = "http://localhost:3000/api/checkuser";
  private _tempregiUrl = "http://localhost:3000/api/tempregister";
  private _playerregister = "http://localhost:3000/api/playerregister";
  private _adminregister = "http://localhost:3000/api/adminregister";


  constructor(private http:HttpClient, private router : Router) {}

  private log=false

  userEmail={
    "userEmail":localStorage.getItem('email')
  }

  setvalue(value){
    this.log=value
  }

  registerUser(user){
    return this.http.post<any>(this._registerUrl,user);
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user);
  }

  chechuser(user){
    return this.http.post<any>(this._checkuserUrl,user);
  }

  tempregister(user){
    return this.http.post<any>(this._tempregiUrl,user);
  }

  registerplayer(user){
    return this.http.post<any>(this._playerregister,user+this.userEmail)
  }

  adminregister(user){
    return this.http.post<any>(this._adminregister,user)
  }


  loggedIn(){
    if(!!localStorage.getItem('token')&&this.log){
      return true
    }
    else{
      false
    }
    //return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('userType')
    this.log=false
    this.router.navigate(['/home'])
  }
}
