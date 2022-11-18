import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeHNudgeScaleInputComponent } from './base-size-h-nudge-scale-input.component';
import { MtSizeModule } from 'src/app/fields/inputs/primatives/mt-size/mt-size.module';



@NgModule({
  declarations: [
    BaseSizeHNudgeScaleInputComponent
  ],
  imports: [
    CommonModule,
    MtSizeModule,
  ],
  exports: [
    CommonModule,
    BaseSizeHNudgeScaleInputComponent
  ],
  bootstrap:[BaseSizeHNudgeScaleInputComponent]
})
export class BaseSizeHNudgeScaleInputModule { }
