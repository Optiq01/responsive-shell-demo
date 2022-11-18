import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcryBoxReaderComponent } from './srcry-box-reader.component';

describe('SrcryBoxReaderComponent', () => {
  let component: SrcryBoxReaderComponent;
  let fixture: ComponentFixture<SrcryBoxReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrcryBoxReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcryBoxReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
