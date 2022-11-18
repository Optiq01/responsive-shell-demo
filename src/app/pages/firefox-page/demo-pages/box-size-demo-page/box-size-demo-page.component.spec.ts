import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSizeDemoPageComponent } from './box-size-demo-page.component';

describe('BoxSizeDemoPageComponent', () => {
  let component: BoxSizeDemoPageComponent;
  let fixture: ComponentFixture<BoxSizeDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxSizeDemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSizeDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
