import { Injectable } from '@angular/core';
import {SearchMovieResponse} from './tmdb-data/searchMovie';
import {TmdbService} from './tmdb.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {
  movies: SearchMovieResponse;
  subjectMovies = new Subject<SearchMovieResponse>();
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
        console.log('result: ', this.movies = m);
        this.nbResult = this.movies.results.slice().length;
        this.emitMoviesSubject();
      })
      .catch(err => console.error('Error getting movie:', err) );
  }
  emitMoviesSubject() {
    this.movies.results.slice();
    this.subjectMovies.next(this.movies);
  }
  /*
  getMovie(indice: number): object {
    if (this.movies !== null) {
      return this.movies.results[indice];
    } else {
      console.log('aucun résultat de recherche');
      return null;
    }
  }
  */
}
