import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Basket4Component } from './basket4.component';

describe('Basket4Component', () => {
  let component: Basket4Component;
  let fixture: ComponentFixture<Basket4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Basket4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Basket4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
