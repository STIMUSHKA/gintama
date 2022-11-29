import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { MatTab } from '@angular/material/tabs';
import { MatTabGroup } from '@angular/material/tabs';
import { VjsPlayer } from './vjs-player/vjs-player.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VjsPlayer,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
