import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleBandeauComponent } from './handle-bandeau.component';

describe('HandleBandeauComponent', () => {
  let component: HandleBandeauComponent;
  let fixture: ComponentFixture<HandleBandeauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleBandeauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleBandeauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
