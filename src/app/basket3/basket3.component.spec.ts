import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Basket3Component } from './basket3.component';

describe('Basket3Component', () => {
  let component: Basket3Component;
  let fixture: ComponentFixture<Basket3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Basket3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Basket3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
