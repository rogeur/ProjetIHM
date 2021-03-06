import {Component, Input, OnInit} from '@angular/core';
import {Playlist, PlaylistService} from '../../playlist.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {MovieResponse} from '../../tmdb-data/Movie';

@Component({
  selector: 'app-handle-playlist',
  templateUrl: './handle-playlist.component.html',
  styleUrls: ['./handle-playlist.component.css']
})

export class HandlePlaylistComponent implements OnInit {

  playlistSubscription: Subscription;
  playlists: Playlist[];
  @Input() movie: MovieResponse;
  @Input() text: string;
  constructor(private playlistService: PlaylistService, private router: Router) {}

  ngOnInit(): void {
    this.playlistSubscription = this.playlistService.playlistSubject.subscribe(
      (playlists: Playlist[]) => {
        this.playlists = playlists;
      }
    );
    this.playlistService.emitPlaylistSubject();
  }

  onSubmit(i: string) {
    if ( this.text) {
      // créer playlist + ajouter film
      this.playlistService.addPlaylist(this.text);
      this.playlistService.addOnPlaylistByName(this.text, this.movie);
    } else {
      // ajouter un film dans une playlist existante
      this.playlistService.addOnPlaylistByIndex(+i, this.movie);
    }
  }

  onAnnule() {
    this.router.navigate(['home']);
  }
}
