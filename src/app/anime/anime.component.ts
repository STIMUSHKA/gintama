import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTab } from '@angular/material/tabs';
import { MatTabGroup } from '@angular/material/tabs';
import { DataService } from '../data.service'
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
    private _dataService: DataService
  ) {}

  ngOnInit() {
    this._dataService.getAllAnime().subscribe( (animes: AllAnime) => {
      this.title = animes.data[0].title
      this.seasons = animes.data[0].seasons
    })
  }
}