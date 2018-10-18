import {Injectable} from '@angular/core';
import {MovieResponse} from './tmdb-data/Movie';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Playlist {
  private name: string;
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
    return this.name;
  }
}

export class PlaylistService {
  playlistSubject = new Subject<Playlist[]>();
  playlists = new Array<Playlist>();
  emitPlaylistSubject() {
    this.playlistSubject.next(this.playlists.slice());
  }
  addPlaylist(name: string) {
    this.playlists.push(new Playlist(name));
    this.emitPlaylistSubject();
  }
  delPlaylist(name: string) {
    let i = 0;
    for (const playlist of this.playlists) {
      if (playlist.getName() === name) {
        this.playlists.splice(i, 1);
      }
      i++;
    }
    this.emitPlaylistSubject();
  }


}
