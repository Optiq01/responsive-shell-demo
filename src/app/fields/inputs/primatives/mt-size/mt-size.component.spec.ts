import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtSizeComponent } from './mt-size.component';

describe('MtSizeComponent', () => {
  let component: MtSizeComponent;
  let fixture: ComponentFixture<MtSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
