import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleFilmComponent } from './little-film.component';

describe('LittleFilmComponent', () => {
  let component: LittleFilmComponent;
  let fixture: ComponentFixture<LittleFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
