import {Component, Input, OnInit} from '@angular/core';
import {TmdbService} from "../tmdb.service";
import {MovieResponse} from "../tmdb-data/Movie";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  private _movie: MovieResponse;

  @Input() id: number;


  constructor(private tmdb: TmdbService) {
    setTimeout( () =>
        tmdb.init('76a1a345942fd69cde4370065fed299e') // Clef de TMDB
          .getMovie(this.id)
          .then( (m: MovieResponse) => console.log('Movie 12:', this._movie = m) )
          .catch( err => console.error('Error getting movie:', err) ),
      1000 );
  }

  ngOnInit() {
  }

  get movie(): MovieResponse {
    return this._movie;
  }

  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

}
