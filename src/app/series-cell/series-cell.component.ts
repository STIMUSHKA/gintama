import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubEpisode } from '../interfaces'

@Component({
  selector: 'app-series-cell',
  templateUrl: './series-cell.component.html',
  styleUrls: ['./series-cell.component.scss']
})

export class SeriesCellComponent implements OnInit {

  @Input() episodes: any
  @Output() episodeSelectedId = new EventEmitter<string>();

  ngOnInit(): void {
  }

  public episodeClick(episode: SubEpisode) {
    this.episodeSelectedId.emit(episode.documentId);
    console.log(episode)
  }
}
