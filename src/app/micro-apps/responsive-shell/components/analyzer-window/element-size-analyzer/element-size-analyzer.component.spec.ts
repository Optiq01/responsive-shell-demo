import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSizeAnalyzerComponent } from './element-size-analyzer.component';

describe('ElementSizeAnalyzerComponent', () => {
  let component: ElementSizeAnalyzerComponent;
  let fixture: ComponentFixture<ElementSizeAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementSizeAnalyzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementSizeAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
