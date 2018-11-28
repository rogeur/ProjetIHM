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
  results = new Array<MovieResult>();
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
      .catch(err => console.error('Error getting movie:', err));
  }
  emitMoviesSubject() {
    this.subjectResult.next(this.results);
  }
  async convertMovieResult(movie: MovieResult) {
    return await this.tmdb.getMovie(movie.id);
  }
}
