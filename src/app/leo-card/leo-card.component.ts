import {Component, Input, OnInit} from '@angular/core';
import {MovieResponse} from '../tmdb-data/Movie';

@Component({
  selector: 'app-leo-card',
  templateUrl: './leo-card.component.html',
  styleUrls: ['./leo-card.component.css']
})
export class LeoCardComponent implements OnInit {

  @Input() movie: MovieResponse;

  constructor() {}

  pretty (overview: string) {
    overview.replace('\n', ' ');
    return overview.slice(0, 75) + ' ...';
  }

  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
  ngOnInit() {}
}
