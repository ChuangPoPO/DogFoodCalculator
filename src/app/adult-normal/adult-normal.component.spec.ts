import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KibbleSalmonMealComponent } from './kibble-salmon-meal.component';

describe('KibbleSalmonMealComponent', () => {
  let component: KibbleSalmonMealComponent;
  let fixture: ComponentFixture<KibbleSalmonMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KibbleSalmonMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KibbleSalmonMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
