import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { SubEpisode } from '../interfaces'

@Component({
  selector: 'app-series-cell',
  templateUrl: './series-cell.component.html',
  styleUrls: ['./series-cell.component.scss']
})

export class SeriesCellComponent implements OnInit {
  public selectedEpisodeId: string = ''
  @Input() episodes: any = []
  @Input() episodeId: string = ''
  @Output() emitEpisodeSelectedId = new EventEmitter<string>();

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  public episodeClick(episode: SubEpisode) {
    this.emitEpisodeSelectedId.emit(episode.documentId);
  }
}
