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
  getMovie(index: number): MovieResponse {
    return this.movies[index];
  }
  delMovie(index: number): void {
    this.movies.splice(index, 1);
  }
}

export class PlaylistService {
  playlistSubject = new Subject<Playlist[]>();
  playlists = new Array<Playlist>();
  emitPlaylistSubject() {
    this.playlistSubject.next(this.playlists.slice());
  }
  addPlaylist(name: string): void {
    if (!this.playlistAlreadyExist(name)) {
      this.playlists.push(new Playlist(name));
      this.emitPlaylistSubject();
    }
  }
  delPlaylistByName(name: string): void {
    let i = 0;
    for (const playlist of this.playlists) {
      if (playlist.getName() === name) {
        this.playlists.splice(i, 1);
      }
      i++;
    }
    this.emitPlaylistSubject();
  }

  getPlaylistByName(name: string): Playlist {
    for (const playlist of this.playlists) {
      if (playlist.getName() === name) {
        return playlist;
      }
    }
    console.log('Aucune playlist correspondante');
    return null;
  }

  delPlaylistByIndex(index: number): void {
    this.playlists.splice(index, 1);
    this.emitPlaylistSubject();
  }
  addOnPlaylistByName(name: string, movie: MovieResponse): void {
    let add = false;
    for (const playlist of this.playlists) {
      if (playlist.getName() === name) {
        playlist.addMovie(movie);
        add = true;
        this.emitPlaylistSubject();
      }
    }
    if (add === false) {
      alert('pas de playlist portant ce nom!');
    }
  }
  addOnPlaylistByIndex(indice: number, movie: MovieResponse): void {
    this.playlists[indice].addMovie(movie);
    this.emitPlaylistSubject();
  }
  playlistAlreadyExist(name: string): boolean {
    for (const playlist of this.playlists) {
      if (playlist.getName() === name) {
        return true;
      }
    }
    return false;
  }
}
