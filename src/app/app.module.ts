import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TmdbService} from './tmdb.service';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { PlayslistMenuComponent } from './bandeau-gauche/playslist-menu/playslist-menu.component';
import {RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import { PlaylistComponent } from './bandeau-gauche/playlist/playlist.component';
import { AddPlaylistComponent } from './modal/add-playlist/add-playlist.component';
import {FormsModule} from '@angular/forms';
import { RemovePlaylistComponent } from './modal/remove-playlist/remove-playlist.component';
import {PlaylistService} from './playlist.service';
import {HandlePlaylistComponent } from './bandeau-gauche/handle-playlist/handle-playlist.component';
import {BandeauPlaylistFilmComponent} from './bandeau-playlist-film/bandeau-playlist-film.component';
import {BigFilmComponent} from './film/big-film/big-film.component';

import { BandeauResultSearchComponent } from './affichage-film/result-search/bandeau-result-search.component';
import {  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule, } from '@angular/material/';
import {HandleMoviesComponent} from './affichage-film/handle-movies/handle-movies.component';
import {BandeauComponent} from './affichage-film/bandeau/bandeau.component';
import { HandleBandeauComponent } from './handle-bandeau/handle-bandeau.component';
import { BandeauMovieComponent } from './affichage-film/bandeau-movie/bandeau-movie.component';
import { LittleFilmComponent } from './film/little-film/little-film.component';
import { MediumFlimComponent } from './film/medium-flim/medium-flim.component';

const appRoutes: Routes = [
  { path: '', component: HandleBandeauComponent},
  { path: 'recherche', component: HandleMoviesComponent },
  { path: 'showPlaylist/:name', component: BandeauPlaylistFilmComponent },
  { path: 'movie/:id', component: BandeauMovieComponent },
  { path: 'home', component: HandleBandeauComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BandeauResultSearchComponent,
    BandeauPlaylistFilmComponent,
    HandleMoviesComponent,
    AppComponent,
    HeaderMenuComponent,
    PlayslistMenuComponent,
    PlaylistComponent,
    AddPlaylistComponent,
    RemovePlaylistComponent,
    HandlePlaylistComponent,
    BandeauPlaylistFilmComponent,
    BandeauComponent,
    HandleBandeauComponent,
    BandeauMovieComponent,
    LittleFilmComponent,
    MediumFlimComponent,
    BigFilmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    MatSelectModule,
    FormsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  providers: [
    TmdbService,
    PlaylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
