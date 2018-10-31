import {Component, HostListener, Input, OnInit} from '@angular/core';
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


  constructor() {
  }

  ngOnInit() {

  }

  get big(){
    return this.type == 'big';
  }

  get petit() {
    return this.type == 'petit';
  }

  get little(){
    return this.type == 'little';
  }

  get medium(){
    return this.type == 'medium';
  }

   get playlist(){
    return this.type == 'playlist';
   }

   get toto(){
    return this.type == 'toto';
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

  // get type(): String{
  //   return this.type;
  // }

  getTime(): String{
    return ((this.filmResult.runtime / 60) ^ 0).toString() + 'h ' + (this.filmResult.runtime % 60).toString() + 'm';
  }

}

//
// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-small-card',
//   templateUrl: './small-card.component.html',
//   styleUrls: ['./small-card.component.css']
// })
// export class SmallCardComponent implements OnInit {
//   date: Date;
//   title: string;
//   path: string;
//   description: string;
//   constructor() {
//     this.title = 'Kill Bill';
//     this.path = 'assets/killBill.jpg';
//     this.description = 'Au cours d\'une cérémonie de mariage en plein désert, ' +
//       'un commando fait irruption dans la chapelle et tire sur les convives.' +
//       ' Laissée pour morte, la Mariée enceinte retrouve ses esprits après un coma de quatre ans.';
//   }
//
//   ngOnInit() {
//     this.pretty();
//   }
//   pretty () {
//     this.description = this.description.slice(0, 75) + ' ...';
//   }
//
// }

