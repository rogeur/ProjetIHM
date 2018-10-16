import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TmdbService} from '../tmdb.service';
import {MovieResponse} from '../tmdb-data/Movie';
import {NgForm} from '@angular/forms';
import {SearchPeopleQuery} from '../tmdb-data/SearchPeople';
import {SearchMovieResponse} from '../tmdb-data/searchMovie';


@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})

export class HeaderMenuComponent implements OnInit {

  private myQuery: number;
  private encode: any;
  private movies: SearchMovieResponse;
  private movie: MovieResponse;
  constructor(private router: Router, private tmdb: TmdbService) { }
  ngOnInit() {
  }
  handleClick() {
    this.router.navigateByUrl('playlistMenu');
  }
  onSubmit(form: NgForm) {
    this.myQuery = form.value.searchReq;
    /* verification de l'encodage */
    // this.encode = encodeURI(this.myQuery);
    // console.log(this.encode);
    // console.log(decodeURI(this.myQuery));
    console.log(this.myQuery);
    this.searchById();
  }
  searchByName() {
    this.tmdb.init('76a1a345942fd69cde4370065fed299e')
      .searchMovie(this.encode)
      .then( (m: SearchMovieResponse) => this.movies = m )
      .catch(err => console.error('Error getting movie:', err) );
  }
  searchById() {
    this.tmdb.init('76a1a345942fd69cde4370065fed299e')
      .getMovie(this.myQuery)
      .then( (m: MovieResponse) => console.log('Movie 13:', this.movie = m) )
      .catch(err => console.error('Error getting movie:', err) );
  }

}
