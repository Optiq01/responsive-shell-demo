import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaseStopExampleComponent } from './chase-stop-example.component';

describe('ChaseStopExampleComponent', () => {
  let component: ChaseStopExampleComponent;
  let fixture: ComponentFixture<ChaseStopExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaseStopExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaseStopExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
