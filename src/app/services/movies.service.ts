import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITrendingReponse } from '../models/trending.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiUrl: string = 'https://api.themoviedb.org/3/'

  constructor(private _http: HttpClient) { 
  }

  getTrending(): Observable<ITrendingReponse> {
    let params = { language: 'es-ES' };
    let headers = { 
      accept: 'application/json',
      Authorization: `Bearer ${environment.tokenAPI}`
    }
    return this._http.get<ITrendingReponse>(this.apiUrl + 'trending/all/week', {
      params: params,
      headers: headers
    })
  }
}
