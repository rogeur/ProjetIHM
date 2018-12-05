import {Component, Input, OnInit} from '@angular/core';
import {MovieResponse} from '../../tmdb-data/Movie';
import {SearchMovieResponse} from '../../tmdb-data/searchMovie';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {

  @Input() filmarray: SearchMovieResponse;

  constructor() { }

  ngOnInit() {

  }


  getResult(): MovieResponse[] {
    return this.filmarray.results;
  }



}
