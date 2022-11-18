import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgPhotoComponent } from './svg-photo.component';



@NgModule({
  declarations: [
    SvgPhotoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SvgPhotoComponent
  ]
})
export class SvgPhotoComponentModule { }
