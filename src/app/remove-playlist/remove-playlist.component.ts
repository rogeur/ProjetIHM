import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Playlist, PlaylistService} from '../playlist.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-remove-playlist',
  templateUrl: './remove-playlist.component.html',
  styleUrls: ['./remove-playlist.component.css']
})

export class RemovePlaylistComponent implements OnInit {
  @Output() delStatut = new EventEmitter();
  selectedOption: string;
  playlistSubscription: Subscription;
  playlists: Playlist[];
  constructor(private playlistService: PlaylistService, private router: Router) {}

  ngOnInit() {
    this.playlistSubscription = this.playlistService.playlistSubject.subscribe(
      (playlists: Playlist[]) => {
        this.playlists = playlists;
      }
    );
    this.playlistService.emitPlaylistSubject();
  }

  onSubmit() {
    this.playlistService.delPlaylist(this.selectedOption);
  }

  onAnnule() {
    this.delStatut.emit(false);
  }
}
