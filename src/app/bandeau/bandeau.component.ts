import {Component, Input, OnInit} from '@angular/core';
import {MovieResponse} from '../tmdb-data/Movie';
import {TmdbService} from '../tmdb.service';

@Component({
  selector: 'app-bandeau',
  templateUrl: './bandeau.component.html',
  styleUrls: ['./bandeau.component.css']
})
export class BandeauComponent implements OnInit {

  populaires = new Array<MovieResponse>();
  prochainement = new Array<MovieResponse>();

  constructor(private serviceTmdb: TmdbService) {
    this.initPopulaires();
    this.initProchainement();
  }

  @Input() nomBandeau: String;

  estAffichable: boolean ;

  ngOnInit() {
    this.estAffichable = true;
  }

  setEstAffichable() {
    if (this.estAffichable === true) {
      this.estAffichable = false;
    } else {
      this.estAffichable = true;
    }
  }

  estBandeauPopulaire() {
    return this.nomBandeau === 'populaires';
  }

  estBandeauProchainement() {
    return this.nomBandeau === 'prochainement en salles';
  }

  initPopulaires() {
    this.estAffichable = true;
    const id_filmPopulaires = [135397, 383498, 272, 500, 447200, 27205, 335983 , 395992];
    for (const id of id_filmPopulaires) {
        this.serviceTmdb.getMovie(id)
          .then( (m: MovieResponse) => this.populaires.push(m) )
          .catch( err => console.error('Error getting movie:', err) );
    }
  }

  initProchainement() {
    this.estAffichable = true;
    const id_filmPopulaires = [346910, 506043, 500664, 424139];
    for (const id of id_filmPopulaires) {
      this.serviceTmdb.getMovie(id)
        .then( (m: MovieResponse) => this.prochainement.push(m) )
        .catch( err => console.error('Error getting movie:', err) );
    }
  }


}


