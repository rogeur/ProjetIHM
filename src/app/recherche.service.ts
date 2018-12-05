import {Injectable} from '@angular/core';
import {MovieResult, SearchMovieResponse} from './tmdb-data/searchMovie';
import {TmdbService} from './tmdb.service';
import {Subject} from 'rxjs';
import {MovieResponse} from './tmdb-data/Movie';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {
  subjectResult = new Subject<MovieResult[]>();
  subjectRespons = new Subject<MovieResponse[]>();
  results = new Array<MovieResult>();
  movies = new Array<MovieResponse>();
  nbResult: number;

  constructor(private tmdb: TmdbService) {
    this.tmdb.init('76a1a345942fd69cde4370065fed299e');
  }

  searchByName(recherche: string) {
    const myQuery = ({
      query: ''
    });
    myQuery.query = recherche;
    this.tmdb.searchMovie(myQuery)
      .then((m: SearchMovieResponse) => {
        this.results = m.results.slice();
        this.nbResult = this.results.length;
        this.emitMoviesSubject();
      })
      .then( () => this.emitMovieResponseTab())
      .catch(err => console.error('Error getting movie:', err));
     // convertion MovieResult -> MovieRespons
  }
  emitMoviesSubject() {
    this.subjectResult.next(this.results);
  }
  emitResponsSubject() {
    this.subjectRespons.next(this.movies);
  }
  async convertMovieResult(movie: MovieResult) {
    return await this.tmdb.getMovie(movie.id);
  }

  emitMovieResponseTab() {
    this.results.forEach((movieResult) => {
      this.convertMovieResult(movieResult)
        .then((movie) => {
          this.movies.push(movie);
        })
        .then( () => {
          this.emitResponsSubject();
        })
        .catch((err) => console.log('erreur', err));
    });
  }
}
