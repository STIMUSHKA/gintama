import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AllAnime, Anime, Episode, Season } from './interfaces';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private allAnime: AllAnime | null = null;
  private seasons: { [id: string]: Season } = {};
  private episodes: { [id: string]: Episode } = {};

  constructor(private apiService: ApiService) {}

  public getAllAnime(): Observable<AllAnime> { // Изменен тип возвращаемого значения
    if (this.allAnime) {
      return of(this.allAnime);
    } else {
      return this.apiService.getAllAnime().pipe(
        tap(data => {
          this.allAnime = data; // Кэшируем данные
        }),
        catchError(error => {
          console.error('Ошибка при получении всех аниме:', error);
          return of(); // Возвращаем null в случае ошибки
        })
      );
    }
  }

  public getSeason(id: string): Observable<Season> { // Изменен тип возвращаемого значения
    if (this.seasons[id]) {
      return of(this.seasons[id]);
    } else {
      return this.apiService.getSeason(id).pipe(
        tap(data => {
          this.seasons[id] = data; // Кэшируем данные сезона
        }),
        catchError(error => {
          console.error(`Ошибка при получении сезона с ID ${id}:`, error);
          return of(); // Возвращаем null в случае ошибки
        })
      );
    }
  }

  public getEpisode(id: string): Observable<Episode> { // Изменен тип возвращаемого значения
    if (this.episodes[id]) {
      return of(this.episodes[id]);
    } else {
      return this.apiService.getEpisode(id).pipe(
        tap(data => {
          this.episodes[id] = data; // Кэшируем данные эпизода
        }),
        catchError(error => {
          console.error(`Ошибка при получении эпизода с ID ${id}:`, error);
          return of(); // Возвращаем null в случае ошибки
        })
      );
    }
  }

  public getAnime(id: string): Observable<Anime | null> {
    // Проверяем, есть ли уже загруженные данные
    const anime = this.allAnime?.data.find(item => item.documentId === id);
    
    if (anime) {
      // Если аниме найдено в кэше, возвращаем его
      return of(anime);
    } else {
      // Если аниме не найдено, загружаем все аниме
      return this.apiService.getAllAnime().pipe(
        tap(data => {
          this.allAnime = data; // Кэшируем данные
        }),
        // После загрузки данных, ищем нужное аниме
        map(data => data.data.find(item => item.documentId === id) || null), // Находим аниме или возвращаем null
        catchError(error => {
          console.error('Ошибка при получении всех аниме:', error);
          return of(); // Возвращаем null в случае ошибки
        })
      );
    }
  }
  

  
}