import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveShellComponent } from './responsive-shell.component';

describe('ResponsiveShellComponent', () => {
  let component: ResponsiveShellComponent;
  let fixture: ComponentFixture<ResponsiveShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
