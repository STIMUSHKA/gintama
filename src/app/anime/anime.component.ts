import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTab } from '@angular/material/tabs';
import { MatTabGroup } from '@angular/material/tabs';
import { ApiService } from '../api-service.service'
import { AllAnime, Season, SubSeason } from '../interfaces';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {
  public title: string = '';
  public seasons: SubSeason[] = []

  constructor(
    private _apiService: ApiService
  ) {}

  ngOnInit() {


    this._apiService.getAllAnime().subscribe( (animes: AllAnime) => {

      console.log('12313123', animes)


      this.title = animes.data[0].title
      this.seasons = animes.data[0].seasons
    })
  }
}
 