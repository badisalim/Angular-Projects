import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Basket2Component } from './basket2.component';

describe('Basket2Component', () => {
  let component: Basket2Component;
  let fixture: ComponentFixture<Basket2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Basket2Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Basket2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
