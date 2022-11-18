import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSizePageComponent } from './line-size-page.component';

describe('LineSizePageComponent', () => {
  let component: LineSizePageComponent;
  let fixture: ComponentFixture<LineSizePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineSizePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineSizePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
