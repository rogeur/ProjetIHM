import {Injectable} from '@angular/core';
import {MovieResponse} from './tmdb-data/Movie';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Playlist {
  private readonly name: string;
  private movies: MovieResponse[];

  constructor(name: string, ...movies) {
    this.name = name;
    this.movies = movies;
  }
  getNumberOfMovies(): number {
    return this.movies.length;
  }

  addMovie(movie: MovieResponse) {
    this.movies.push(movie);
  }
  getName(): string {
    console.log(this.name);
    return this.name;
  }
}

export class PlaylistService {
  playlistSubject = new Subject<Playlist[]>();
  playlists = [];
  emitPlaylistSubject() {
    this.playlistSubject.next(this.playlists.slice());
  }
  addPlaylist(name: string) {
    this.playlists.push(new Playlist(name));
    this.emitPlaylistSubject();
  }


}
