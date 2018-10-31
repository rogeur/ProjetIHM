import {Component, Input, OnInit} from '@angular/core';
import {Playlist, PlaylistService} from '../playlist.service';
import {MovieResult} from '../tmdb-data/searchMovie';
import {TmdbService} from '../tmdb.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {MovieResponse} from '../tmdb-data/Movie';

@Component({
  selector: 'app-bandeau-playlist-film',
  templateUrl: './bandeau-playlist-film.component.html',
  styleUrls: ['./bandeau-playlist-film.component.css'],
  providers: [PlaylistService]
})
export class BandeauPlaylistFilmComponent implements OnInit {

  @Input() playlist: Playlist;

  constructor(private playlistService: PlaylistService,
              private tmdb: TmdbService,
              public anAuth: AngularFireAuth,
              private db: AngularFireDatabase) {
    // this.stuff();
    console.log(this.playlist);
  }

  ngOnInit() {
  }

  get firstMovie(): MovieResult {
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
      let j = i - 4;
      movieResponse[j] = this.playlist.getMovie(i);
    }

    return movieResponse;
  }

 get numberMovie(): number {
    if (this.playlist != null) {
      return this.playlist.getNumberOfMovies();
    } return 0;
 }

 get myPlaylist(): Playlist {
    return this.playlistService.getPlaylistByName('benio');
 }

 movie(id: number): MovieResponse {
    return this.playlist.getMovie(id);
 }

 get titlePlaylist(): String {
    return this.playlist.getName();
 }

 stuff(): void {
   this.playlistService.addPlaylist('benio');

  setTimeout( () =>
       this.tmdb.init('76a1a345942fd69cde4370065fed299e') // Clef de TMDB
         .getMovie(12)
         .then( (m: MovieResponse) => this.playlistService.addOnPlaylistByName('benio', m) )
         .catch( err => console.error('Error getting movie:', err) ),
     1000 );

   setTimeout( () =>
       this.tmdb.init('76a1a345942fd69cde4370065fed299e') // Clef de TMDB
         .getMovie(14)
         .then( (m: MovieResponse) => this.playlistService.addOnPlaylistByName('benio', m) )
         .catch( err => console.error('Error getting movie:', err) ),
     1000 );

   setTimeout( () =>
       this.tmdb.init('76a1a345942fd69cde4370065fed299e') // Clef de TMDB
         .getMovie(15)
         .then( (m: MovieResponse) => this.playlistService.addOnPlaylistByName('benio', m) )
         .catch( err => console.error('Error getting movie:', err) ),
     1000 );

   setTimeout( () =>
       this.tmdb.init('76a1a345942fd69cde4370065fed299e') // Clef de TMDB
         .getMovie(16)
         .then( (m: MovieResponse) => this.playlistService.addOnPlaylistByName('benio', m) )
         .catch( err => console.error('Error getting movie:', err) ),
     1000 );

   setTimeout( () =>
       this.tmdb.init('76a1a345942fd69cde4370065fed299e') // Clef de TMDB
         .getMovie(17)
         .then( (m: MovieResponse) => this.playlistService.addOnPlaylistByName('benio', m) )
         .catch( err => console.error('Error getting movie:', err) ),
     1000 );

   setTimeout( () =>
       this.tmdb.init('76a1a345942fd69cde4370065fed299e') // Clef de TMDB
         .getMovie(18)
         .then( (m: MovieResponse) => this.playlistService.addOnPlaylistByName('benio', m) )
         .catch( err => console.error('Error getting movie:', err) ),
     1000 );

   setTimeout( () =>
       this.tmdb.init('76a1a345942fd69cde4370065fed299e') // Clef de TMDB
         .getMovie(19)
         .then( (m: MovieResponse) => this.playlistService.addOnPlaylistByName('benio', m) )
         .catch( err => console.error('Error getting movie:', err) ),
     1000 );

   setTimeout( () =>
       this.tmdb.init('76a1a345942fd69cde4370065fed299e') // Clef de TMDB
         .getMovie(20)
         .then( (m: MovieResponse) => this.playlistService.addOnPlaylistByName('benio', m) )
         .catch( err => console.error('Error getting movie:', err) ),
     1000 );
 }

}
