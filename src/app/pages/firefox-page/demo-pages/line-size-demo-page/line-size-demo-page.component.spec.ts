import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSizeDemoPageComponent } from './line-size-demo-page.component';

describe('LineSizeDemoPageComponent', () => {
  let component: LineSizeDemoPageComponent;
  let fixture: ComponentFixture<LineSizeDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineSizeDemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineSizeDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
