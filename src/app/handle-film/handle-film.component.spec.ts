import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleFilmComponent } from './handle-film.component';

describe('HandleFilmComponent', () => {
  let component: HandleFilmComponent;
  let fixture: ComponentFixture<HandleFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
