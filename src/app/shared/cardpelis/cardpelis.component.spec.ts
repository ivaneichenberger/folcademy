import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpelisComponent } from './cardpelis.component';

describe('CardpelisComponent', () => {
  let component: CardpelisComponent;
  let fixture: ComponentFixture<CardpelisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardpelisComponent]
    });
    fixture = TestBed.createComponent(CardpelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
