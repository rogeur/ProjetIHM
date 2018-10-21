import { Component, OnInit } from '@angular/core';
import {RechercheService} from '../recherche.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-handle-movies',
  templateUrl: './handle-movies.component.html',
  styleUrls: ['./handle-movies.component.css']
})
export class HandleMoviesComponent implements OnInit {
  moviesSubscription: Subscription;
  movies = [];
  constructor(private search: RechercheService) { }

  ngOnInit() {
    this.moviesSubscription = this.search.subjectResult.subscribe(
      (movies) => {
        this.movies = movies;
        this.movies = this.movies.slice(0, 16);
      }
    );
    // this.search.emitMoviesSubject();
  }

}
