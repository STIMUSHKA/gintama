import { Component, OnInit } from '@angular/core';
import { AllAnime, SubAnime } from '../interfaces';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-animelist',
  templateUrl: './animelist.component.html',
  styleUrls: ['./animelist.component.scss']
})
export class AnimelistComponent implements OnInit {

  public animeList: SubAnime[] = []
  
  constructor(
    private _dataService: DataService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this._dataService.getAllAnime().subscribe( animes => {
      this.animeList = animes.data;
    })
  }

  public redirectToAnime(id: string) {
    this.router.navigate(['/anime', id]);


  }

}
