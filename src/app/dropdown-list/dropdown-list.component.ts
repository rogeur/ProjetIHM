import {Component, Input, NgModule, OnInit} from '@angular/core';
import {Playlist, PlaylistService} from '../playlist.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent implements OnInit {

  @Input() public playlists: Playlist[];
  public playlist: String;
  public selectedPlaylist: Playlist;

  // @Input() playlists: String[];

  constructor(private playlistService: PlaylistService, private router: Router) {
    this.playlists = this.playlistService.playlists;
  }

  ngOnInit() {
  }

  getPlaylists(): Playlist[] {
    return this.playlists;
  }

  onSubmit(): void {
    console.log(this.playlist);
  }

}
