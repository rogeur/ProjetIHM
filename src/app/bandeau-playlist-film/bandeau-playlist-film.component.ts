import {Component, Input, OnInit} from '@angular/core';
import {Playlist, PlaylistService} from '../playlist.service';
import {MovieResult} from '../tmdb-data/searchMovie';
import {TmdbService} from '../tmdb.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {filter} from 'rxjs/operators';
import {MovieResponse} from '../tmdb-data/Movie';

@Component({
  selector: 'app-bandeau-playlist-film',
  templateUrl: './bandeau-playlist-film.component.html',
  styleUrls: ['./bandeau-playlist-film.component.css'],
  providers: [PlaylistService]
})
export class BandeauPlaylistFilmComponent implements OnInit {

  @Input() playlist: Playlist;

  constructor(private playlistService: PlaylistService, private tmdb: TmdbService, public anAuth: AngularFireAuth, private db: AngularFireDatabase) {

    this.playlistService.addPlaylist('benio');

   setTimeout( () =>
        tmdb.init('76a1a345942fd69cde4370065fed299e') // Clef de TMDB
          .getMovie(12)
          .then( (m: MovieResponse) => this.playlistService.addOnPlaylistByName('benio', m) )
          .catch( err => console.error('Error getting movie:', err) ),
      1000 );

    setTimeout( () =>
        tmdb.init('76a1a345942fd69cde4370065fed299e') // Clef de TMDB
          .getMovie(14)
          .then( (m: MovieResponse) => this.playlistService.addOnPlaylistByName('benio', m) )
          .catch( err => console.error('Error getting movie:', err) ),
      1000 );
  }

  ngOnInit() {
  }

 get firstMovie(): MovieResult {
    return this.myPlaylist.getFirstMovie();
 }

 get numberMovie(): number {
    if (this.myPlaylist != null) {
      return this.myPlaylist.getNumberOfMovies();
    } return 0;
 }

 get myPlaylist(): Playlist {
    return this.playlistService.getPlaylistByName('benio');
 }

 movie(id: number) {
    return this.playlistService.getPlaylistByName('benio').getMovie(id);
 }


}
