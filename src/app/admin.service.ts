import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('email', localStorage.getItem('email'));
  }

  getTeams() {
    let headers = new HttpHeaders();
    let _url1 = "http://localhost:3000/api/teams";
    return this.http.get<any>(_url1, {
      headers: headers
    });
  }

  getCoaches() {
    let headers = new HttpHeaders();
    let _url1 = "http://localhost:3000/api/coaches";
    return this.http.get<any>(_url1, {
      headers: headers
    });
  }

  getPlayers() {
    let headers = new HttpHeaders();
    let _url1 = "http://localhost:3000/api/players";
    return this.http.get<any>(_url1, {
      headers: headers
    });
  }

}
