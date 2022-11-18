import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaseStopHInputComponent } from './chase-stop-h-input.component';

describe('ChaseStopHInputComponent', () => {
  let component: ChaseStopHInputComponent;
  let fixture: ComponentFixture<ChaseStopHInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaseStopHInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaseStopHInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
