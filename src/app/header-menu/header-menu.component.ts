import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TmdbService} from '../tmdb.service';
import {NgForm} from '@angular/forms';
import {SearchMovieResponse} from '../tmdb-data/searchMovie';


@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})

export class HeaderMenuComponent implements OnInit {

  private myQuery = ({
    query: ''
  });
  private movies: SearchMovieResponse;
  constructor(private router: Router, private tmdb: TmdbService) { }
  ngOnInit() {
  }
  handleClick() {
    this.router.navigateByUrl('playlistMenu');
  }
  onSubmit(form: NgForm) {
    this.myQuery.query = form.value.searchReq;
    this.searchByName();
  }
  searchByName() {
    this.tmdb.init('76a1a345942fd69cde4370065fed299e')
      .searchMovie(this.myQuery)
      .then( (m: SearchMovieResponse) => console.log('result: ', this.movies = m ) )
      .catch(err => console.error('Error getting movie:', err) );
  }
}
