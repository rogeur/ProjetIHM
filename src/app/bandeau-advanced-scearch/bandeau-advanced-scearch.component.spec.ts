import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeauAdvancedScearchComponent } from './bandeau-advanced-scearch.component';

describe('BandeauAdvancedScearchComponent', () => {
  let component: BandeauAdvancedScearchComponent;
  let fixture: ComponentFixture<BandeauAdvancedScearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandeauAdvancedScearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeauAdvancedScearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
