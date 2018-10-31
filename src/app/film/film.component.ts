import {Component, Input, OnInit} from '@angular/core';
import {MovieResponse} from '../tmdb-data/Movie';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {


  @Input() id: number;

  @Input() filmResult: MovieResponse;

  @Input() type: String;

  @Input() playList: boolean;

  private displayModal = false;

  constructor() {
  }

  ngOnInit() {
  }

  get isPlayList(): boolean {
    console.log(this.playList);
    return this.playList === undefined ? false : true;
  }


  get big(){
    return this.type == 'big';
  }

  get petit() {
    return this.type == 'petit';
  }

  get medium(){
    return this.type == 'medium';
  }

   get playlist(){
    return this.type == 'playlist';
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
    return this.filmResult.overview;
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

  get buttonThreeVertical(): string {
    return '/assets/button-of-three-vertical-squares.svg';
  }

  getTime(): String {
    return ((this.filmResult.runtime / 60) ^ 0).toString() + 'h ' + (this.filmResult.runtime % 60).toString() + 'm';
  }

  get displayModalR(): boolean {
    return this.displayModal;
  }

  displayModalClick() {
    this.displayModal ? this.displayModal = false : this.displayModal = true;
  }

}

