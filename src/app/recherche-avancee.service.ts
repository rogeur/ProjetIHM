import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechercheAvanceeService {
  dureeSubject = new Subject<number>();
  categorieSubject = new Subject<number>();
  emitDuree(duree: Observable<number>) {
    duree.subscribe((dur) => {
      this.dureeSubject.next(dur * 60);
      console.log('duree: ' + dur * 60);
    });
  }
  emitDureeSub(value) {
    console.log('temps: ' + value * 60);
    this.dureeSubject.next(value * 60);
  }
  emitCategorieSub(value) {
    this.categorieSubject.next(value);
  }
  getSubject(): Subject<number> {
    return this.dureeSubject;
  }
}
