import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient) { }

  getPlayers(userId) {
    let params = new HttpParams()
      .set('userId', userId)

    let _url1 = "http://localhost:3000/api/getparentplayers";
    return this.http.get<any>(_url1, { params });
  }

  getParentProfile(userId) {
    let params = new HttpParams()
      .set('userId', userId)

    let _url1 = "http://localhost:3000/api/getparentprofile";
    return this.http.get<any>(_url1, { params });
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  changeParentProfile(user, userId) {

    let _url1 = "http://localhost:3000/api/changeprofileparent";

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
