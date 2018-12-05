import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {RechercheAvanceeService} from '../recherche-avancee.service';
import {Observable, Subject} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-recherche-avancee',
  templateUrl: './recherche-avancee.component.html',
  styleUrls: ['./recherche-avancee.component.css']
})
export class RechercheAvanceeComponent implements OnInit, OnChanges {
  @Input() value: Subject<number> = new Subject<number>();
  @Input() valueF: FormControl = new FormControl();
  categorie = [
    {
      id: 28,
      genre: 'Action'
    },
    {
      id: 878,
      genre: 'Science-Fiction',
    },
    {
      id: 53,
      genre: 'Thriller'
    },
    {
      id: 12,
      genre: 'Aventure'
    },
    {
      id: 18,
      genre: 'Drame'
    },
    {
      id: 9648,
      genre: 'Mystère',
    },
    {
      id: 10349,
      genre: 'Survie'
    },
    {
      id: 10292,
      genre: 'Gore'
    },
    {
      id: 8087,
      genre: 'Horreur'
    }
  ];

  constructor(private rechercheAvancee: RechercheAvanceeService) {
  }


  ngOnInit() {
    /*
    this.value.next(10);
    console.log('valeur1' + this.value);
    if (this.value) {
      this.value.subscribe((value) => {
        console.log('valeur2' + value);
      }, (error) => {
        console.log('erreur' + error);
        });
    }
    */
  }

  formatValue(value: number | null) {
    if (!value) {
      value = 0;
    }
    return value + 'h';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ok');
    if (this.value) {
      this.value.subscribe((value) => {
        console.log('valeur: ' + value);
      }, (error) => console.log('erreur: ', error));
    }
  }
  searchButton() {
    this.rechercheAvancee.emitDureeSub(this.valueF);
  }

}
