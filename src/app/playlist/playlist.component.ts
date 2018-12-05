import {Component, Input, OnInit} from '@angular/core';
import {PlaylistService} from '../playlist.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {

  @Input() playlistName: string;
  @Input() index: number;

  constructor(private router: Router, private playlistService: PlaylistService) { }

  ngOnInit() {
  }

  handleClickRemove() {
    this.playlistService.delPlaylistByName(this.playlistName);
    this.router.navigate(['home']);
  }
}
