import {Component, Input, OnInit} from '@angular/core';
import {MovieResponse} from '../../tmdb-data/Movie';
import {Router} from '@angular/router';
import {RechercheService} from '../../recherche.service';

@Component({
  selector: 'app-medium-flim',
  templateUrl: './medium-flim.component.html',
  styleUrls: ['./medium-flim.component.css']
})
export class MediumFlimComponent implements OnInit {

  @Input() filmResult: MovieResponse;
  private displayModal = false;


  constructor(private router: Router, private rechercher: RechercheService) { }

  ngOnInit() {
    this.rechercher.convertMovieResult(this.filmResult)
      .then((m: MovieResponse) => this.filmResult = m )
      .catch(err => console.log('film non existant : ', err));
    console.log(this.filmResult);
  }

  get idMovie(): number {
    return this.filmResult.id;
  }

  get movie(): MovieResponse {
    return this.filmResult;
  }

  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  getTitle(): String {
    if (this.filmResult.title.length > 17) {
      return this.filmResult.title.slice(0, 17) + ' ...';
    } else {
      return this.filmResult.title;
    }
  }

  getSummary(): String {
    if (this.filmResult.overview.length > 180) {
      return this.filmResult.overview.slice(0, 180) + ' ...';
    } else {
      return this.filmResult.overview;
    }
  }

  get buttonThreeVertical(): string {
    return '/assets/button-of-three-vertical-squares.svg';
  }

  getTime(): String {
    // console.log(this.filmResult.vote_average);
    return (( this.filmResult.runtime / 60) ^ 0).toString() + 'h ' + (this.filmResult.runtime % 60).toString() + 'm';
  }

  get displayModalR(): boolean {
    return this.displayModal;
  }

  displayModalClick() {
    this.displayModal ? this.displayModal = false : this.displayModal = true;
  }

  handleClickMovie(id: number) {
    this.router.navigate(['movie/' + id]);
  }

}
