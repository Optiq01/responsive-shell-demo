import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcryBoxDemoPageComponent } from './srcry-box-demo-page.component';

describe('SrcryBoxDemoPageComponent', () => {
  let component: SrcryBoxDemoPageComponent;
  let fixture: ComponentFixture<SrcryBoxDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrcryBoxDemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcryBoxDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
