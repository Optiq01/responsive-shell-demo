import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSizeInputComponent } from './line-size-input.component';

describe('LineSizeInputComponent', () => {
  let component: LineSizeInputComponent;
  let fixture: ComponentFixture<LineSizeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineSizeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineSizeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
