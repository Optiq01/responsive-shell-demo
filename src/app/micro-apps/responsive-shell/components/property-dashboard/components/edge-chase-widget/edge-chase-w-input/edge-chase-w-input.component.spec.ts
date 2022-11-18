import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeChaseWInputComponent } from './edge-chase-w-input.component';

describe('EdgeChaseWInputComponent', () => {
  let component: EdgeChaseWInputComponent;
  let fixture: ComponentFixture<EdgeChaseWInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgeChaseWInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeChaseWInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
