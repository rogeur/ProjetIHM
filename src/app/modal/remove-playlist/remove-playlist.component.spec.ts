import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePlaylistComponent } from './remove-playlist.component';

describe('RemovePlaylistComponent', () => {
  let component: RemovePlaylistComponent;
  let fixture: ComponentFixture<RemovePlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovePlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
