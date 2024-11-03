import { Component, Input, OnInit } from '@angular/core';
import { Season } from '../interfaces'

@Component({
  selector: 'app-series-cell',
  templateUrl: './series-cell.component.html',
  styleUrls: ['./series-cell.component.scss']
})

export class SeriesCellComponent implements OnInit {

@Input() episodes: any


ngOnInit(): void {
  console.log('episodes', this.episodes)
}
}
