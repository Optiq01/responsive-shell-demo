import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzerWindowComponent } from './analyzer-window.component';

describe('AnalyzerWindowComponent', () => {
  let component: AnalyzerWindowComponent;
  let fixture: ComponentFixture<AnalyzerWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzerWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzerWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
