import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayslistMenuComponent } from './playslist-menu.component';

describe('PlayslistMenuComponent', () => {
  let component: PlayslistMenuComponent;
  let fixture: ComponentFixture<PlayslistMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayslistMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayslistMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
