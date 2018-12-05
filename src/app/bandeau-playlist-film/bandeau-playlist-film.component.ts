import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
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

 get movies(): MovieResponse[] {
    const movieResponse = [];

    for (let i = 0; i < this.numberMovie; i++) {
      movieResponse[i] = this.playlist.getMovie(i);
    }

    return movieResponse;
 }

 get numberMovie(): number {
    if (this.playlist != null) {
      return this.playlist.getNumberOfMovies();
    } return 0;
 }

 get oneMovie(): boolean {
    return this.numberMovie === 1;
 }

  get multiMovie(): boolean {
    return this.numberMovie > 1;
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

  delMovie(movie: MovieResponse) {
    this.playlistService.delMovieFromPlaylistByName(this.playlist.getName(), movie);
  }
}
