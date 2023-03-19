import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsComponent } from './birds.component';

describe('BirdsComponent', () => {
  let component: BirdsComponent;
  let fixture: ComponentFixture<BirdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
