import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  private _sendreview1 = environment.baseURL+"sendreview";
  private _sendreview = 'https://mysport-codefreacks.herokuapp.com/sendreview';

  constructor(private http: HttpClient) { }

  SendReview(user) {
    return this.http.post<any>(this._sendreview, user)
  }

}
