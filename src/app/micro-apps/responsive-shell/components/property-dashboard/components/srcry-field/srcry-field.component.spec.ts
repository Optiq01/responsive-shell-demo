import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcryFieldComponent } from './srcry-field.component';

describe('SrcryFieldComponent', () => {
  let component: SrcryFieldComponent;
  let fixture: ComponentFixture<SrcryFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrcryFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcryFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
