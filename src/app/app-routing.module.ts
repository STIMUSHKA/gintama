import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { EpisodeComponent } from './episode/episode.component';

const routes: Routes = [
  { component: AnimeComponent, path: 'anime'},
  { component: EpisodeComponent, path: 'anime/:sid/:eid'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
