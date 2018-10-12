import {Component, Input, NgModule, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent implements OnInit {

  public playlist: String;

  @Input() playlists: String[];

  constructor() {
  }

  ngOnInit() {
  }

  getPlaylists(): String[] {
    return this.playlists;
  }

  onSubmit(): void {
    console.log(this.playlist);
  }

}
