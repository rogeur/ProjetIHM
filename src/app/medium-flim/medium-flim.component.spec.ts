import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumFlimComponent } from './medium-flim.component';

describe('MediumFlimComponent', () => {
  let component: MediumFlimComponent;
  let fixture: ComponentFixture<MediumFlimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumFlimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumFlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
