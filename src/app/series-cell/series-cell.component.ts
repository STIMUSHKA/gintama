import { Component, Input } from '@angular/core';
import { Season } from '../interfaces'

@Component({
  selector: 'app-series-cell',
  templateUrl: './series-cell.component.html',
  styleUrls: ['./series-cell.component.scss']
})

export class SeriesCellComponent {

@Input() options: Season

}
