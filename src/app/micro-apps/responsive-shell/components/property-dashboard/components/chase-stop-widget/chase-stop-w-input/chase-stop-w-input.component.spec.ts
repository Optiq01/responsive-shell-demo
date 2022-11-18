import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaseStopWInputComponent } from './chase-stop-w-input.component';

describe('ChaseStopWInputComponent', () => {
  let component: ChaseStopWInputComponent;
  let fixture: ComponentFixture<ChaseStopWInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaseStopWInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaseStopWInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
