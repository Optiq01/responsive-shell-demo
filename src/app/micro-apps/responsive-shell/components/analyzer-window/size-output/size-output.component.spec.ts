import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeOutputComponent } from './size-output.component';

describe('SizeOutputComponent', () => {
  let component: SizeOutputComponent;
  let fixture: ComponentFixture<SizeOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
