import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSizeComponent } from './line-size.component';

describe('LineSizeComponent', () => {
  let component: LineSizeComponent;
  let fixture: ComponentFixture<LineSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
