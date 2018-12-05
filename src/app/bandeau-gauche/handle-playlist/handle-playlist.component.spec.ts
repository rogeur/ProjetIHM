import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlePlaylistComponent } from './handle-playlist.component';

describe('HandlePlaylistComponent', () => {
  let component: HandlePlaylistComponent;
  let fixture: ComponentFixture<HandlePlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlePlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
