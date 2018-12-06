import { Component, OnInit } from '@angular/core';
import {RechercheService} from '../../recherche.service';
import {Subscription} from 'rxjs';
import {RechercheAvanceeService} from '../../recherche-avancee.service';

@Component({
  selector: 'app-handle-movies',
  templateUrl: './handle-movies.component.html',
  styleUrls: ['./handle-movies.component.css']
})
export class HandleMoviesComponent implements OnInit {
  moviesSubscription: Subscription;
  dureeSubscription: Subscription;
  nbResultSubscription: Subscription;
  movies = [];
  duree: number;
  nbResultat: number;
  constructor(private search: RechercheService,
              private advancedSearch: RechercheAvanceeService) { this.duree = 360; }

  ngOnInit() {
    this.moviesSubscription = this.search.subjectRespons.subscribe(
      (movies) => {
        this.movies = movies;
        this.movies = this.movies.slice(0, 16);
      });
    this.dureeSubscription = this.advancedSearch.dureeSubject.subscribe(
      (duree) => {
        this.duree = duree;
      }
    );
    this.nbResultSubscription = this.search.subjectNbResult.subscribe(
      (nbRes) => {
        this.nbResultat = nbRes;
      }
    );
  }
}
