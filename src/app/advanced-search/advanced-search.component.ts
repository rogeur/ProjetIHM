import { Component, OnInit } from '@angular/core';

export interface select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  genres: select[] = [
    {value : 'Action', viewValue: 'Action'},
    {value : 'Comedie', viewValue: 'Comedie'},
    {value : 'Horeur', viewValue: 'Horeur'}
  ];

  langs: select[] = [
    {value : 'french', viewValue: 'fr'},
    {value : 'english', viewValue: 'eng'},
  ];

  ans: select[] = [
    {value : '2001', viewValue: '2001'},
    {value : '2002', viewValue: '2002'},
    {value : '2003', viewValue: '2003'}
  ];



  constructor() { }

  ngOnInit() {
  }




}
