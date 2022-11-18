import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkHMinNudgeScaleInputComponent } from './stretch-shrink-h-min-nudge-scale-input.component';
import { MtSizeModule } from 'src/app/fields/inputs/primatives/mt-size/mt-size.module';



@NgModule({
  declarations: [
    StretchShrinkHMinNudgeScaleInputComponent
  ],
  imports: [
    CommonModule,
    MtSizeModule
  ],
  exports: [
    CommonModule,
    StretchShrinkHMinNudgeScaleInputComponent
  ],
  bootstrap: [StretchShrinkHMinNudgeScaleInputComponent]
})
export class StretchShrinkHMinNudgeScaleInputModule { }
