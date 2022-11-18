import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeChaseHInputComponent } from './edge-chase-h-input.component';

describe('EdgeChaseHInputComponent', () => {
  let component: EdgeChaseHInputComponent;
  let fixture: ComponentFixture<EdgeChaseHInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgeChaseHInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeChaseHInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
