import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { MatTab } from '@angular/material/tabs';
import { MatTabGroup } from '@angular/material/tabs';
import { VjsPlayer } from './vjs-player/vjs-player.component';
import { SeasonComponent } from './season/season.component';
import { SeriesCellComponent } from './series-cell/series-cell.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimeComponent } from './anime/anime.component';

@NgModule({
  declarations: [
    AppComponent,
    VjsPlayer,
    SeasonComponent,
    SeriesCellComponent,
    AnimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
