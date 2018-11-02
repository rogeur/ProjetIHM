import { Component, OnInit } from '@angular/core';
import {MovieResponse} from '../tmdb-data/Movie';
import {PlaylistService} from '../playlist.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {ActivatedRoute} from '@angular/router';
import {TmdbService} from '../tmdb.service';

@Component({
  selector: 'app-bandeau-movie',
  templateUrl: './bandeau-movie.component.html',
  styleUrls: ['./bandeau-movie.component.css']
})
export class BandeauMovieComponent implements OnInit {

  private id: number;
  public movie: MovieResponse;
  constructor(private playlistService: PlaylistService,
              private tmdb: TmdbService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.tmdb.getMovie(this.id)
      .then( (m: MovieResponse) => this.movie = m)
      .catch( err => console.error('Error getting movie:', err));
  }
}
