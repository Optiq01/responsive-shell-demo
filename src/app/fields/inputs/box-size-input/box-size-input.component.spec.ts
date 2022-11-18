import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSizeInputComponent } from './box-size-input.component';

describe('BoxSizeInputComponent', () => {
  let component: BoxSizeInputComponent;
  let fixture: ComponentFixture<BoxSizeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxSizeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSizeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
