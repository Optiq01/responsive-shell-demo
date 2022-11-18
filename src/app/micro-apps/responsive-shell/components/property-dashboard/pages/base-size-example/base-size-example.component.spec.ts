import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeExampleComponent } from './base-size-example.component';

describe('BaseSizeExampleComponent', () => {
  let component: BaseSizeExampleComponent;
  let fixture: ComponentFixture<BaseSizeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSizeExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSizeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
