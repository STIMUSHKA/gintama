import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { EpisodeComponent } from './episode/episode.component';
import { AnimelistComponent } from './animelist/animelist.component';

const routes: Routes = [
  { component: AnimelistComponent, path: 'anime'},
  { component: AnimeComponent, path: 'anime/:aid'},
  { component: EpisodeComponent, path: 'anime/:aid/:sid'},
  { component: EpisodeComponent, path: 'anime/:aid/:sid/:eid'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
