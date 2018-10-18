import {Component, Input, OnInit} from '@angular/core';
import {Playlist, PlaylistService} from '../playlist.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-remove-playlist',
  templateUrl: './remove-playlist.component.html',
  styleUrls: ['./remove-playlist.component.css']
})

export class RemovePlaylistComponent implements OnInit {

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

  onSubmit(form: NgForm) {
    console.log(form.value.name);
    this.playlistService.delPlaylist(form.value.name);
  }

  onAnnule() {
    this.router.navigate(['home']);
  }
}
