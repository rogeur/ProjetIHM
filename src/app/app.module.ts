import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { Routes } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';
import { AddPlaylistComponent } from './add-playlist/add-playlist.component';
import { RemovePlaylistComponent } from './remove-playlist/remove-playlist.component';
import { HandleFilmComponent } from './handle-film/handle-film.component';

const appRoutes: Routes = [
  { path: '', component: HeaderMenuComponent },
  { path: 'playlistMenu', component: PlayslistMenuComponent},
  { path: 'home', component: HeaderMenuComponent}
];
import { BandeauResultSearchComponent } from './bandeau-result-search/bandeau-result-search.component';
import { BandeauAdvancedScearchComponent } from './bandeau-advanced-scearch/bandeau-advanced-scearch.component';

import {  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
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
import { BandeauPlaylistFilmComponent } from './bandeau-playlist-film/bandeau-playlist-film.component';
import {PlaylistService} from './playlist.service';

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
    BandeauPlaylistFilmComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatAutocompleteModule,
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
    MatTreeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TmdbService, PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
