import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeauMovieComponent } from './bandeau-movie.component';

describe('BandeauMovieComponent', () => {
  let component: BandeauMovieComponent;
  let fixture: ComponentFixture<BandeauMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandeauMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeauMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
