import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
        opacity: 0.7,
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
  @Output() playlistStatut = new EventEmitter;
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

  mouseOut() {
    this.playlistStatut.emit(false);
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
  addClose(event) {
    this.add = event;
  }
  delClose(event) {
    this.remove = event;
  }
  handleClickPlaylist(name: string) {
    this.router.navigate(['showPlaylist/' + name]);
  }

  handleClickAccueil() {
    this.router.navigate(['home']);
  }
}
