import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private http: HttpClient) { }

  getCoachTeams(userId) {
    let params = new HttpParams()
      .set('userId', userId)

    let _url1 = "http://localhost:3000/api/getcoachteams";
    return this.http.get<any>(_url1, { params });
  }

  getCoachProfile(userId) {
    let params = new HttpParams()
      .set('userId', userId)

    let _url1 = "http://localhost:3000/api/getcoachprofile";
    return this.http.get<any>(_url1, { params });
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  changeCoachProfile(user, userId) {

    let _url1 = "http://localhost:3000/api/changeprofilecoach";

    let params = new HttpParams()
      .set('userId', userId)

    return this.http.post<any>(_url1, user, { params })
  }

  changePassword(user, userId) {

    let _url1 = "http://localhost:3000/api/changePassword";

    let params = new HttpParams()
      .set('userId', userId)

    return this.http.post<any>(_url1, user, { params })
  }
}
