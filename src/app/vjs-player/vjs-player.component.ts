import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import  videojs from 'video.js';

@Component({
  selector: 'app-vjs-player',
  templateUrl: './vjs-player.component.html',
  styleUrls: [
    './vjs-player.component.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})

export class VjsPlayer implements OnInit, OnDestroy {
  @ViewChild('target', {static: true}) target: ElementRef;

  // See options: https://videojs.com/guides/options
  @Input() options: {
      fluid: boolean,
      // preload: string,
      poster: string,
      readyState: number,
      aspectRatio: string,
      autoplay: boolean,
      volume: string,
      width: number,
      muted: boolean,
      controls: boolean,
      sources: {
          src: string,
          type: string,
      }[],
  };

  player: videojs.Player;

  constructor(
    private elementRef: ElementRef,
  ) {}

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}