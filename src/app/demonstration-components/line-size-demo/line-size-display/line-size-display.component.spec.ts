import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSizeDisplayComponent } from './line-size-display.component';

describe('LineSizeDisplayComponent', () => {
  let component: LineSizeDisplayComponent;
  let fixture: ComponentFixture<LineSizeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineSizeDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineSizeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
