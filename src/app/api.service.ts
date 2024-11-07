import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllAnime, Episode, Season, SubSeason } from './interfaces';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:1337/api/'; // Замените на ваш URL Strapi
  private populateAll = '?populate=*'
  constructor(private http: HttpClient) { }

    public getAllAnime(): Observable<AllAnime> {
      return this.http.get<AllAnime>(this.apiUrl + 'animes'+ this.populateAll);
    }

    public getSeason(id: string): Observable<Season> {
      return this.http.get<Season>(this.apiUrl + 'seasons/' + id + this.populateAll);
    }

    public getEpisode(id: string): Observable<Episode> {
      return this.http.get<Episode>(this.apiUrl + 'episodes/' + id + this.populateAll);
    }

}
