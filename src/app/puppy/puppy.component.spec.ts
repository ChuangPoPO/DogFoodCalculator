import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawLessOneYearComponent } from './raw-less-one-year.component';

describe('RawLessOneYearComponent', () => {
  let component: RawLessOneYearComponent;
  let fixture: ComponentFixture<RawLessOneYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawLessOneYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawLessOneYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
