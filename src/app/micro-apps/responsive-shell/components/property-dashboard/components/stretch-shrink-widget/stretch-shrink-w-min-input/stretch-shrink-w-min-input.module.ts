import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkWMinInputComponent } from './stretch-shrink-w-min-input.component';
import { MtSizeModule } from 'src/app/fields/inputs/primatives/mt-size/mt-size.module';



@NgModule({
  declarations: [
    StretchShrinkWMinInputComponent
  ],
  imports: [
    CommonModule,
    MtSizeModule
  ],
  exports: [
    CommonModule,
    StretchShrinkWMinInputComponent
  ]
})
export class StretchShrinkWMinInputModule { }
