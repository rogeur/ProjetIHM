import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeauResultSearchComponent } from './bandeau-result-search.component';

describe('BandeauResultSearchComponent', () => {
  let component: BandeauResultSearchComponent;
  let fixture: ComponentFixture<BandeauResultSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandeauResultSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeauResultSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
