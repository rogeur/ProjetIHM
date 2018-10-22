import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TmdbService} from './tmdb.service';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { FilmComponent } from './film/film.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { PlayslistMenuComponent } from './playslist-menu/playslist-menu.component';
import {RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';
import { AddPlaylistComponent } from './add-playlist/add-playlist.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { RemovePlaylistComponent } from './remove-playlist/remove-playlist.component';
import {PlaylistService} from './playlist.service';
import { HandleFilmComponent } from './handle-film/handle-film.component';

const appRoutes: Routes = [
  { path: '', component: HeaderMenuComponent },
  { path: 'playlistMenu', component: PlayslistMenuComponent},
  { path: 'home', component: HeaderMenuComponent}
];
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownListComponent,
    FilmComponent,

    AppComponent,
    HeaderMenuComponent,
    PlayslistMenuComponent,
    PlaylistComponent,
    AddPlaylistComponent,
    RemovePlaylistComponent,
    HandleFilmComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    MatSelectModule,
    FormsModule
  ],
  providers: [
    TmdbService,
    PlaylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
