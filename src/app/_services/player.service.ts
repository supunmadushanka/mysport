import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayerId() {
    let _url1 = "http://localhost:3000/api/getplayerId";
    return this.http.get<any>(_url1);
  }

  getPlayerTeams(userId) {
    let params = new HttpParams()
      .set('userId', userId)

    let _url1 = "http://localhost:3000/api/getplayerteams";
    return this.http.get<any>(_url1, { params });
  }

  getProfile(userId) {
    let params = new HttpParams()
      .set('userId', userId)

    let _url1 = "http://localhost:3000/api/getplayerprofile";
    return this.http.get<any>(_url1, { params });
  }

  getPlayerAchiev(userId) {
    let params = new HttpParams()
      .set('userId', userId)

    let _url1 = "http://localhost:3000/api/getplayerachiev";
    return this.http.get<any>(_url1, { params });
  }

  getPlayerFixtures(userId) {
    let params = new HttpParams()
      .set('userId', userId)

    let _url1 = "http://localhost:3000/api/getplayerfixtures";
    return this.http.get<any>(_url1, { params });
  }

  ////////////////////////////////////////////////////////////////////////////////

  changeProfile(user, userId) {

    let _url1 = "http://localhost:3000/api/changeprofileplayer";

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

  addAchievPlayer(user, userId) {

    let _url1 = "http://localhost:3000/api/addachievplayer";

    let params = new HttpParams()
      .set('userId', userId)

    return this.http.post<any>(_url1, user, { params })
  }

  ChangeAvailability(user, userId,fixtureId,tournamentTeamId) {

    let _url1 = "http://localhost:3000/api/changeavailability";

    let params = new HttpParams()
      .set('userId', userId)
      .set('fixtureId', fixtureId)
      .set('tournamentTeamId', tournamentTeamId)

    return this.http.post<any>(_url1, user, { params })
  }
}
