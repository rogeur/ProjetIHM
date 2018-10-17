import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Playlist, PlaylistService} from '../playlist.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-playslist-menu',
  templateUrl: './playslist-menu.component.html',
  styleUrls: ['./playslist-menu.component.css']
})
export class PlayslistMenuComponent implements OnInit, OnDestroy {
  remove = false;
  add = false;
  playlists: Playlist[];
  playlistSubscription: Subscription;
  /*
    = [
    {name: 'humour-juif'},
    {name: 'action'},
    {name: 'thriller'}
  ];
  */

  constructor(private router: Router, private playlistService: PlaylistService) { }

  ngOnInit() {
    this.playlistSubscription = this.playlistService.playlistSubject.subscribe(
      (playlists: Playlist[]) => {
        this.playlists = playlists;
      }
    );
    this.playlistService.emitPlaylistSubject();
  }
  handleClick() {
    this.router.navigate(['/home']);
  }
  handleAdd() {
    this.remove = false;
    this.add = !this.add;
  }
  handleDel() {
    this.add = false;
    this.remove = !this.remove;
  }

  ngOnDestroy(): void {
    this.playlistSubscription.unsubscribe();
  }

}
