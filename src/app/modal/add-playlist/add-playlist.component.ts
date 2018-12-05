import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PlaylistService} from '../../playlist.service';

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.css']
})

export class AddPlaylistComponent implements OnInit {
  @Output() addStatut = new EventEmitter();
  constructor(private playlistService: PlaylistService) {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.playlistService.addPlaylist(form.value.playlistName);
  }
  onClose() {
    this.addStatut.emit(false);
  }
}
