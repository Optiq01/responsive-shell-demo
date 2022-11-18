import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamOutputComponent } from './param-output.component';

describe('ParamOutputComponent', () => {
  let component: ParamOutputComponent;
  let fixture: ComponentFixture<ParamOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
