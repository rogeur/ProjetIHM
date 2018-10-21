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

  pretty (overview: string): string {
    if (overview.length <= 65 ) {
      return overview.replace('\n', ' ');
    } else {
      return overview.replace('\n', ' ').slice(0, 65) + ' ...';;
    }
  }

  prettyTitle(title: string): string {
    if (title.length <= 14) {
      return title.replace('\n', ' ');
    } else {
      return title.replace('\n', ' ').slice(0, 14) + ' ...';
    }
  }

  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
  ngOnInit() {}
}
