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

  getInstituteTeamCount() {
    let _url1 = "http://localhost:3000/api/getinstituteteamcount";
    return this.http.get<any>(_url1);
  }

  getInstituteCoachCount() {
    let _url1 = "http://localhost:3000/api/getinstitutecoachcount";
    return this.http.get<any>(_url1);
  }

  getInstitutePlayerCount() {
    let _url1 = "http://localhost:3000/api/getinstituteplayercount";
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

  getInstitutes() {
    let _url1 = "http://localhost:3000/api/institutes";
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

  getOngoingFixture(tournementId) {

    let params = new HttpParams()
      .set('tournementId', tournementId)

    let _url1 = "http://localhost:3000/api/getongoingfixture";
    return this.http.get<any>(_url1, { params });
  }

  getFinishedFixture(tournementId) {

    let params = new HttpParams()
      .set('tournementId', tournementId)

    let _url1 = "http://localhost:3000/api/getfinishedfixture";
    return this.http.get<any>(_url1, { params });
  }

  UpcomingFixtureDetails(fixtureId) {

    let params = new HttpParams()
      .set('fixtureId', fixtureId)

    let _url1 = "http://localhost:3000/api/upcomingfixturedetails";
    return this.http.get<any>(_url1, { params });
  }

  getFixtureTeamPlayers(fixtureId, tournamentTeamId) {

    let params = new HttpParams()
      .set('fixtureId', fixtureId)
      .set('tournamentTeamId', tournamentTeamId)

    let _url1 = "http://localhost:3000/api/getfixtureteamplayers";
    return this.http.get<any>(_url1, { params });
  }

  getAddFixturePlayers(fixtureId) {
    let params = new HttpParams()
      .set('fixtureId', fixtureId)

    let _url1 = "http://localhost:3000/api/getaddfixtureplayers";
    return this.http.get<any>(_url1, { params });
  }

  getRemoveFixturePlayers(fixtureId) {
    let params = new HttpParams()
      .set('fixtureId', fixtureId)

    let _url1 = "http://localhost:3000/api/getremovefixtureplayers";
    return this.http.get<any>(_url1, { params });
  }

  getTotal(fixtureId, tournamentTeamId) {
    let params = new HttpParams()
      .set('fixtureId', fixtureId)
      .set('tournamentTeamId', tournamentTeamId)

    let _url1 = "http://localhost:3000/api/getTotal";
    return this.http.get<any>(_url1, { params });
  }

  getSummery(tournamentId) {
    let params = new HttpParams()
      .set('tournamentId', tournamentId)

    let _url1 = "http://localhost:3000/api/getsummery";
    return this.http.get<any>(_url1, { params });
  }

  getNewTour() {
    let _url1 = "http://localhost:3000/api/getnewtournament";
    return this.http.get<any>(_url1);
  }

  getInstituteProfile() {
    let _url1 = "http://localhost:3000/api/getinstituteprofile";
    return this.http.get<any>(_url1);
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
  private addFixturePlayer = "http://localhost:3000/api/addfixtureplayer";
  private removeFixturePlayer = "http://localhost:3000/api/removefixtureplayer";
  private startfixture = "http://localhost:3000/api/startfixture";

  private _coachregister = "http://localhost:3000/api/coachregister";
  private _createplayer = "http://localhost:3000/api/createplayer";

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

    console.log("fixtureId= " + fixtureId);

    let params = new HttpParams()
      .set('fixtureId', fixtureId)

    return this.http.post<any>(this.startfixture, user, { params })
  }

  PostponeFixture(user, fixtureId) {

    let _url1 = "http://localhost:3000/api/postponefixture";

    let params = new HttpParams()
      .set('fixtureId', fixtureId)

    return this.http.post<any>(_url1, user, { params })
  }

  finishFixture(user, fixtureId, wonteam, wonscore, lossteam, lossscore) {
    let _url1 = "http://localhost:3000/api/finishfixture";
    console.log("fixtureId= " + fixtureId);

    let params = new HttpParams()
      .set('fixtureId', fixtureId)
      .set('wonteam', wonteam)
      .set('wonscore', wonscore)
      .set('lossteam', lossteam)
      .set('lossscore', lossscore)

    return this.http.post<any>(_url1, user, { params })
  }

  changePlayerScore(user, fixtureId, currentUserId, score, tournamentTeamId) {

    let _url1 = "http://localhost:3000/api/addplayerscore";

    let params = new HttpParams()
      .set('fixtureId', fixtureId)
      .set('currentUserId', currentUserId)
      .set('score', score)
      .set('tournamentTeamId', tournamentTeamId)

    return this.http.post<any>(_url1, user, { params })
  }

  JoinTournament(user, tournementId) {

    let _url1 = "http://localhost:3000/api/jointournament";

    let params = new HttpParams()
      .set('tournementId', tournementId)

    return this.http.post<any>(_url1, user, { params })
  }

  coachregister(user) {
    return this.http.post<any>(this._coachregister, user)
  }
  createplayer(user) {
    return this.http.post<any>(this._createplayer, user)
  }

}
