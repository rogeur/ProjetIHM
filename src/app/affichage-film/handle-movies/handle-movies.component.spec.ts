import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleMoviesComponent } from './handle-movies.component';

describe('HandleMoviesComponent', () => {
  let component: HandleMoviesComponent;
  let fixture: ComponentFixture<HandleMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
