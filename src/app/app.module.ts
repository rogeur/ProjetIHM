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
import {MatCardModule, MatSliderModule} from '@angular/material';
import { BandeauResultSearchComponent } from './bandeau-result-search/bandeau-result-search.component';
import { BandeauAdvancedScearchComponent } from './bandeau-advanced-scearch/bandeau-advanced-scearch.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    BandeauResultSearchComponent,
    BandeauAdvancedScearchComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule,
  ],
  providers: [TmdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
