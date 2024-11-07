import { Injectable, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { AllAnime, Anime, Episode, Season, SubAnime } from './interfaces';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private allAnime: AllAnime | null = null;
  private anime: { [id: string]: Anime } = {};
  private seasons: { [id: string]: Season } = {};
  private episodes: { [id: string]: Episode } = {};
  public currentAnime: BehaviorSubject<SubAnime | null> = new BehaviorSubject<SubAnime | null>(null);

  constructor(
    private apiService: ApiService,
  ) {}


  public getAllAnime(): Observable<AllAnime> {
    if (this.allAnime) {
      return of(this.allAnime);
    } else {
      return this.apiService.getAllAnime().pipe(
        tap(data => {
          this.allAnime = data;
        }),
        catchError(error => {
          console.error('Ошибка при получении всех аниме:', error);
          return of();
        })
      );
    }
  }

  public getSeason(id: string): Observable<Season> {
    if (this.seasons[id]) {
      return of(this.seasons[id]);
    } else {
      return this.apiService.getSeason(id).pipe(
        tap(data => {
          this.seasons[id] = data;
        }),
        catchError(error => {
          console.error(`Ошибка при получении сезона с ID ${id}:`, error);
          return of();
        })
      );
    }
  }

  public getEpisode(id: string): Observable<Episode> {
    if (this.episodes[id]) {
      return of(this.episodes[id]);
    } else {
      return this.apiService.getEpisode(id).pipe(
        tap(data => {
          this.episodes[id] = data;
        }),
        catchError(error => {
          console.error(`Ошибка при получении эпизода с ID ${id}:`, error);
          return of();
        })
      );
    }
  }

  public getAnime(id: string): Observable<Anime> {
    const anime = this.anime[id]
    
    if (anime) {
      return of(anime);
    } else {
      return this.apiService.getAnime(id).pipe(
        tap(data => {
          this.anime[id] = data;
          this.currentAnime.next(data.data)
        }),
        catchError(error => {
          console.error('Ошибка при получении всех аниме:', error);
          return of();
        })
      );
    }
  }
}