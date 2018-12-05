import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechercheAvanceeService {
  dureeSubject = new Subject<number>();
  emitDuree(duree: Observable<number>) {
    duree.subscribe((dur) => {
      this.dureeSubject.next(dur * 60);
      console.log('duree: ' + dur * 60);
    });
  }
  emitDureeSub(value) {
    console.log(value * 60);
    this.dureeSubject.next(value * 60);
  }
  getSubject(): Subject<number> {
    return this.dureeSubject;
  }
}
