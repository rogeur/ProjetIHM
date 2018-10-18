import { Component, OnInit } from '@angular/core';
import {SearchMovieResponse} from '../tmdb-data/searchMovie';
import {Subscription} from 'rxjs';
import {RechercheService} from '../recherche.service';
import {MovieResponse} from '../tmdb-data/Movie';

@Component({
  selector: 'app-leo-card',
  templateUrl: './leo-card.component.html',
  styleUrls: ['./leo-card.component.css']
})
export class LeoCardComponent implements OnInit {
  moviesSubscription: Subscription;
  date: string;
  title: string;
  path: string;
  description: string;
  _movie: MovieResponse;

  constructor(private search: RechercheService) {}

  ngOnInit() {
    this.moviesSubscription = this.search.subjectMovies.subscribe(
      (movies: SearchMovieResponse) => {
          this._movie = movies.results[0];
          this.date = this._movie.release_date;
          this.title = this._movie.title;
          this.path = this._movie.poster_path;
          this.description = this.pretty(this._movie.overview);
      }
    );
    this.search.emitMoviesSubject();
  }
  pretty (overview: string) {
    return overview.slice(0, 75) + ' ...';
  }
  get movie(): MovieResponse {
    return this._movie;
  }
  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}
