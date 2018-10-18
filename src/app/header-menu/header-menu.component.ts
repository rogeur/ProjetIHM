import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TmdbService} from '../tmdb.service';
import {NgForm} from '@angular/forms';
import {SearchMovieResponse} from '../tmdb-data/searchMovie';
import {RechercheService} from '../recherche.service';


@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})

export class HeaderMenuComponent implements OnInit {

  constructor(private router: Router, private search: RechercheService) { }
  ngOnInit() {
  }
  handleClick() {
    this.router.navigateByUrl('playlistMenu');
  }
  onSubmit(form: NgForm) {
    this.search.searchByName(form.value.searchReq);
  }
}
