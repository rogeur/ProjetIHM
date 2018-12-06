import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechercheAvanceeService {
  dureeSubject = new Subject<number>();
  categorieSubject = new Subject<number>();

  emitDureeSub(value) {
    this.dureeSubject.next(value * 60);
  }
  emitCategorieSub(value) {
    this.categorieSubject.next(value);
  }
}
