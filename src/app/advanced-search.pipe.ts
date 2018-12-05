import { Pipe, PipeTransform } from '@angular/core';
import {MovieResult} from './tmdb-data/searchMovie';
import {MovieResponse} from './tmdb-data/Movie';

@Pipe({
  name: 'advancedSearch'
})
export class AdvancedSearchPipe implements PipeTransform {

  transform(movies: MovieResponse[], duration?: number, genre?: string): MovieResponse[] {
    if (movies && movies.length) {
      return movies.filter((movie) => {
        return movie.runtime <= duration;
      });
    } else {
      return movies;
    }
  }
}
