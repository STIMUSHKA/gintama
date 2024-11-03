import { Component, Input, OnInit } from '@angular/core';
import { Season } from '../interfaces';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {
  public episodes: any
  @Input() documentId: string;

  constructor(
    private _apiService: ApiService
  ) {}


  ngOnInit(): void {
    this._apiService.getSeasonSeries(this.documentId).subscribe( (season: Season) => {
      this.episodes = season.data.episodes

      console.log('this.episodes', season.data.episodes)

    })
  }
  

}
