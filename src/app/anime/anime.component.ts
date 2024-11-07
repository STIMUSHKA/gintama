import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTab } from '@angular/material/tabs';
import { MatTabGroup } from '@angular/material/tabs';
import { DataService } from '../data.service'
import { Anime, SubSeason } from '../interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {
  public title: string = '';
  public seasons: SubSeason[] = []

  constructor(
    private _dataService: DataService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      const animeId = params.get('aid') || ''
      this._dataService.getAnime(animeId).subscribe( (anime: Anime) => {

        console.log(anime)
        this.title = anime.data.title
        this.seasons = anime.data.seasons
      })
    })
    
  }
}