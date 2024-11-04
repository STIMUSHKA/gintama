import { Component, Input, OnInit } from '@angular/core';
import { Episode, Season, SubEpisode } from '../interfaces';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {
  public episodes: SubEpisode[]
  public selectedEpisodeId: string = ''
  public selectedEpisode: SubEpisode = {
    id: 1,
    documentId: '',
    content: {
      url: ''
    },
    title: '',
    order: 1
  }
  private baseUrl: string = 'http://localhost:1337';

  @Input() documentId: string;

  constructor(
    private _apiService: ApiService
  ) {}


  ngOnInit(): void {
    
    this._apiService.getSeason(this.documentId).subscribe( (season: Season) => {
      this.episodes = season.data.episodes
      this.loadEpisode(this.episodes[0].documentId)
    })
  }

  public onEpisodeSelected(id: any) {
    console.log(id)
    this.loadEpisode(id)
  }
  
  private loadEpisode(id: string) {
    this.selectedEpisodeId = id
    this._apiService.getEpisode(id).subscribe( (episode: Episode) => {
      this.selectedEpisode = episode.data
      console.log('this.episode', episode)

    })
  }

  public getVideoUrl(): string | any {
    if (this.selectedEpisode.content.url.length != 0) {
       console.log()
      console.log(11111111,this.selectedEpisode ? `${this.baseUrl}${this.selectedEpisode.content.url}` : '')

      return `${this.baseUrl}${this.selectedEpisode.content.url}`
    }
  }

}
