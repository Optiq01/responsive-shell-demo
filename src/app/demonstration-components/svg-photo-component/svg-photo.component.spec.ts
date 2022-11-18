import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPhotoComponent } from './svg-photo.component';

describe('SvgPhotoComponentComponent', () => {
  let component: SvgPhotoComponent;
  let fixture: ComponentFixture<SvgPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
