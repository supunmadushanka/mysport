import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getTeams() {
    let _url = environment.baseURL+"teams";
    return this.http.get<any>(_url);
  }

  getTeamPlayers(teamId) {
    let params = new HttpParams()
      .set('teamId', teamId)
    let _url = environment.baseURL+"teamplayers";
    return this.http.get<any>(_url, { params });
  }

  getTeamDetails(teamId) {
    let params = new HttpParams()
      .set('teamId', teamId)
    let _url = environment.baseURL+"teamdetails";
    return this.http.get<any>(_url, { params });
  }

  getTeamAchieve(teamId) {
    let params = new HttpParams()
      .set('teamId', teamId)
    let _url = environment.baseURL+"teamachieve";
    return this.http.get<any>(_url, { params });
  }

  getaddplayers(teamId) {
    let params = new HttpParams()
      .set('teamId', teamId)
    let _url = environment.baseURL+"addplayerview";
    return this.http.get<any>(_url, { params });
  }

  getCoaches() {
    let _url = environment.baseURL+"coaches";
    return this.http.get<any>(_url);
  }

  getPlayers() {
    let _url = environment.baseURL+"players";
    return this.http.get<any>(_url);
  }

  getInstituteTeamCount() {
    let _url = environment.baseURL+"getinstituteteamcount";
    return this.http.get<any>(_url);
  }

  getInstituteCoachCount() {
    let _url = environment.baseURL+"getinstitutecoachcount";
    return this.http.get<any>(_url);
  }

  getInstitutePlayerCount() {
    let _url = environment.baseURL+"getinstituteplayercount";
    return this.http.get<any>(_url);
  }

  getSports() {
    let _url = environment.baseURL+"sports";
    return this.http.get<any>(_url);
  }

  getStructure() {
    let _url = environment.baseURL+"structure";
    return this.http.get<any>(_url);
  }

  getInstitutes() {
    let _url = environment.baseURL+"institutes";
    return this.http.get<any>(_url);
  }

  getCreatedTournament() {
    let _url = environment.baseURL+"getcreatedtournament";
    return this.http.get<any>(_url);
  }

  getStartedTournament() {
    let _url = environment.baseURL+"getstartedtournament";
    return this.http.get<any>(_url);
  }

  getFinishedTournament() {
    let _url = environment.baseURL+"getfinishedtournament";
    return this.http.get<any>(_url);
  }

  getSelectededTournament(tournamentId) {

    let params = new HttpParams()
      .set('tournamentId', tournamentId)

    let _url = environment.baseURL+"getselectedtournament";
    return this.http.get<any>(_url, { params });
  }

  getFixtureFirstTeam(tournamentId, strutureId) {

    let params = new HttpParams()
      .set('tournamentId', tournamentId)
      .set('strutureId', strutureId)

    let _url = environment.baseURL+"getfixturefirstteam";
    return this.http.get<any>(_url, { params });
  }

  getUpcomingFixture(tournementId) {

    let params = new HttpParams()
      .set('tournementId', tournementId)

    let _url = environment.baseURL+"getupcomingfixture";
    return this.http.get<any>(_url, { params });
  }

  getOngoingFixture(tournementId) {

    let params = new HttpParams()
      .set('tournementId', tournementId)

    let _url = environment.baseURL+"getongoingfixture";
    return this.http.get<any>(_url, { params });
  }

  getFinishedFixture(tournementId) {

    let params = new HttpParams()
      .set('tournementId', tournementId)

    let _url = environment.baseURL+"getfinishedfixture";
    return this.http.get<any>(_url, { params });
  }

  UpcomingFixtureDetails(fixtureId) {

    let params = new HttpParams()
      .set('fixtureId', fixtureId)

    let _url = environment.baseURL+"upcomingfixturedetails";
    return this.http.get<any>(_url, { params });
  }

  getFixtureTeamPlayers(fixtureId, tournamentTeamId) {

    let params = new HttpParams()
      .set('fixtureId', fixtureId)
      .set('tournamentTeamId', tournamentTeamId)

    let _url = environment.baseURL+"getfixtureteamplayers";
    return this.http.get<any>(_url, { params });
  }

  getAddFixturePlayers(fixtureId) {
    let params = new HttpParams()
      .set('fixtureId', fixtureId)

    let _url = environment.baseURL+"getaddfixtureplayers";
    return this.http.get<any>(_url, { params });
  }

  getRemoveFixturePlayers(fixtureId) {
    let params = new HttpParams()
      .set('fixtureId', fixtureId)

    let _url = environment.baseURL+"getremovefixtureplayers";
    return this.http.get<any>(_url, { params });
  }

  getTotal(fixtureId, tournamentTeamId) {
    let params = new HttpParams()
      .set('fixtureId', fixtureId)
      .set('tournamentTeamId', tournamentTeamId)

    let _url = environment.baseURL+"getTotal";
    return this.http.get<any>(_url, { params });
  }

  getSummery(tournamentId) {
    let params = new HttpParams()
      .set('tournamentId', tournamentId)

    let _url = environment.baseURL+"getsummery";
    return this.http.get<any>(_url, { params });
  }

  getNewTour() {
    let _url = environment.baseURL+"getnewtournament";
    return this.http.get<any>(_url);
  }

  getInstituteProfile() {
    let _url = environment.baseURL+"getinstituteprofile";
    return this.http.get<any>(_url);
  }

  private _teamregister = environment.baseURL+"teamregister";
  private addAchievement = environment.baseURL+"addachieve";
  private addplayer = environment.baseURL+"addplayer";
  private removeplayer = environment.baseURL+"removeplayer";
  private createtournament = environment.baseURL+"createtournament";
  private Starttournament = environment.baseURL+"starttournament";
  private Postponetournament = environment.baseURL+"postponetournament";
  private Finishtournament = environment.baseURL+"finishtournament";
  private createFixture = environment.baseURL+"registerfixture";
  private addFixturePlayer = environment.baseURL+"addfixtureplayer";
  private removeFixturePlayer = environment.baseURL+"removefixtureplayer";
  private startfixture = environment.baseURL+"startfixture";
  private _coachregister = environment.baseURL+"coachregister";
  private _createplayer = environment.baseURL+"createplayer";

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

  addPlayerFixture(user, fixtureId, userId) {
    let params = new HttpParams()
      .set('fixtureId', fixtureId)
      .set('userId', userId)
    return this.http.post<any>(this.addFixturePlayer, user, { params })
  }

  removePlayerFixture(user, fixtureId, userId) {
    let params = new HttpParams()
      .set('fixtureId', fixtureId)
      .set('userId', userId)
    return this.http.post<any>(this.removeFixturePlayer, user, { params })
  }

  startFixture(user, fixtureId) {
    let params = new HttpParams()
      .set('fixtureId', fixtureId)
    return this.http.post<any>(this.startfixture, user, { params })
  }

  PostponeFixture(user, fixtureId) {
    let _url1 = environment.baseURL+"postponefixture";
    let params = new HttpParams()
      .set('fixtureId', fixtureId)
    return this.http.post<any>(_url1, user, { params })
  }

  finishFixture(user, fixtureId, wonteam, wonscore, lossteam, lossscore) {
    let _url = environment.baseURL+"finishfixture";
    let params = new HttpParams()
      .set('fixtureId', fixtureId)
      .set('wonteam', wonteam)
      .set('wonscore', wonscore)
      .set('lossteam', lossteam)
      .set('lossscore', lossscore)
    return this.http.post<any>(_url, user, { params })
  }

  changePlayerScore(user, fixtureId, currentUserId, score, tournamentTeamId) {
    let _url = environment.baseURL+"addplayerscore";
    let params = new HttpParams()
      .set('fixtureId', fixtureId)
      .set('currentUserId', currentUserId)
      .set('score', score)
      .set('tournamentTeamId', tournamentTeamId)
    return this.http.post<any>(_url, user, { params })
  }

  JoinTournament(user, tournementId) {
    let _url = environment.baseURL+"jointournament";
    let params = new HttpParams()
      .set('tournementId', tournementId)
    return this.http.post<any>(_url, user, { params })
  }

  coachregister(user) {
    return this.http.post<any>(this._coachregister, user)
  }
  
  createplayer(user) {
    return this.http.post<any>(this._createplayer, user)
  }

}
