import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _teamregister = "http://localhost:3000/api/teamregister";

  constructor(private http: HttpClient) { }

  getTeams() {
    let _url1 = "http://localhost:3000/api/teams";
    return this.http.get<any>(_url1);
  }

  getTeamPlayers(teamId){
    let params = new HttpParams()
    .set('teamId',teamId)
    let _url1 = "http://localhost:3000/api/teamplayers";
    return this.http.get<any>(_url1,{params});
  }

  getTeamDetails(teamId){
    let params = new HttpParams()
    .set('teamId',teamId)
    let _url1 = "http://localhost:3000/api/teamdetails";
    return this.http.get<any>(_url1,{params});
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

  /////////////////////////////////////////////////////////////////////////



  registerteam(user){
    return this.http.post<any>(this._teamregister,user)
  }

}
