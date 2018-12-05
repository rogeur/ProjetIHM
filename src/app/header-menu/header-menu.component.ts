import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {RechercheService} from '../recherche.service';


@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})

export class HeaderMenuComponent implements OnInit {
  @Output() playlistStatut = new EventEmitter;
  rechercheAvancee = false;

  constructor(private router: Router, private search: RechercheService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.search.searchByName(form.value.searchReq);
    this.router.navigate(['recherche']);
  }

  mouseEnter() {
    this.playlistStatut.emit(true);
  }
  advanced() {
    console.log('advanced');
    this.rechercheAvancee = !this.rechercheAvancee;
  }
}
