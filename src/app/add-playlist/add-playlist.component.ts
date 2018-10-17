import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PlaylistService} from '../playlist.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.css']
})
export class AddPlaylistComponent implements OnInit {
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
