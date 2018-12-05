import { Pipe, PipeTransform } from '@angular/core';
import {MovieResponse} from './tmdb-data/Movie';

@Pipe({
  name: 'advancedSearch'
})
export class AdvancedSearchPipe implements PipeTransform {

  transform(movies: MovieResponse[], duration?: number, genre?: number): MovieResponse[] {
    let filtredTab = movies;
    if (movies && movies.length) {
      if (duration) {
        filtredTab = movies.filter((movie) => movie.runtime <= duration);
      }
      if (genre) {
        filtredTab = movies.filter( (movie) => {
          movie.genres.forEach( (categ) => {
            return genre === categ;
          });
        });
      }
    }
    return filtredTab;
  }
  /*
  gotGender(moviesGenre: MovieGenre[], genre: number) : boolean {
    moviesGenre.forEach( (element) => {
      if (element.id = genre) {
        return true;
      }
    });
    return false;
  }
  */
}
