import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcryBoxDemoComponent } from './srcry-box-demo.component';

describe('SrcryBoxDemoComponent', () => {
  let component: SrcryBoxDemoComponent;
  let fixture: ComponentFixture<SrcryBoxDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrcryBoxDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcryBoxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
