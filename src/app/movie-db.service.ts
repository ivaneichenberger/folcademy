import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/enviroment.development';
@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  key: string = "617fd33a251a2b0c03b1a12985c09a14"

  apiUrl: string = 'https://api.themoviedb.org/3/'

  constructor(
    private _https: HttpClient
  ) { }

  getTrending() {
    return this._https.get(this.apiUrl + 'trending/all/', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.tokenAPI}`
      }
     })
  }
}
