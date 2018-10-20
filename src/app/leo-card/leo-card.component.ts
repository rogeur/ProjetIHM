import {Component, Input, OnInit} from '@angular/core';
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
  movies = [];
  @Input() _movie: MovieResponse;

  constructor(private search: RechercheService) {}

  ngOnInit() {
    this.moviesSubscription = this.search.subjectResult.subscribe(
      (movies) => {
          this.movies = movies;
      }
    );
    this.search.emitMoviesSubject();
  }
  pretty (overview: string) {
    overview.replace('\n', ' ');
    return overview.slice(0, 75) + ' ...';
  }
  get movie(): MovieResponse {
    return this.movies[0];
  }
  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}
