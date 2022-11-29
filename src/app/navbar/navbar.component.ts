import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTab } from '@angular/material/tabs';
import { MatTabGroup } from '@angular/material/tabs';
import { ApiService } from '../api-service.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public seasonsData: any;

  constructor(
    private _apiService: ApiService
  ) {}

  ngOnInit() {
    this.seasonsData = this._apiService.getSeasonsInfo()
  }
}
