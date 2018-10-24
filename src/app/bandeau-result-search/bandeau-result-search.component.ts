import {Component, Input, OnInit} from '@angular/core';
import {MovieResponse} from '../tmdb-data/Movie';
import {SearchMovieResponse} from '../tmdb-data/searchMovie';

@Component({
  selector: 'app-bandeau-result-search',
  templateUrl: './bandeau-result-search.component.html',
  styleUrls: ['./bandeau-result-search.component.css']
})
export class BandeauResultSearchComponent implements OnInit {

  @Input() filmarray: SearchMovieResponse;

  constructor() { }

  ngOnInit() {

  }


  getResult(): MovieResponse[] {
    return this.filmarray.results;
  }



}
