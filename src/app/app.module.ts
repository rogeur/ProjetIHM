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
import {MatCardModule, MatSliderModule} from '@angular/material';
import { BandeauResultSearchComponent } from './bandeau-result-search/bandeau-result-search.component';
import { BandeauAdvancedScearchComponent } from './bandeau-advanced-scearch/bandeau-advanced-scearch.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    BandeauResultSearchComponent,
    BandeauAdvancedScearchComponent,

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
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [TmdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
