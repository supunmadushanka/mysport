import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getTeams() {
    let _url1 = "http://localhost:3000/api/teams";
    return this.http.get<any>(_url1);
  }

  getTeamPlayers(teamId) {
    let params = new HttpParams()
      .set('teamId', teamId)
    let _url1 = "http://localhost:3000/api/teamplayers";
    return this.http.get<any>(_url1, { params });
  }

  getTeamDetails(teamId) {
    let params = new HttpParams()
      .set('teamId', teamId)
    let _url1 = "http://localhost:3000/api/teamdetails";
    return this.http.get<any>(_url1, { params });
  }

  getTeamAchieve(teamId) {
    let params = new HttpParams()
      .set('teamId', teamId)
    let _url1 = "http://localhost:3000/api/teamachieve";
    return this.http.get<any>(_url1, { params });
  }

  getaddplayers(teamId) {
    let params = new HttpParams()
      .set('teamId', teamId)
    let _url1 = "http://localhost:3000/api/addplayerview";
    return this.http.get<any>(_url1, { params });
  }

  getCoaches() {
    let _url1 = "http://localhost:3000/api/coaches";
    return this.http.get<any>(_url1);
  }

  getPlayers() {
    let _url1 = "http://localhost:3000/api/players";
    return this.http.get<any>(_url1);
  }

  getSports() {
    let _url1 = "http://localhost:3000/api/sports";
    return this.http.get<any>(_url1);
  }

  getStructure() {
    let _url1 = "http://localhost:3000/api/structure";
    return this.http.get<any>(_url1);
  }

  getCreatedTournament() {
    let _url1 = "http://localhost:3000/api/getcreatedtournament";
    return this.http.get<any>(_url1);
  }

  getStartedTournament() {
    let _url1 = "http://localhost:3000/api/getstartedtournament";
    return this.http.get<any>(_url1);
  }

  getFinishedTournament() {
    let _url1 = "http://localhost:3000/api/getfinishedtournament";
    return this.http.get<any>(_url1);
  }

  getSelectededTournament(tournamentId) {

    let params = new HttpParams()
      .set('tournamentId', tournamentId)

    let _url1 = "http://localhost:3000/api/getselectedtournament";
    return this.http.get<any>(_url1, { params });
  }

  getFixtureFirstTeam(tournamentId, strutureId) {

    let params = new HttpParams()
      .set('tournamentId', tournamentId)
      .set('strutureId', strutureId)

    let _url1 = "http://localhost:3000/api/getfixturefirstteam";
    return this.http.get<any>(_url1, { params });
  }

  getUpcomingFixture(tournementId) {

    let params = new HttpParams()
      .set('tournementId', tournementId)

    let _url1 = "http://localhost:3000/api/getupcomingfixture";
    return this.http.get<any>(_url1, { params });
  }

  /////////////////////////////////////////////////////////////////////////

  private _teamregister = "http://localhost:3000/api/teamregister";
  private addAchievement = "http://localhost:3000/api/addachieve";
  private addplayer = "http://localhost:3000/api/addplayer";
  private removeplayer = "http://localhost:3000/api/removeplayer";
  private createtournament = "http://localhost:3000/api/createtournament";
  private Starttournament = "http://localhost:3000/api/starttournament";
  private Postponetournament = "http://localhost:3000/api/postponetournament";
  private Finishtournament = "http://localhost:3000/api/finishtournament";
  private createFixture = "http://localhost:3000/api/registerfixture";

  registerteam(user) {
    return this.http.post<any>(this._teamregister, user)
  }

  addAchieve(user, teamId) {
    let params = new HttpParams()
      .set('teamId', teamId)

    return this.http.post<any>(this.addAchievement, user, { params })
  }

  addplayerteam(user, teamId, playerId) {

    let params = new HttpParams()
      .set('teamId', teamId)
      .set('playerId', playerId)

    return this.http.post<any>(this.addplayer, user, { params })
  }

  removeplayerteam(user, teamId, playerId) {

    let params = new HttpParams()
      .set('teamId', teamId)
      .set('playerId', playerId)

    return this.http.post<any>(this.removeplayer, user, { params })
  }

  addtournament(user) {
    return this.http.post<any>(this.createtournament, user)
  }

  starttournament(tournementId) {
    let params = new HttpParams()
      .set('tournementId', tournementId)
    return this.http.post<any>(this.Starttournament, tournementId, { params })
  }

  finishtournament(tournementId) {
    let params = new HttpParams()
      .set('tournementId', tournementId)
    return this.http.post<any>(this.Finishtournament, tournementId, { params })
  }

  postponetournament(tournementId) {
    let params = new HttpParams()
      .set('tournementId', tournementId)
    return this.http.post<any>(this.Postponetournament, tournementId, { params })
  }

  registerFixture(user, tournementId) {
    let params = new HttpParams()
      .set('tournementId', tournementId)
    return this.http.post<any>(this.createFixture, user, { params })
  }


}
