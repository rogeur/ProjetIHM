import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieResponse} from '../../tmdb-data/Movie';
import {RechercheService} from '../../recherche.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-little-film',
  templateUrl: './little-film.component.html',
  styleUrls: ['./little-film.component.css']
})
export class LittleFilmComponent implements OnInit {

  @Input() filmResult: MovieResponse;

  @Input() playList: boolean;

  @Output() movieDel = new EventEmitter<MovieResponse>();

  private displayModal = false;

  constructor(private router: Router, private rechercher: RechercheService) { }

  ngOnInit() {
    this.rechercher.convertMovieResult(this.filmResult)
      .then((m: MovieResponse) => this.filmResult = m )
      .catch(err => console.log('film non existant : ', err));
  }

  get isPlayList(): boolean {
    return this.playList !== undefined;
  }

  get movie(): MovieResponse {
    return this.filmResult;
  }

  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  getTitle(): String {
    if (this.filmResult.title.length > 17 ) {
      return this.filmResult.title.slice(0, 17) + ' ...';
    } else {
      return this.filmResult.title;
    }
  }

  displayModalClick() {
    this.displayModal ? this.displayModal = false : this.displayModal = true;
  }

  handleClickMovie(id: number) {
    this.router.navigate(['movie/' + id]);
  }

  get displayModalR(): boolean {
    return this.displayModal;
  }

   get buttonThreeVertical(): string {
    return '/assets/button-of-three-vertical-squares.svg';
  }

  get idMovie(): number {
    return this.filmResult.id;
  }

  delMovie(): void {
    this.movieDel.emit(this.movie);
  }

}
