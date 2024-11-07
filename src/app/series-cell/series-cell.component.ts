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
    this.selectedEpisodeId = this.episodeId

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['episodes'] && changes['episodes'].currentValue) {
      if (changes['episodes'].currentValue.length > 0) {
          this.selectedEpisodeId = this.episodeId
      }
    }
  }

  public episodeClick(episode: SubEpisode) {
    this.selectedEpisodeId = episode.documentId
    this.emitEpisodeSelectedId.emit(episode.documentId);
  }
}
