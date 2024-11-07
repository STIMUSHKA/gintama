import { Component, Input, OnInit } from '@angular/core';
import { Episode, Season, SubAnime, SubEpisode } from '../interfaces';
import { DataService } from '../data.service';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  public currentAnime: SubAnime
  public seasonId: string = ''
  public episodes: SubEpisode[]
  public selectedEpisodeId: string = ''
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
    private _dataService: DataService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
     
    })
    let sid: string = ''
    let eid: string = ''
    this.route.paramMap.subscribe(params => {
      const aid = params.get('aid') || ''
      if(aid) {
        this._dataService.getAnime(aid).subscribe( anime => {        
        })
      }
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
    this._dataService.getSeason(sid).subscribe( (season: Season) => {
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
    this._dataService.currentAnime.subscribe( anime => {
      if(anime) {
        this.currentAnime = anime
      }
    })
  }

  public onEpisodeSelected(id: any) {
    console.log(id)
    this.router.navigate(['/anime', this.currentAnime.documentId, this.seasonId, id]);
    this.loadEpisode(id)
  }
  
  private loadEpisode(id: string) {
    this.isEpisodeLoaded = false;
    this.cdr.detectChanges();
    this.selectedEpisodeId = id
    this._dataService.getEpisode(id).subscribe( (episode: Episode) => {
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
  redirectToNext(): void {
    if(this.currentAnime.seasons.find( season => season.order == this.currentAnime.seasons.length)?.documentId == this.seasonId) {
      return
    } else if(this.selectedEpisodeId == this.episodes[this.episodes.length-1].documentId) {
      const order = this.currentAnime.seasons.find( season => season.documentId == this.seasonId)?.order || 0
      const nextSeasonId = this.currentAnime.seasons.find( season => season.order == order + 1)?.documentId || ''
      this._dataService.getSeason(nextSeasonId).subscribe( season => {
        this.episodes = season.data.episodes
        const eid = season.data.episodes[0].documentId
        this.router.navigate(['/anime', this.currentAnime.documentId, nextSeasonId, eid]);
      })
    } else {
      const order = this.episodes.find( episode => episode.documentId == this.selectedEpisodeId)?.order || 0
      const nextEpisode = this.episodes.find( episode => episode.order == order + 1) || this.selectedEpisode
      this.router.navigate(['/anime', this.currentAnime.documentId, this.seasonId, nextEpisode?.documentId]);
      this.loadEpisode(nextEpisode.documentId)
    }
  }

  redirectToPrevious(): void {
    if(this.currentAnime.seasons.find( season => season.order == 1)?.documentId == this.seasonId) {
      return
    } else if(this.selectedEpisodeId == this.episodes[0].documentId) {
      const order = this.currentAnime.seasons.find( season => season.documentId == this.seasonId)?.order || 0
      const previousSeasonId = this.currentAnime.seasons.find( season => season.order == order - 1)?.documentId || ''
      
      this._dataService.getSeason(previousSeasonId).subscribe( season => {
        this.episodes = season.data.episodes
        const eid = season.data.episodes[season.data.episodes.length - 1].documentId
        this.router.navigate(['/anime', this.currentAnime.documentId, previousSeasonId, eid]);
      })
    } else {
      const order = this.episodes.find( episode => episode.documentId == this.selectedEpisodeId)?.order || 0
      const nextEpisode = this.episodes.find( episode => episode.order == order - 1) || this.selectedEpisode
      
      this.router.navigate(['/anime', this.currentAnime.documentId, this.seasonId, nextEpisode?.documentId]);
      this.loadEpisode(nextEpisode.documentId)
    }
  }

}
