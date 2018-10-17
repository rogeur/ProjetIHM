import {Component, Input, OnInit} from '@angular/core';
import {PlaylistService} from '../playlist.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-remove-playlist',
  templateUrl: './remove-playlist.component.html',
  styleUrls: ['./remove-playlist.component.css']
})
export class RemovePlaylistComponent implements OnInit {
  constructor(private playlistService: PlaylistService, private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value.name);
  }
  onAnnule() {
    this.router.navigate(['home']);
  }

}
