import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeoCardComponent } from './leo-card.component';

describe('LeoCardComponent', () => {
  let component: LeoCardComponent;
  let fixture: ComponentFixture<LeoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
