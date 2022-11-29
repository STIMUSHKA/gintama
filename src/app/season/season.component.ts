import { Component, Input } from '@angular/core';
import { Season } from '../interfaces';
@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent {

  @Input() season: Season;

}
