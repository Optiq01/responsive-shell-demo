import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSizePageComponent } from './box-size-page.component';

describe('BoxSizePageComponent', () => {
  let component: BoxSizePageComponent;
  let fixture: ComponentFixture<BoxSizePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxSizePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSizePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
