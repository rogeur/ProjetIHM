import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Playlist, PlaylistService} from '../playlist.service';
import {MovieResult} from '../tmdb-data/searchMovie';
import {AngularFireDatabase} from '@angular/fire/database';
import {MovieResponse} from '../tmdb-data/Movie';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bandeau-playlist-film',
  templateUrl: './bandeau-playlist-film.component.html',
  styleUrls: ['./bandeau-playlist-film.component.css'],
})
export class BandeauPlaylistFilmComponent implements OnInit, OnChanges {

  name: string;
  playlist: Playlist;

  constructor(private playlistService: PlaylistService,
              private db: AngularFireDatabase,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    this.playlist = this.playlistService.getPlaylistByName(this.name);
  }

  get firstMovie(): MovieResponse {
    return this.playlist.getMovie(0);
 }

 get moviesUp(): MovieResponse[] {
    const movieResponse = [];

    for (let i = 1; i <= this.numberMovie && i < 4; i++) {
      movieResponse[i - 1] = this.playlist.getMovie(i);
    }

    return movieResponse;
 }

  get moviesBottom(): MovieResponse[] {
    const movieResponse = [];

    for (let i = 4; i <= this.numberMovie && i < 7; i++) {
      const j = i - 4;
      movieResponse[j] = this.playlist.getMovie(i);
    }

    return movieResponse;
  }

 get numberMovie(): number {
    if (this.playlist != null) {
      return this.playlist.getNumberOfMovies();
    } return 0;
 }

 movie(id: number): MovieResponse {
    return this.playlist.getMovie(id);
 }

 get titlePlaylist(): String {
    return this.playlist.getName();
 }

  ngOnChanges(changes: SimpleChanges): void {
    this.name = this.route.snapshot.params['name'];
    this.playlist = this.playlistService.getPlaylistByName(this.name);
  }
}
