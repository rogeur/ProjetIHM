import {Injectable} from '@angular/core';
import {MovieResponse} from './tmdb-data/Movie';
@Injectable({
  providedIn: 'root',
})
class Playlist {
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
}

export class PlaylistService {
  playlists: Playlist[];
  addPlaylist(name: string) {
    this.playlists.push(new Playlist(name));
  }
}
