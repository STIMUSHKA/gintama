import { Component, Input, OnInit } from '@angular/core';
import { Episode, Season, SubEpisode } from '../interfaces';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  public episodes: SubEpisode[]
  public seasonId: string = ''

  @Input() documentId: string;

  constructor(
    private _dataService: DataService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this._dataService.getSeason(this.documentId).subscribe( (season: Season) => {
      this.episodes = season.data.episodes
      this.episodes.sort((a, b) => {
        const orderA = a.order ?? Number.MAX_VALUE; // Если a.order null, используем максимальное значение
        const orderB = b.order ?? Number.MAX_VALUE; // Если b.order null, используем максимальное значение
        return orderA - orderB; // Сортировка по возрастанию
      });
      this.seasonId = season.data.documentId
    })
  }

  public onEpisodeSelected(id: any) {
    this.router.navigate(['/anime/' + this.seasonId + '/' + id]);
  }
  
}
