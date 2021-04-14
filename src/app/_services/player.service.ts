import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayerId() {
    let _url = environment.baseURL+"getplayerId";
    return this.http.get<any>(_url);
  }

  getPlayerTeams(userId) {
    let params = new HttpParams()
      .set('userId', userId)
    let _url = environment.baseURL+"getplayerteams";
    return this.http.get<any>(_url, { params });
  }

  getProfile(userId) {
    let params = new HttpParams()
      .set('userId', userId)
    let _url = environment.baseURL+"getplayerprofile";
    return this.http.get<any>(_url, { params });
  }

  getPlayerAchiev(userId) {
    let params = new HttpParams()
      .set('userId', userId)
    let _url = environment.baseURL+"getplayerachiev";
    return this.http.get<any>(_url, { params });
  }

  getPlayerFixtures(userId) {
    let params = new HttpParams()
      .set('userId', userId)
    let _url = environment.baseURL+"getplayerfixtures";
    return this.http.get<any>(_url, { params });
  }

  changeProfile(user, userId) {
    let _url = environment.baseURL+"changeprofileplayer";
    let params = new HttpParams()
      .set('userId', userId)
    return this.http.post<any>(_url, user, { params })
  }

  changePassword(user, userId) {
    let _url = environment.baseURL+"changePassword";
    let params = new HttpParams()
      .set('userId', userId)
    return this.http.post<any>(_url, user, { params })
  }

  addAchievPlayer(user, userId) {
    let _url = environment.baseURL+"addachievplayer";
    let params = new HttpParams()
      .set('userId', userId)
    return this.http.post<any>(_url, user, { params })
  }

  ChangeAvailability(user, userId,fixtureId,tournamentTeamId) {
    let _url = environment.baseURL+"changeavailability";
    let params = new HttpParams()
      .set('userId', userId)
      .set('fixtureId', fixtureId)
      .set('tournamentTeamId', tournamentTeamId)
    return this.http.post<any>(_url, user, { params })
  }

  ConfirmAvailability(user, userId,fixtureId,tournamentTeamId) {
    let _url = environment.baseURL+"confirmavailability";
    let params = new HttpParams()
      .set('userId', userId)
      .set('fixtureId', fixtureId)
      .set('tournamentTeamId', tournamentTeamId)
    return this.http.post<any>(_url, user, { params })
  }
}
