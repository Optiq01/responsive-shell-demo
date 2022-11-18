import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSizeDemoComponent } from './line-size-demo.component';

describe('LineSizeDemoComponent', () => {
  let component: LineSizeDemoComponent;
  let fixture: ComponentFixture<LineSizeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineSizeDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineSizeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
