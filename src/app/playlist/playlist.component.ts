import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {

  @Input() playlistName: string;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }
}
