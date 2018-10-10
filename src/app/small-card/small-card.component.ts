import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  date: Date;
  title: string;
  path: string;
  description: string;
  constructor() {
    this.title = 'Kill Bill';
    this.path = 'assets/killBill.jpg';
    this.description = 'Au cours d\'une cérémonie de mariage en plein désert, ' +
      'un commando fait irruption dans la chapelle et tire sur les convives.' +
      ' Laissée pour morte, la Mariée enceinte retrouve ses esprits après un coma de quatre ans.';
  }

  ngOnInit() {
    this.pretty();
  }
  pretty () {
    this.description = this.description.slice(0, 75) + ' ...';
  }

}
