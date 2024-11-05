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
  @Output() episodeSelectedId = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('2323', this.episodes)
    this.selectedEpisodeId = this.episodes[0].documentId
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['episodes'] && changes['episodes'].currentValue) {
      console.log('Updated episodes:', changes['episodes'].currentValue);
      // Если episodes изменились, можно обновить selectedEpisodeId
      if (changes['episodes'].currentValue.length > 0) {
        this.selectedEpisodeId = changes['episodes'].currentValue[0].documentId; // Установите новый выбранный эпизод
      }
    }
  }

  public episodeClick(episode: SubEpisode) {
    console.log(episode)
    this.selectedEpisodeId = episode.documentId
    this.episodeSelectedId.emit(episode.documentId);
    console.log(episode)
  }
}
