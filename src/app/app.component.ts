import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playlistMenu = false;

  constructor() {
  }

  handlePlaylist() {
    this.playlistMenu = !this.playlistMenu;
  }

  mouseEnter() {
    this.handlePlaylist();
  }

  mouseOut(event) {
    this.playlistMenu = event;
  }
}
