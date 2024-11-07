import { Component, Input, OnInit } from '@angular/core';
import { Episode, Season, SubEpisode } from '../interfaces';
import { ApiService } from '../api-service.service';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  public episodes: SubEpisode[]
  public selectedEpisodeId: string = ''
  public seasonId: string = ''
  public isEpisodeLoaded: boolean = false;
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

  constructor(
    private _apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
    let sid: string = ''
    let eid: string = ''
    this.route.paramMap.subscribe(params => {
      sid = params.get('sid') || ''
      eid = params.get('eid') || ''
      if(!sid) {
        this.router.navigate(['/anime']);
        console.error('no season found')
      } else if (!eid) {
        eid = '0'
      } else {
        this.selectedEpisodeId = eid
      }
      this.seasonId = sid
    });
    this._apiService.getSeason(sid).subscribe( (season: Season) => {
      this.episodes = season.data.episodes
      this.episodes.sort((a, b) => {
        const orderA = a.order ?? Number.MAX_VALUE;
        const orderB = b.order ?? Number.MAX_VALUE;
        return orderA - orderB;
      });
      console.log('eeeeeee',!eid)
      if (eid == '0') {
        this.loadEpisode(this.episodes[0].documentId)
      } else {
        this.loadEpisode(eid)
      }
    })
  }

  public onEpisodeSelected(id: any) {
    console.log(id)
    this.router.navigate(['/anime/' + this.seasonId + '/' + id]);
    this.loadEpisode(id)
  }
  
  private loadEpisode(id: string) {
    this.isEpisodeLoaded = false;
    this.cdr.detectChanges();
    this.selectedEpisodeId = id
    this._apiService.getEpisode(id).subscribe( (episode: Episode) => {
      this.selectedEpisode = episode.data
      console.log('this.episode', episode)
      this.isEpisodeLoaded = true;
      this.cdr.detectChanges();
    })
  }

  public getVideoUrl(): string | any {
    if (this.selectedEpisode.content.url.length != 0) {
      return `${this.baseUrl}${this.selectedEpisode.content.url}`
    }
  }

}
