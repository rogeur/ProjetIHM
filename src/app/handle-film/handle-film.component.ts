import { Component, OnInit } from '@angular/core';
import {Playlist, PlaylistService} from '../playlist.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-handle-film',
  templateUrl: './handle-film.component.html',
  styleUrls: ['./handle-film.component.css']
})
export class HandleFilmComponent implements OnInit {
  playlistSubscription: Subscription;
  playlists: Playlist[];
  constructor(private playlistService: PlaylistService, private router: Router) {}

  ngOnInit(): void {
    this.playlistSubscription = this.playlistService.playlistSubject.subscribe(
      (playlists: Playlist[]) => {
        this.playlists = playlists;
      }
    );
    this.playlistService.emitPlaylistSubject();
  }

  onSubmit(form: NgForm) {
    this.playlistService.addPlaylist(form.value.name);
  }
  onAnnule() {
    this.router.navigate(['home']);
  }
}
