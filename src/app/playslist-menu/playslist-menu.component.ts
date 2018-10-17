import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-playslist-menu',
  templateUrl: './playslist-menu.component.html',
  styleUrls: ['./playslist-menu.component.css']
})
export class PlayslistMenuComponent implements OnInit {
  remove = false;
  add = false;
  playlists = [
    {name: 'humour'},
    {name: 'action'},
    {name: 'thriller'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  handleClick() {
    this.router.navigate(['/home']);
  }
  handleAdd() {
    this.add = !this.add;
  }
}
