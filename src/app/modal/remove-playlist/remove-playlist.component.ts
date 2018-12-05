import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Playlist, PlaylistService} from '../../playlist.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-remove-playlist',
  templateUrl: './remove-playlist.component.html',
  styleUrls: ['./remove-playlist.component.css']
})

export class RemovePlaylistComponent implements OnInit {
  @Output() delStatut = new EventEmitter();
  playlistSubscription: Subscription;
  playlists: Playlist[];
  constructor(private playlistService: PlaylistService) {}

  ngOnInit() {
    this.playlistSubscription = this.playlistService.playlistSubject.subscribe(
      (playlists: Playlist[]) => {
        this.playlists = playlists;
      }
    );
    this.playlistService.emitPlaylistSubject();
  }

  onSubmit(i: string) {
    // +i to cast string on number
    this.playlistService.delPlaylistByIndex(+i);
  }

  onAnnule() {
    this.delStatut.emit(false);
  }
}
