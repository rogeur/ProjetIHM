import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigFilmComponent } from './big-film.component';

describe('BigFilmComponent', () => {
  let component: BigFilmComponent;
  let fixture: ComponentFixture<BigFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
