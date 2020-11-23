import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url1 = 'http://localhost:3000/enroll';
  _url2 = 'http://localhost:3000/coachRegi';
  _url3 = 'http://localhost:3000/parentRegi';
  _url4 = 'http://localhost:3000/playereRegi1';
  _url5 = 'http://localhost:3000/playereRegi2';

  constructor( private _http: HttpClient) { }

  register(userData){
    return this._http.post<any>(this._url1, userData);
  }

  coachregister(userData){
    return this._http.post<any>(this._url2, userData);
  }

  parentregister(userData){
    return this._http.post<any>(this._url3, userData);
  }

  playerregister1(userData){
    return this._http.post<any>(this._url4, userData);
  }

  playerregister2(userData){
    return this._http.post<any>(this._url5, userData);
  }

}
