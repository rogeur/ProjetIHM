import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Playlist, PlaylistService} from '../playlist.service';
import {Subscription} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-playslist-menu',
  templateUrl: './playslist-menu.component.html',
  styleUrls: ['./playslist-menu.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0.1,
        backgroundColor: 'grey'
      })),
      transition('open => closed', [
        animate('0.2s 0s ease')
      ]),
      transition('closed => open', [
        animate('0.2s 0s ease')
      ]),
    ]),
  ]
})

export class PlayslistMenuComponent implements OnInit, OnDestroy {

  remove = false;
  add = false;
  playlists: Playlist[];
  playlistSubscription: Subscription;

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
