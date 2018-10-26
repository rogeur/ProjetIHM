import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeauPlaylistFilmComponent } from './bandeau-playlist-film.component';

describe('BandeauPlaylistFilmComponent', () => {
  let component: BandeauPlaylistFilmComponent;
  let fixture: ComponentFixture<BandeauPlaylistFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandeauPlaylistFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeauPlaylistFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
