import {Component, Input, OnInit} from '@angular/core';
import {MovieResponse} from '../tmdb-data/Movie';
import {RechercheService} from '../recherche.service';

@Component({
  selector: 'app-big-film',
  templateUrl: './big-film.component.html',
  styleUrls: ['./big-film.component.css']
})
export class BigFilmComponent implements OnInit {

  @Input() filmResult: MovieResponse;
  private _modalAjout = false;

  constructor( private rechercher: RechercheService) { }

  ngOnInit() {
    this.rechercher.convertMovieResult(this.filmResult)
      .then((m: MovieResponse) => this.filmResult = m )
      .catch(err => console.log('film non existant : ', err));
    console.log(this.filmResult);
  }
  get modalAjout(): boolean {
    return this._modalAjout;
  }

  displaymodalAjout() {
    this._modalAjout = !this._modalAjout;
  }

  get movie(): MovieResponse {
    return this.filmResult;
  }

  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  getTitle(): String {
      return this.filmResult.title;
  }

  getSummary(): String {
    if (this.filmResult.overview.length > 180) {
      return this.filmResult.overview.slice(0, 180) + ' ...';
    } else {
      return this.filmResult.overview;
    }
  }

  getStatus(): String {
    return this.filmResult.status;
  }

  getBudget(): number {
    return this.filmResult.budget;
  }

  getRecette(): number {
    return this.filmResult.revenue;
  }

  getOriginalTitle(): String {
    return  this.filmResult.original_title;
  }

  getTime(): String {
    // console.log(this.filmResult.vote_average);
    return (( this.filmResult.runtime / 60) ^ 0).toString() + 'h ' + (this.filmResult.runtime % 60).toString() + 'm';
  }

  get NBStar(): string[] {
    if (this.filmResult.vote_average > 8) {
      return ['/assets/star.svg', '/assets/star.svg', '/assets/star.svg', '/assets/star.svg', '/assets/star.svg'];
    } else if (this.filmResult.vote_average > 6) {
      return ['/assets/star.svg', '/assets/star.svg', '/assets/star.svg', '/assets/star.svg'];
    } else if (this.filmResult.vote_average > 4) {
      return ['/assets/star.svg', '/assets/star.svg', '/assets/star.svg'];
    } else if (this.filmResult.vote_average > 2) {
      return ['/assets/star.svg', '/assets/star.svg'];
    } else {
      return ['/assets/star.svg'];
    }
  }



}
